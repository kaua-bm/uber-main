"use client";
import {
  Box, Flex, Text, Button, SimpleGrid, Image, Link,
} from "@chakra-ui/react";

const services = [
  { title: "Viagem", description: "Vá a qualquer lugar com o app da Uber. Solicite uma viagem, entre no carro e relaxe.", img: "/images/service-ride.png" },
  { title: "Reserve", description: "Reserve sua viagem com antecedência e fique tranquilo no dia da viagem.", img: "/images/service-reserve.png" },
  { title: "Flash", description: "A Uber torna fácil a entrega de itens no mesmo dia.", img: "/images/service-flash.png" },
  { title: "Moto", description: "Faça viagens de moto econômicas em minutos na porta de sua casa.", img: "/images/service-moto.png" },
];

export default function SuggestionsSection() {
  return (
    <Box maxW="1200px" mx="auto" px={6} pb={16}>
      <Text fontSize="32px" fontWeight="700" letterSpacing="-0.5px" mb={6}>
        Sugestões
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={4}>
        {services.slice(0, 3).map((s) => (
          <Box key={s.title} bg="gray.100" borderRadius="xl" p={6} _hover={{ bg: "gray.200" }} transition="background 0.2s">
            <Flex justify="space-between" align="flex-end">
              <Box>
                <Text fontWeight="700" fontSize="18px" mb={2}>{s.title}</Text>
                <Text fontSize="14px" color="gray.600" mb={4}>{s.description}</Text>
                <Button bg="white" borderRadius="full" size="sm" fontWeight="600" _hover={{ bg: "gray.100" }}>
                  Informações
                </Button>
              </Box>
              <Image src={s.img} alt={s.title} w="100px" h="80px" objectFit="contain" />
            </Flex>
          </Box>
        ))}
      </SimpleGrid>

      {/* Moto card sozinho */}
      <Box w={{ base: "100%", md: "33%" }}>
        <Box bg="gray.100" borderRadius="xl" p={6} _hover={{ bg: "gray.200" }} transition="background 0.2s">
          <Flex justify="space-between" align="flex-end">
            <Box>
              <Text fontWeight="700" fontSize="18px" mb={2}>{services[3].title}</Text>
              <Text fontSize="14px" color="gray.600" mb={4}>{services[3].description}</Text>
              <Button bg="white" borderRadius="full" size="sm" fontWeight="600" _hover={{ bg: "gray.100" }}>
                Informações
              </Button>
            </Box>
            <Image src={services[3].img} alt={services[3].title} w="100px" h="80px" objectFit="contain" />
          </Flex>
        </Box>
      </Box>

      {/* Login CTA */}
      <Flex mt={16} align="center" gap={10} direction={{ base: "column", md: "row" }}>
        <Box flex={1}>
          <Text fontSize={{ base: "32px", md: "44px" }} fontWeight="700" lineHeight="1.1" letterSpacing="-1px" mb={4}>
            Faça login para ver as<br />informações da sua conta
          </Text>
          <Text fontSize="15px" color="gray.600" mb={7} maxW="420px">
            Veja viagens anteriores, sugestões personalizadas, recursos de suporte e muito mais.
          </Text>
          <Flex align="center" gap={6} flexWrap="wrap">
            <Button bg="black" color="white" borderRadius="full" px={7} py={6} fontWeight="600" _hover={{ bg: "gray.800" }}>
              Faça login na sua conta
            </Button>
            <Link fontSize="15px" fontWeight="500" textDecoration="underline">
              Crie uma conta
            </Link>
          </Flex>
        </Box>
        <Box flex={1} bg="gray.100" borderRadius="xl" overflow="hidden">
          <Image src="/images/login-people.svg" alt="Pessoas" w="100%" h="360px" objectFit="cover" />
        </Box>
      </Flex>
    </Box>
  );
}
