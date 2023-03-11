import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="sm-height:text-sm xs-height:text-xs 2xs-height:text-[6px]">
      <Head />
      <body className="overflow-hidden font-inter text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
