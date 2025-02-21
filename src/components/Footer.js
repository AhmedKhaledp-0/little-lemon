import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Flex as="footer" justifyContent="center" alignItems="center">
      <HStack p="1rem" justifyContent="center">
        <Text textAlign="center" fontSize={["11px", "16px"]}>
          © Copyright 2024 www.littlelemon.com. All rights reserved.
        </Text>
      </HStack>
    </Flex>
  );
}

export default Footer;
