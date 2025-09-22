import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/PWANlogo.png" />
        <link rel="shortcut icon" type="image/png" href="/PWANlogo.png" />
        <link rel="apple-touch-icon" href="/PWANlogo.png" />
        
        {/* Meta tags for better SEO */}
        <meta name="description" content="PWAN Elite - Leading real estate company specializing in land acquisition and property development across Nigeria." />
        <meta name="keywords" content="real estate, land, property, investment, Nigeria, PWAN Elite" />
        <meta name="author" content="PWAN Elite" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="PWAN Elite - Real Estate Investment" />
        <meta property="og:description" content="Exposing clients to goldmine that abounds in land and housing globally and spreading empowerment through real estate opportunities." />
        <meta property="og:image" content="/PWANlogo.png" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PWAN Elite - Real Estate Investment" />
        <meta name="twitter:description" content="Exposing clients to goldmine that abounds in land and housing globally and spreading empowerment through real estate opportunities." />
        <meta name="twitter:image" content="/PWANlogo.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
