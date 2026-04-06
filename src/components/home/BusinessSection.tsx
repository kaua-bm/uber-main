import { Box, Flex, Text, Button, Image, Link } from "@chakra-ui/react";

export default function BusinessSection() {
  return (
    <Box py={16}>
      <Flex maxW="1200px" mx="auto" px={6} align="center" gap={20} direction={{ base: "column", md: "row" }}>
        <Box flex={1} maxW="480px">
          <Text fontSize={{ base: "32px", md: "40px" }} fontWeight="700" lineHeight="1.1" letterSpacing="-1px" mb={5}>
            A plataforma Uber que você conhece, reinventada para empresas
          </Text>
          <Text fontSize="15px" color="gray.600" lineHeight="1.6" mb={7}>
            Uber para Empresas é uma plataforma global de gestão de viagens, refeições e entregas
            locais para empresas de todos os portes.
          </Text>
          <Flex align="center" gap={6}>
            <Button bg="black" color="white" borderRadius="full" px={7} py={6} fontWeight="600" _hover={{ bg: "gray.800" }}>
              Começar
            </Button>
            <Link fontSize="15px" fontWeight="500" textDecoration="underline">
              Confira nossas soluções
            </Link>
          </Flex>
        </Box>
        <Box flex={1}>
          <Image src="/images/business-banner.png" alt="Empresas" w="100%" h="420px" objectFit="cover" borderRadius="xl" />
        </Box>
      </Flex>
    </Box>
  );
}
