'use client';

import { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    ''
  );
};
export default AdBanner;