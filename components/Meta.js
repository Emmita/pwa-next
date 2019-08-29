import Head from "next/head";

const Meta = () => (
  <Head>
      <link rel="manifest" href="/static/manifest.json"></link>
    <meta name="theme-color" content="orange" />

    <meta name="apple-mobile-web-app-title" content="Recetas" />
    <meta name="apple-mobile-web-app-capable" content="no" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  ...
    <title>PWA</title>
  </Head>
);

export default Meta;
