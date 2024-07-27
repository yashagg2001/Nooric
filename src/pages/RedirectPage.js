
import React, { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    window.location.replace('https://www.google.com');
  }, []);

  return <div>Loading...</div>;
};

export default RedirectPage;
