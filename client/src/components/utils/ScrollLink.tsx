import React from 'react';
import { Link, useLocation } from 'wouter';

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Custom Link component that scrolls to top when clicked
const ScrollLink: React.FC<ScrollLinkProps> = ({ href, children, className, onClick, ...props }) => {
  const [, navigate] = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Execute any additional onClick handler if provided
    if (onClick) onClick();
    
    // Navigate to the new route
    navigate(href);
    
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <Link href={href}>
      <a className={className} onClick={handleClick} {...props}>
        {children}
      </a>
    </Link>
  );
};

export default ScrollLink;
