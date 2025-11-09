// Deno edge runtime types are loaded automatically

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, analysisContext } = await req.json();
    
    if (!message) {
      throw new Error('No message provided');
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log('Processing coach message:', message);

    // Build context from analysis if provided
    let contextInfo = '';
    if (analysisContext) {
      contextInfo = `
Current Analysis Context:
- Sport: ${analysisContext.sportType || 'Not specified'}
- Score: ${analysisContext.totalScore || 'N/A'}
- Key Strengths: ${analysisContext.strengths?.join(', ') || 'N/A'}
- Areas to Improve: ${analysisContext.weaknesses?.join(', ') || 'N/A'}
`;
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are Coach Alex, an Olympic-level gymnastics coach AI with 20+ years of experience coaching elite athletes.

Your personality:
- Encouraging but honest
- Technical and precise
- Focus on biomechanics and proper form
- Give actionable advice
- Reference FIG scoring criteria when relevant
- Motivational but realistic

${contextInfo}

Provide coaching feedback that is:
1. Specific and actionable
2. Based on Olympic standards
3. Encouraging yet honest
4. Focused on technique improvement
5. Include drills or exercises when appropriate

Keep responses concise (2-3 paragraphs max) and coach-like.`
          },
          {
            role: 'user',
            content: message
          }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API error:', response.status, errorText);
      
      if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      }
      if (response.status === 402) {
        throw new Error('AI credits depleted. Please add more credits to continue.');
      }
      
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const coachResponse = data.choices?.[0]?.message?.content || 'I apologize, but I had trouble processing that. Could you rephrase your question?';
    
    console.log('Coach response generated');

    return new Response(
      JSON.stringify({ 
        response: coachResponse,
        timestamp: new Date().toISOString()
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error) {
    console.error('Error in coach chat:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        response: 'I apologize, but I encountered an error. Please try again.'
      }),
      {
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
      }
    );
  }
});
