import { Box, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

const apps = [
  { title: "Baixe o app da Uber", subtitle: "Escaneie para baixar", img: "/images/qr-uber-app.png" },
  { title: "Baixe o app de parceiro", subtitle: "Escaneie para baixar", img: "/images/qr-partner-app.png" },
];

export default function AppDownloadSection() {
  return (
    <Box bg="gray.100" py={16}>
      <Box maxW="1200px" mx="auto" px={6}>
        <Text fontSize="32px" fontWeight="700" letterSpacing="-0.5px" mb={7}>
          É mais fácil pelo app
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {apps.map((app) => (
            <Flex
              key={app.title} bg="white" borderRadius="xl" p={6}
              align="center" gap={5} cursor="pointer"
              _hover={{ bg: "gray.50" }} transition="background 0.2s"
            >
              <Image src={app.img} alt={app.title} w="80px" h="80px" objectFit="contain" flexShrink={0} />
              <Box flex={1}>
                <Text fontWeight="700" fontSize="18px" mb={1}>{app.title}</Text>
                <Text fontSize="14px" color="gray.500">{app.subtitle}</Text>
              </Box>
              <ArrowRight size={20} />
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
