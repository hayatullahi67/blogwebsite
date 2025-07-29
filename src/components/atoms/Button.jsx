import React from 'react';
import { Button as ShadcnButton } from '../ui/button';

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  onClick,
  ...props 
}) => {
  return (
    <ShadcnButton 
      variant={variant} 
      size={size} 
      className={`transition-all duration-200 hover:scale-105 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
};

export default Button;