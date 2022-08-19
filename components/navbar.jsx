import { Flex, Box, Button, Image } from "@chakra-ui/react";
import Link from "next/link"

export const Navbar = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} mx={[4,8]}>
        <Link href="/">
        <Box>
          <Image
            src="/assests/logo.png"
            alt="logo"
            w={"6.68rem"}
            h={"5.18rem"}
          />
        </Box>
        </Link>
        <Box>
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
      </Flex>
    </>
  );
};
