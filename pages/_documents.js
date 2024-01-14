import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document
{
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
                    <link rel="preload" as="style" crossOrigin href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css" />
                </Head>
                <body data-theme="light">
                <Main />
                </body>
                <NextScript />
            </Html>
        );
    }
}
