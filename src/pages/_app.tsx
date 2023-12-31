import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/bootstrap-icons/font/bootstrap-icons.scss";
// import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />;
}
