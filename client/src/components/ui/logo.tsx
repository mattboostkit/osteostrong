import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { getSiteLogo, urlFor } from '@/lib/sanity';

interface LogoProps {
  variant?: 'main' | 'alt' | 'white';
  className?: string;
  linkTo?: string;
  size?: 'small' | 'medium' | 'large';
}

const Logo = ({ variant = 'main', className = '', linkTo = '/', size = 'medium' }: LogoProps) => {
  const [logoData, setLogoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        setLoading(true);
        const data = await getSiteLogo();
        setLogoData(data);
      } catch (err) {
        console.error('Error fetching logo:', err);
        setError('Failed to load logo');
      } finally {
        setLoading(false);
      }
    };

    fetchLogo();
  }, []);

  // Default fallback logo
  const renderFallbackLogo = () => {
    const sizeClasses = {
      small: 'h-8 max-h-8',
      medium: 'h-12 max-h-12',
      large: 'h-16 max-h-16 md:h-20 md:max-h-20'
    };

    // Set colors based on variant
    const logoColor = variant === 'white' ? 'text-white' : 'text-primary';
    const textColor = variant === 'white' ? 'text-white' : 'text-secondary';

    return (
      <div className={`flex items-center ${className}`}>
        <svg
          className={`${sizeClasses[size]} w-auto ${logoColor}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          />
          <path
            d="M8 12l3 3 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={`ml-2 ${size === 'large' ? 'text-3xl' : size === 'small' ? 'text-xl' : 'text-2xl'} font-bold ${textColor}`}>
          OsteoStrong
        </span>
      </div>
    );
  };

  if (loading) {
    return renderFallbackLogo();
  }

  if (error || !logoData) {
    console.warn('Using fallback logo due to error:', error);
    return renderFallbackLogo();
  }

  // Select the appropriate logo based on variant
  let logoImage;
  if (variant === 'main') {
    logoImage = logoData.mainLogo;
  } else if (variant === 'alt') {
    logoImage = logoData.altLogo || logoData.mainLogo;
  } else if (variant === 'white') {
    // For white variant, we'll use altLogo but apply a white filter if needed
    logoImage = logoData.altLogo || logoData.mainLogo;
  }

  if (!logoImage) {
    return renderFallbackLogo();
  }

  const sizeClasses = {
    small: 'h-8 max-h-8',
    medium: 'h-12 max-h-12',
    large: 'h-16 max-h-16 md:h-20 md:max-h-20'
  };

  return (
    <Link href={linkTo}>
      <div className={`block cursor-pointer ${className}`}>
        <img
          src={urlFor(logoImage).url()}
          alt={logoData.title || 'OsteoStrong'}
          className={`${sizeClasses[size]} w-auto object-contain ${variant === 'white' ? 'brightness-0 invert' : ''}`}
          style={{ aspectRatio: 'auto' }}
        />
      </div>
    </Link>
  );
};

export default Logo;
