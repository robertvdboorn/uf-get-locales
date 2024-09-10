import { Locale } from '@uniformdev/canvas';
import React from 'react';

type ServerSideLocalesListProps = {
  locales: Locale[];
};

const ServerSideLocalesList: React.FC<ServerSideLocalesListProps> = ({ locales }) => {
  if (!locales || locales.length === 0) {
    return <p>No locales available.</p>;
  }

  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold">Available Locales (Server-side)</h2>
      <ul className="list-disc list-inside">
        {locales.map((locale, index) => (
          <li key={index}>
            {locale.displayName} ({locale.locale})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServerSideLocalesList;
