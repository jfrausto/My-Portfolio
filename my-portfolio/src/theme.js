import { extendTheme } from "@chakra-ui/react";

// configure the portfolio to start in dark mode
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};


const theme = extendTheme( {config} );

export default theme;