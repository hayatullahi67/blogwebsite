import React, { useEffect, useRef } from 'react';

const AdsterraAd = ({ adKey, width, height, className = '' }) => {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current) {
      // Clear any existing content
      adRef.current.innerHTML = '';
      
      // Create and configure the ad script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `
        atOptions = {
          'key' : '${adKey}',
          'format' : 'iframe',
          'height' : ${height},
          'width' : ${width},
          'params' : {}
        };
      `;
      
      // Create the invoke script
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;
      
      // Append scripts to the ad container
      adRef.current.appendChild(script);
      adRef.current.appendChild(invokeScript);
    }
  }, [adKey, width, height]);

  return (
    <div 
      ref={adRef}
      className={`adsterra-ad ${className}`}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        margin: '20px auto',
        display: 'block',
        textAlign: 'center'
      }}
    />
  );
};

export default AdsterraAd; 