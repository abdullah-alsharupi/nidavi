import Link from 'next/link';

export default function DatenschutzPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
      
      <section className="mb-12">
        <p className="mb-6">
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Hier erfahren Sie, wie wir mit Ihren Daten umgehen.
        </p>
      </section>

      <section id="cookie-settings" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-4">Cookie-Einstellungen</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-medium mb-3">Ihre aktuellen Einstellungen</h3>
          <p className="mb-4">Hier können Sie Ihre Cookie-Präferenzen verwalten:</p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="necessary" 
                checked 
                disabled
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="necessary" className="ml-2 block text-sm text-gray-700">
                Notwendige Cookies (immer aktiv)
              </label>
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="analytics" 
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="analytics" className="ml-2 block text-sm text-gray-700">
                Analyse-Cookies
              </label>
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="marketing" 
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="marketing" className="ml-2 block text-sm text-gray-700">
                Marketing-Cookies
              </label>
            </div>
          </div>
          
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Einstellungen speichern
          </button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher</h2>
        <p className="mb-2">Arslan Tiefbau</p>
        <p className="mb-2">Fatih Arslan</p>
        <p className="mb-2">Fritz-von-Weidenbach Str. 20</p>
        <p className="mb-2">83714 Miesbach</p>
        <p className="mb-2">Deutschland</p>
        <p className="mb-2">Telefon: +49 172 / 8035514</p>
        <p className="mb-2">E-Mail: info@arslantiefbau.de</p>
      </section>

      {/* Add all other sections from your privacy policy here */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise</h2>
        <p className="mb-4">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>
        <p>
          Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>
      </section>

      {/* Continue with all other sections... */}

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-xl font-semibold mb-4">Fragen zum Datenschutz?</h2>
        <p className="mb-4">
          Bei Fragen zum Datenschutz oder zur Verarbeitung Ihrer Daten können Sie sich jederzeit an uns wenden:
        </p>
        <Link 
          href="/kontakt" 
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Kontakt aufnehmen
        </Link>
      </section>
    </div>
  );
}