import React from 'react';

export const Heading1 = ({ children, className = '' }) => (
  <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${className}`}>
    {children}
  </h1>
);

export const Heading2 = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${className}`}>
    {children}
  </h2>
);

export const Heading3 = ({ children, className = '' }) => (
  <h3 className={`text-2xl md:text-3xl font-semibold tracking-tight ${className}`}>
    {children}
  </h3>
);

export const Heading4 = ({ children, className = '' }) => (
  <h4 className={`text-xl md:text-2xl font-semibold tracking-tight ${className}`}>
    {children}
  </h4>
);

export const BodyText = ({ children, className = '' }) => (
  <p className={`text-base md:text-lg leading-relaxed text-muted-foreground ${className}`}>
    {children}
  </p>
);

export const SmallText = ({ children, className = '' }) => (
  <p className={`text-sm text-muted-foreground ${className}`}>
    {children}
  </p>
);