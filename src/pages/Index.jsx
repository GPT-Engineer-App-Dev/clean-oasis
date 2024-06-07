import { Box, Button, Container, Flex, Heading, HStack, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Cleaning Service</Heading>
        <HStack spacing={8}>
          <Link to="/">Home</Link>
          <Link to="#services">Services</Link>
          <Link to="#about">About Us</Link>
          <Link to="#contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="brand.700" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Professional Cleaning Services</Heading>
        <Text fontSize="xl" mb={8}>We make your place spotless and sparkling clean!</Text>
        <Button colorScheme="teal" size="lg">Get a Free Quote</Button>
      </Box>

      {/* Services Section */}
      <Box as="section" id="services" py={20} textAlign="center">
        <Heading size="xl" mb={10}>Our Services</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={10}>
          <Box bg="gray.100" p={5} m={3} borderRadius="md" boxShadow="md" width="300px">
            <Heading size="md" mb={3}>Residential Cleaning</Heading>
            <Text>Keep your home clean and tidy with our residential cleaning services.</Text>
          </Box>
          <Box bg="gray.100" p={5} m={3} borderRadius="md" boxShadow="md" width="300px">
            <Heading size="md" mb={3}>Commercial Cleaning</Heading>
            <Text>Professional cleaning services for your office or commercial space.</Text>
          </Box>
          <Box bg="gray.100" p={5} m={3} borderRadius="md" boxShadow="md" width="300px">
            <Heading size="md" mb={3}>Deep Cleaning</Heading>
            <Text>Thorough cleaning services for every nook and cranny of your space.</Text>
          </Box>
        </Flex>
      </Box>

      {/* About Us Section */}
      <Box as="section" id="about" bg="gray.50" py={20} textAlign="center">
        <Heading size="xl" mb={10}>About Us</Heading>
        <Text maxW="600px" mx="auto">
          We are a professional cleaning service dedicated to making your home or office spotless. With years of experience and a team of skilled cleaners, we guarantee satisfaction and a sparkling clean space.
        </Text>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" py={20} textAlign="center">
        <Heading size="xl" mb={10}>Contact Us</Heading>
        <VStack spacing={5} maxW="600px" mx="auto">
          <Input placeholder="Your Name" size="lg" />
          <Input placeholder="Your Email" size="lg" />
          <Textarea placeholder="Your Message" size="lg" />
          <Button colorScheme="teal" size="lg">Send Message</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;