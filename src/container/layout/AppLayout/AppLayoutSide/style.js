import { chakra } from "@chakra-ui/react";
import appLayoutConfig from "config/appLayout.config";

const Container = chakra("div", {
  baseStyle: ({ open, theme }) => {
    const { easing, duration } = theme.transition;
    return {
      w: open
        ? appLayoutConfig.PrimarySideOpenWidth
        : appLayoutConfig.PrimarySideCloseWidth,
      h: "100vh",
      boxShadow: open ? "4px 0 8px rgb(0,0,0,.15)" : null,
      borderRight: "1px solid",
      borderColor: "brand",
      transition: [easing["ease-in-out"], duration["fast"]].join(" "),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "fixed",
      left: 0,
      top: 0,
    };
  },
});

export { Container };
