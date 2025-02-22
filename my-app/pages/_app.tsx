import type { AppProps } from "next/app";
import ClassificationProvider from "../context/ClassificationContext";
import "../styles/globals.css"; // <-- If using Tailwind or custom CSS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClassificationProvider>
      <Component {...pageProps} />
    </ClassificationProvider>
  );
}

export default MyApp;
