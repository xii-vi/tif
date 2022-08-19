import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import "@fontsource/source-sans-pro";

export const LandingPageNavbar = () => {
  return (
    <>
      <Flex flexWrap={"wrap-reverse"}>
        <Box mx={[4,24]} py={4}>
          <Box display={['none','none','block']}>
          <Image w={"6.68rem"} h={"5.18rem"} src="/assests/logo.png" alt="logo" />
          </Box>
          <Box textAlign={['center','center','left']}>
          <Stack
            w={['full',400]}
            px={4}
            pt={32}
            spacing={[4,8]}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Heading
              color={"primary"}
              fontWeight={"bold"}
              fontSize={['2.375rem',"3.875rem"]}
              lineHeight={['2.875rem',"4.3125rem"]}
            >
              Discover the{" "}
              <Text as={"span"} color={"secondary"}>
                Best
              </Text>{" "}
              Food and Drinks
            </Heading>
            <Text>
              Naturally made Healthcare Products for the better care & support
              of your body.
            </Text>
          </Stack>
          <Box px={4} mt={[4,8]}>
            <Button
              bg={"secondary"}
              borderRadius={"full"}
              color={"white"}
              fontWeight={"bold"}
              _hover={{}}
            >
              Explore Now!
            </Button>
          </Box>
          </Box>
        </Box>

        <Box ml="auto" pos="relative">
          <Image src="/assests/pizza.png" alt="pizza" />
          <Image
            src="/assests/navbar.png"
            alt="pizza-cover"
            pos="absolute"
            zIndex={2}
            top="0"
          />
          <Button
            pos="absolute"
            top={['5',"10"]}
            right={['5',"10"]}
            zIndex={3}
            variant={"outline"}
            borderRadius={"full"}
            color={"white"}
            _hover={{}}
            fontFamily={"Source Sans Pro"}
            fontWeight={"semibold"}
          >
            Get In Touch
          </Button>
        </Box>
      </Flex>
    </>
  );
};
