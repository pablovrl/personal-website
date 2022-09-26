import "@fontsource/noto-sans";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/layout/main";

const FONT = "Noto sans";
const theme = extendTheme({
  colors: {
    light: {
      background: "#FAFBF5",
      primary: { 500: "#99c221", 600: "#6e910a" },
      secondary: { 500: "#f2ede9", 600: "#e7e1dc" },
    },
    dark: {
      background: "#16161a",
      primary: { 500: "#7f5af0", 600: "#e068fd" },
      secondary: { 500: "#29293e", 600: "#262642" },
    },
  },
  fonts: {
    heading: FONT,
    body: FONT,
  },
  config: {
    disableTransitionOnChange: false,
    initialColorMode: "light",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
