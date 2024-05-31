import "@/styles/globals.scss";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/context/theme-context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  );
}
