import NextDocument, { Head, Html, Main, NextScript } from "next/document";

type Props = {};
class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head />
        <body className="font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
