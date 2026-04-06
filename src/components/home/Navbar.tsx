"use client";
import {
  Box, Flex, Text, HStack, Button, Link,
} from "@chakra-ui/react";
import { Globe, ChevronDown } from "lucide-react";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Box as="nav" bg="black" px={6} h="64px" position="sticky" top={0} zIndex={100}>
      <Flex h="100%" align="center" justify="space-between">
        {/* Esquerda */}
        <HStack spacing={8}>
          <Link as={NextLink} href="/" color="white" fontWeight="700" fontSize="22px">
            Uber
          </Link>
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            {["Viajar", "Ganhe dinheiro", "Empresa"].map((item) => (
              <Link
                key={item}
                as={NextLink}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                color="white"
                fontSize="15px"
                fontWeight="500"
                _hover={{ opacity: 0.75 }}
              >
                {item}
              </Link>
            ))}
            <Link as={NextLink} href="/sobre" color="white" fontSize="15px" fontWeight="500" _hover={{ opacity: 0.75 }}>
              <Flex align="center" gap={1}>
                Sobre <ChevronDown size={14} />
              </Flex>
            </Link>
          </HStack>
        </HStack>

        {/* Direita */}
        <HStack spacing={2}>
          <Link as={NextLink} href="/idioma" color="white" fontSize="14px" px={3} py={2} borderRadius="full" _hover={{ bg: "whiteAlpha.200" }}>
            <Flex align="center" gap={2}><Globe size={15} /> PT-BR</Flex>
          </Link>
          <Link as={NextLink} href="/ajuda" color="white" fontSize="14px" px={3} py={2} borderRadius="full" _hover={{ bg: "whiteAlpha.200" }}>
            Ajuda
          </Link>
          <Link as={NextLink} href="/login" color="white" fontSize="14px" px={3} py={2} borderRadius="full" _hover={{ bg: "whiteAlpha.200" }}>
            Fazer login
          </Link>
          <Button
            as={NextLink}
            href="/cadastro"
            bg="white"
            color="black"
            borderRadius="full"
            fontSize="14px"
            fontWeight="600"
            px={5}
            _hover={{ bg: "gray.200" }}
          >
            Cadastre-se
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
