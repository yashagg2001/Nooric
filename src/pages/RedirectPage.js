
import React, { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // Redirect to Google after component mounts
    window.location.href = 'https://www.google.com';
  }, []);

  return <div>Loading...</div>;
};

export default RedirectPage;
