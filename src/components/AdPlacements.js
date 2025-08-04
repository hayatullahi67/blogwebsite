import React from 'react';
import AdsterraAd from './AdsterraAd';

// Your Adsterra ad keys
const AD_KEYS = {
  SIDEBAR_BANNER: '6a8466d2a510049dfb758f2ee58dc402', // 160x300
  HORIZONTAL_BANNER: 'bb1a9178c14c40977f396172f88771a7' // 320x50
};

// Sidebar ad component (160x300)
export const SidebarAd = () => (
  <div className="sidebar-ad">
    <AdsterraAd 
      adKey={AD_KEYS.SIDEBAR_BANNER}
      width={160}
      height={300}
      className="sidebar-adsterra"
    />
  </div>
);

// Horizontal banner ad component (320x50)
export const HorizontalBannerAd = () => (
  <div className="horizontal-banner-ad">
    <AdsterraAd 
      adKey={AD_KEYS.HORIZONTAL_BANNER}
      width={320}
      height={50}
      className="horizontal-adsterra"
    />
  </div>
);

// In-content ad component (can be placed between paragraphs)
export const InContentAd = () => (
  <div className="in-content-ad">
    <AdsterraAd 
      adKey={AD_KEYS.HORIZONTAL_BANNER}
      width={320}
      height={50}
      className="in-content-adsterra"
    />
  </div>
);

// Footer ad component
export const FooterAd = () => (
  <div className="footer-ad">
    <AdsterraAd 
      adKey={AD_KEYS.HORIZONTAL_BANNER}
      width={320}
      height={50}
      className="footer-adsterra"
    />
  </div>
);

export default {
  SidebarAd,
  HorizontalBannerAd,
  InContentAd,
  FooterAd
}; 