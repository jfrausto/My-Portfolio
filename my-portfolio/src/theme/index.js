import { extendTheme } from "@chakra-ui/react";


// ! Global style overrides
import styles from "./styles";
// ! Foundational style overrides
// ...
// import brand colors
import colors from "./foundations/colors";
// ! Component style overrides
import Button from "./components/Button";

// configure the portfolio to start in dark mode
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const overrides = {
  config,
  styles,
  // Other foundational style overrides go here
  colors,
  components: {
    Button,
    // Other components go here
  },

}
export default extendTheme(overrides);
