import { Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box minH="calc(100vh - 64px)" display="flex" alignItems="center" justifyContent="center" px={6}>
      <Box textAlign="center" maxW="480px">
        <Text fontSize="120px" fontWeight="700" letterSpacing="-4px" lineHeight="1" mb={4}>
          404
        </Text>
        <Text fontSize="32px" fontWeight="700" letterSpacing="-0.5px" mb={3}>
          Página não encontrada
        </Text>
        <Text fontSize="16px" color="gray.500" mb={8} lineHeight="1.5">
          Ops! Parece que essa página não existe ou foi removida.
        </Text>
        <Button
          as={Link}
          href="/"
          bg="black"
          color="white"
          borderRadius="full"
          px={8}
          py={6}
          fontSize="16px"
          fontWeight="600"
          _hover={{ bg: "gray.800" }}
        >
          Voltar para a página inicial
        </Button>
      </Box>
    </Box>
  );
}
