import React from 'react';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import Script from 'next/script';

export const metadata = {
  title: 'Shopify App',
  description: 'A Shopify app built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="shopify-api-key" content={process.env.NEXT_PUBLIC_SHOPIFY_API_KEY} />
      </head>
      <body>
        <Script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" strategy="beforeInteractive" />
        <AppProvider i18n={enTranslations}>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}