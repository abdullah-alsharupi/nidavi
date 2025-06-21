"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent === null) {
      setShowBanner(true);
    } else {
      setConsent(storedConsent === 'true');
      if (storedConsent === 'true') {
        loadAnalytics();
      }
    }
  }, []);

  const loadAnalytics = () => {
    // Load your tracking scripts here
    console.log('Loading analytics scripts...');
  };

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'true');
    setConsent(true);
    setShowBanner(false);
    loadAnalytics();
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'false');
    setConsent(false);
    setShowBanner(false);
  };

  const openSettings = () => {
    router.push('/privacy');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-6 z-50 shadow-lg border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold mb-2">Cookie-Einstellungen</h3>
        <p className="text-sm text-gray-600 mb-4">
          Wir verwenden Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. 
          Einige Cookies sind technisch notwendig, andere helfen uns dabei, diese Website und 
          Ihre Erfahrung zu verbessern. Weitere Informationen finden Sie in unserer{' '}
          <a 
            href="/datenschutz" 
            className="text-blue-600 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              openSettings();
            }}
          >
            Datenschutzerklärung
          </a>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={openSettings}
            className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Einstellungen
          </button>
          <button 
            onClick={acceptNecessary}
            className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Nur notwendige
          </button>
          <button 
            onClick={acceptAll}
            className="px-4 py-2 text-sm bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 transition-colors"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}