import { Box, Flex, Text, Button, Image, Link } from "@chakra-ui/react";

export default function DriveSection() {
  return (
    <Box py={16}>
      <Flex maxW="1200px" mx="auto" px={6} align="center" gap={20} direction={{ base: "column", md: "row" }} mb={16}>
        <Box flex={1} maxW="560px">
          <Image src="/images/driver-banner.png" alt="Motorista" w="100%" h="480px" objectFit="cover" borderRadius="xl" />
        </Box>
        <Box flex={1}>
          <Text fontSize={{ base: "32px", md: "40px" }} fontWeight="700" lineHeight="1.1" letterSpacing="-1px" mb={5}>
            Dirija quando quiser e ganhe de acordo com suas necessidades
          </Text>
          <Text fontSize="15px" color="gray.600" lineHeight="1.6" mb={8}>
            Ganhe dinheiro com entregas e viagens no horário que você definir.
            Você pode usar seu próprio carro ou escolher um carro alugado por meio do app da Uber.
          </Text>
          <Flex align="center" gap={6} flexWrap="wrap">
            <Button bg="black" color="white" borderRadius="full" px={7} py={6} fontWeight="600" _hover={{ bg: "gray.800" }}>
              Começar
            </Button>
            <Link fontSize="15px" fontWeight="500" textDecoration="underline">
              Já tem uma conta? Fazer login
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Box bg="black" py={5} textAlign="center">
        <Button variant="unstyled" color="white" fontSize="18px" fontWeight="600">
          Ver preços
        </Button>
      </Box>
    </Box>
  );
}
