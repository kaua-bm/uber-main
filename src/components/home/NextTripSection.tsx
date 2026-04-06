import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { MapPin } from "lucide-react";

export default function NextTripSection() {
  return (
    <Box py={16}>
      <Flex maxW="1200px" mx="auto" px={6} align="center" gap={10} direction={{ base: "column", md: "row" }}>
        <Box flex={1} maxW="480px">
          <Text fontSize={{ base: "32px", md: "44px" }} fontWeight="700" lineHeight="1.1" letterSpacing="-1px" mb={4}>
            Planejando sua próxima viagem?
          </Text>
          <Text fontSize="15px" color="gray.600" lineHeight="1.6" mb={7}>
            De uma viagem de fim de semana a destinos internacionais, estamos aqui para ajudar.
            Explore opções de transporte, pontos de interesse e muito mais com o nosso novo City Hub.
          </Text>
          <Button
            leftIcon={<MapPin size={16} />}
            rightIcon={<Box as="span" fontSize="10px">▾</Box>}
            bg="black" color="white" borderRadius="full" px={6} py={6}
            fontWeight="600" _hover={{ bg: "gray.800" }}
          >
            São Paulo
          </Button>
        </Box>
        <Box flex={1}>
          <Image src="/images/city-hub.png" alt="Cidade" w="100%" h="380px" objectFit="cover" borderRadius="xl" />
        </Box>
      </Flex>
    </Box>
  );
}
