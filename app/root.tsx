import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { ReactElement, useEffect, useState } from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [outlet, setoutlet] = useState<ReactElement | null>(null);

  useEffect(() => {
    setoutlet(<Outlet />);
  }, []);

  return outlet;
}
