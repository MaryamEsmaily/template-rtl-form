import isValidHTMLProp from "@emotion/is-prop-valid";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import appLayoutConfig from "config/appLayout.config";

const Main = chakra("main", {
  shouldForwardProp: (prop) => {
    const isChakraProp = !shouldForwardProp(prop);
    if (isChakraProp) return false;
    const isValidProp = isValidHTMLProp(prop);
    if (isValidProp) return true;
    return ["sample"].includes(prop);
  },
  baseStyle: ({ open, theme }) => {
    const { easing, duration } = theme.transition;
    return {
      transition: [easing["ease-in-out"], duration["fast"]].join(" "),
      w: `calc(100% - ${
        (open
          ? appLayoutConfig.PrimarySideOpenWidth
          : appLayoutConfig.PrimarySideCloseWidth) + 50
      }px)`,
      overflow: "hidden",
      ml: `${
        open
          ? appLayoutConfig.PrimarySideOpenWidth
          : appLayoutConfig.PrimarySideCloseWidth
      }px`,
    };
  },
});

export { Main };
