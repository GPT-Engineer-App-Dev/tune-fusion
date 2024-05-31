import { Box, Container, VStack, HStack, Text, Input, IconButton, Image, Link, Flex } from "@chakra-ui/react";
import { FaSearch, FaHome, FaMusic, FaBook, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.900" color="white" p={4}>
        <HStack spacing={8} justify="space-between">
          <HStack spacing={4}>
            <Link href="/" fontSize="xl" fontWeight="bold">MusicStream</Link>
            <Link href="/" display="flex" alignItems="center"><FaHome /><Text ml={2}>Home</Text></Link>
            <Link href="/browse" display="flex" alignItems="center"><FaMusic /><Text ml={2}>Browse</Text></Link>
            <Link href="/library" display="flex" alignItems="center"><FaBook /><Text ml={2}>Library</Text></Link>
            <Link href="/profile" display="flex" alignItems="center"><FaUser /><Text ml={2}>Profile</Text></Link>
          </HStack>
          <HStack>
            <Input placeholder="Search" bg="white" color="black" />
            <IconButton aria-label="Search" icon={<FaSearch />} />
          </HStack>
        </HStack>
      </Box>

      {/* Main Section */}
      <Box as="main" p={4}>
        <VStack spacing={8}>
          <Box w="full" h="300px" bg="gray.700" color="white" p={4} borderRadius="md" display="flex" alignItems="center" justifyContent="center">
            <Text fontSize="2xl">Featured Playlist</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="white" p={4} mt={8}>
        <Flex justify="space-between">
          <Text>&copy; 2023 MusicStream</Text>
          <HStack spacing={4}>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/terms">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;