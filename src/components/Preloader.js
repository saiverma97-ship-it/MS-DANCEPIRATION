'use client';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Allow time for animation to complete
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-logo">
          MS <span>DANCEPIRATION DANCE ACADEMY BIDAR</span>
        </div>
        <div className="preloader-line"></div>
      </div>
    </div>
  );
}
