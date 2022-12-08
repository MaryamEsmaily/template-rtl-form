import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useAppLayoutDispatch, useAppLayoutState } from "hook/appLayout";
import { Container } from "./style";

function AppLayoutSide() {
  const { open } = useAppLayoutState();
  const dispatch = useAppLayoutDispatch();
  //

  return (
    <Container open={open}>
      <Box onClick={() => dispatch({ type: "TOGGLE" })} pt={4} cursor="pointer">
        <HamburgerIcon fontSize="26px" />
      </Box>
      <Box w="full" display="flex" flexDirection="column">
        <Box as="a" href="#" cursor="pointer">
          <Text
            fontWeight="bold"
            noOfLines={1}
            pl={4}
            pt={0.5}
            opacity={open ? 1 : 0}
            transition="330ms ease"
          >
            خانه
          </Text>
        </Box>
      </Box>
    </Container>
  );
}

export default AppLayoutSide;
