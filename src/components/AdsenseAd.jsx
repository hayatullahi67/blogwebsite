import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from './ui/card';

export default function AdsenseAd({ position, onAdLoaded }) {
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  const adRef = useRef(null);

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}

    // Check if ad is loaded after a delay
    const checkAdLoaded = () => {
      if (adRef.current) {
        const adElement = adRef.current;
        const hasContent = adElement.innerHTML.trim() !== '';
        const hasIframe = adElement.querySelector('iframe');
        const hasAdContent = hasContent || hasIframe;
        
        if (hasAdContent) {
          setIsAdLoaded(true);
          // Notify parent component that ad is loaded
          if (onAdLoaded) {
            onAdLoaded();
          }
        }
      }
    };

    // Check after 2 seconds
    const timer = setTimeout(checkAdLoaded, 2000);
    
    // Also check after 5 seconds as a fallback
    const fallbackTimer = setTimeout(checkAdLoaded, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, [onAdLoaded]);

  // Don't render anything if no ad is loaded
  if (!isAdLoaded) {
    return null;
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border border-border h-full">
      <CardContent className="p-6 h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ 
              display: "block",
              width: "100%",
              height: "100%",
              minHeight: "200px",
              // border:"1px solid red"
            }}
            data-ad-format="fluid"
            data-ad-layout-key="-5d+c9-1y-85+x4"
            data-ad-client="ca-pub-1347813660909383"
            data-ad-slot="8214612847"
          ></ins>
        </div>
      </CardContent>
    </Card>
  );
}