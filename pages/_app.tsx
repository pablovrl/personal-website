import "@fontsource/noto-sans";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/layout/main";

const FONT = "Noto sans";
const theme = extendTheme({
  fonts: {
    heading: FONT,
    body: FONT,
  },
  config: {
    disableTransitionOnChange: false,
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
