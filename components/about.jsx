import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/source-sans-pro";
export const About = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" bg="#F8F8F8" gap={48}>
        <Box display={['none','none','block']}>
          <Image src="/assests/about.png" alt="about" />
        </Box>
        <Box textAlign={['center']} p={[8,8,0]}>
          <Stack spacing={5} maxW={"28rem"}>
            <Heading
              fontFamily={"Poppins"}
              color={"primary"}
              fontWeight={"semibold"}
              fontSize={['1.625rem',"2.8125rem"]}
              lineHeight={['2.1875rem',"1.6875rem"]}
            >
              About Us
            </Heading>
            <Text >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </Text>
          </Stack>
          <Box mt={5}>
            <Button
              bg={"secondary"}
              fontFamily={"Source Sans Pro"}
              borderRadius={"full"}
              fontWeight={"semibold"}
              color={"white"}
              _hover={{}}
              lineHeight={"2.25rem"}
              letterSpacing={"0.03em"}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
