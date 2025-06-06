import { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'cookie_consent_accepted';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm mb-2 sm:mb-0">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <button
          onClick={handleAccept}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
