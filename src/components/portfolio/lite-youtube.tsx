import { useState } from "react";
import { Play } from "lucide-react";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
}

export function LiteYouTube({ videoId, title }: LiteYouTubeProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="absolute inset-0 w-full h-full group cursor-pointer"
      aria-label={`Play video: ${title}`}
      data-testid={`button-play-${videoId}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <span className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
        <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
          <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
        </span>
      </span>
    </button>
  );
}
