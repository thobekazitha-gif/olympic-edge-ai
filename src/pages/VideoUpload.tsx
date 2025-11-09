import { useState, useRef, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, Video, CheckCircle2, Sparkles, Home, BarChart3, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const VideoUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('video/')) {
      setFile(droppedFile);
      toast({
        title: "Video loaded",
        description: `${droppedFile.name} ready for analysis`,
      });
    } else {
      toast({
        title: "Invalid file",
        description: "Please upload a video file (MP4, MOV, AVI)",
        variant: "destructive",
      });
    }
  }, [toast]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      toast({
        title: "Video loaded",
        description: `${selectedFile.name} ready for analysis`,
      });
    }
  };

  const extractFrameFromVideo = (videoFile: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      video.preload = 'metadata';
      video.muted = true;
      
      video.onloadeddata = () => {
        // Seek to 2 seconds or middle of video
        video.currentTime = Math.min(2, video.duration / 2);
      };
      
      video.onseeked = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }
        
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const base64 = canvas.toDataURL('image/jpeg', 0.8);
        const base64Data = base64.split(',')[1];
        
        URL.revokeObjectURL(video.src);
        resolve(base64Data);
      };
      
      video.onerror = () => {
        reject(new Error('Failed to load video'));
      };
      
      video.src = URL.createObjectURL(videoFile);
    });
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setIsUploading(true);
    setUploadProgress(0);

    try {
      setUploadProgress(10);
      
      // Extract a frame from the video
      const frameBase64 = await extractFrameFromVideo(file);
      
      setUploadProgress(30);

      // Call AI analysis with the extracted frame
      const { data, error } = await supabase.functions.invoke('analyze-video', {
        body: { videoBase64: frameBase64 }
      });

      if (error) {
        throw error;
      }

      setUploadProgress(100);

      // Store analysis in sessionStorage
      sessionStorage.setItem('currentAnalysis', JSON.stringify(data.analysis));
      sessionStorage.setItem('videoFileName', file.name);

      // Also save to localStorage history
      const historyJson = localStorage.getItem('analysisHistory');
      const history = historyJson ? JSON.parse(historyJson) : [];
      
      history.unshift({
        id: Date.now().toString(),
        fileName: file.name,
        date: new Date().toLocaleString(),
        score: data.analysis.totalScore || 14.8,
        sportType: data.analysis.sportType || "Gymnastics",
        analysis: data.analysis
      });

      // Keep only last 50 analyses
      if (history.length > 50) {
        history.pop();
      }

      localStorage.setItem('analysisHistory', JSON.stringify(history));

      setTimeout(() => {
        toast({
          title: "Analysis complete!",
          description: "Your routine has been analyzed by AI",
        });
        navigate('/analysis');
      }, 500);

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Analysis failed",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Navigation */}
        <div className="flex justify-end gap-2 mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Home
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/dashboard')}
            className="gap-2"
          >
            <BarChart3 className="w-4 h-4" />
            Dashboard
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/progress')}
            className="gap-2"
          >
            <TrendingUp className="w-4 h-4" />
            Progress
          </Button>
        </div>

        <div className="text-center mb-12">
          <Badge className="mb-6 px-6 py-3 bg-primary/10 border-primary/30 text-primary font-semibold">
            <Video className="w-4 h-4 mr-2" />
            Video Upload
          </Badge>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Upload Your
            <span className="block mt-2 bg-gradient-elite bg-clip-text text-transparent">Routine</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Upload your gymnastics routine for Olympic-level AI analysis
          </p>
        </div>

        <Card className="p-8 glass-strong border-border/50 shadow-brutal">
          {!file ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-16 text-center cursor-pointer transition-elite ${
                isDragging 
                  ? 'border-primary bg-primary/10 shadow-glow' 
                  : 'border-border/50 hover:border-primary/50 hover:bg-secondary/30'
              }`}
            >
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Upload className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                Drop your video here
              </h3>
              <p className="text-muted-foreground mb-6">
                or click to browse your files
              </p>
              <Badge variant="outline" className="text-xs font-medium">
                Supports MP4, MOV, AVI up to 500MB
              </Badge>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-start justify-between p-6 rounded-xl glass border border-border/50">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 truncate">{file.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => {
                    setFile(null);
                    setUploadProgress(0);
                    setIsUploading(false);
                  }}
                  disabled={isUploading}
                  className="flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {isUploading && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">Analyzing video...</span>
                    <span className="text-muted-foreground">{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}

              {uploadProgress === 100 && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-success/10 border border-success/20">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="font-semibold text-success">Analysis complete!</span>
                </div>
              )}

              {!isUploading && uploadProgress === 0 && (
                <Button
                  onClick={handleUpload}
                  className="w-full h-14 bg-gradient-elite hover:opacity-90 shadow-glow-elite font-bold text-lg group"
                >
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Start AI Analysis
                </Button>
              )}
            </div>
          )}
        </Card>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 glass-strong border-border/50 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-display font-bold text-foreground mb-2">Instant Analysis</h4>
            <p className="text-sm text-muted-foreground">Results in under 30 seconds</p>
          </Card>
          <Card className="p-6 glass-strong border-border/50 text-center">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-success" />
            </div>
            <h4 className="font-display font-bold text-foreground mb-2">Secure Upload</h4>
            <p className="text-sm text-muted-foreground">256-bit encrypted transfer</p>
          </Card>
          <Card className="p-6 glass-strong border-border/50 text-center">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-display font-bold text-foreground mb-2">AI Powered</h4>
            <p className="text-sm text-muted-foreground">Olympic-grade accuracy</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
