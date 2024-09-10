import { Locale } from '@uniformdev/canvas';
import React, { useEffect, useState } from 'react';

const ClientSideLocalesList: React.FC = () => {
  const [locales, setLocales] = useState<Locale[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLocales() {
      try {
        const response = await fetch(`/api/locales`);
        if (!response.ok) {
          throw new Error("Failed to fetch locales");
        }
        const data = await response.json();
        setLocales(data.locales);
      } catch (error) {
        setError((error as Error).message);
      }
    }

    fetchLocales();
  }, []);

  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold">Available Locales (Client-side)</h2>
      {error && <p className="text-red-600">Error: {error}</p>}
      {locales.length > 0 ? (
        <ul className="list-disc list-inside">
          {locales.map((locale, index) => (
            <li key={index}>
              {locale.displayName} ({locale.locale})
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>Loading locales...</p>
      )}
    </section>
  );
};

export default ClientSideLocalesList;
