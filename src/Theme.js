import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  fonts: {
    body: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    heading: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    mono: "Menlo, monospace",
  },
  styles: {
    global: {
      body: {
        margin: 0,
        textAlign: "-webkit-center",
        color: "rgba(255, 255, 255, 0.87)",
        backgroundColor: "#242424",
        fontSynthesis: "none",
        paddingTop: "1rme",
      },
      a: {
        fontWeight: "500",
        color: "#646cff",
        textDecoration: "inherit",
        _hover: {
          color: "#535bf2",
        },
      },
      option: {
        background: "#242424 !important",
      },
    },
  },
});

export default Theme;
