import { Box, Flex, Text, SimpleGrid, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { Globe, MapPin } from "lucide-react";
import NextLink from "next/link";

const footerLinks: Record<string, string[]> = {
  Empresa: ["Quem somos", "O que oferecemos", "Newsroom", "Investidores", "Blog", "Carreiras", "Uber One"],
  Produtos: ["Viajar", "Dirigir", "Fazer entregas", "Fazer um pedido", "Uber para Empresas", "Uber Freight", "Gift cards", "Uber Health"],
  "Cidadania global": ["Segurança", "Sustentabilidade"],
  Viaje: ["Reservar", "Aeroportos", "Cidades"],
};

const SocialIcon = ({ label, path }: { label: string; path: string }) => (
  <Link as={NextLink} href="/pagina-nao-existe" aria-label={label} color="white" _hover={{ opacity: 0.7 }}>
    <Box as="svg" w="20px" h="20px" fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </Box>
  </Link>
);

export default function Footer() {
  return (
    <Box as="footer" bg="black" color="white" pt={16} pb={8}>
      <Box maxW="1200px" mx="auto" px={6}>
        {/* Top row */}
        <Flex justify="space-between" align="flex-start" mb={12} gap={10} direction={{ base: "column", md: "row" }}>
          <VStack align="flex-start" spacing={4}>
            <Text fontSize="22px" fontWeight="700">Uber</Text>
            <Link as={NextLink} href="/pagina-nao-existe" fontSize="15px" color="white" _hover={{ opacity: 0.7 }}>
              Acesse a Central de Ajuda
            </Link>
          </VStack>
          <Text fontSize="13px" color="gray.400" maxW="420px" textAlign={{ base: "left", md: "right" }} lineHeight="1.5">
            Uber Technologies Inc. | Uber do Brasil Tecnologia Ltda | Avenida Brigadeiro Faria Lima,
            n.º 949, Pinheiros, São Paulo/SP - CEP 05.426-200 | CNPJ: 17.895.646/0001-87
          </Text>
        </Flex>

        {/* Links grid */}
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} mb={12}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <VStack key={category} align="flex-start" spacing={3}>
              <Text fontWeight="700" fontSize="16px">{category}</Text>
              {links.map((link) => (
                <Link key={link} as={NextLink} href="/pagina-nao-existe" fontSize="14px" color="gray.400" _hover={{ color: "white" }}>
                  {link}
                </Link>
              ))}
            </VStack>
          ))}
        </SimpleGrid>

        {/* Bottom row */}
        <Flex justify="space-between" align="center" borderTop="1px solid" borderColor="gray.800" pt={6} mb={6} flexWrap="wrap" gap={4}>
          <HStack spacing={4}>
            {[
              { label: "LinkedIn", path: "M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19H5v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
              { label: "YouTube", path: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" },
              { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
              { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
            ].map((s) => <SocialIcon key={s.label} {...s} />)}
          </HStack>
          <HStack spacing={4}>
            <Link as={NextLink} href="/pagina-nao-existe" color="white" fontSize="14px" _hover={{ opacity: 0.7 }}>
              <Flex align="center" gap={2}><Globe size={15} /> Português (Brasil)</Flex>
            </Link>
            <Link as={NextLink} href="/pagina-nao-existe" color="white" fontSize="14px" _hover={{ opacity: 0.7 }}>
              <Flex align="center" gap={2}><MapPin size={15} /> São Paulo</Flex>
            </Link>
          </HStack>
        </Flex>

        {/* App stores */}
        <HStack spacing={3} mb={8}>
          <Link as={NextLink} href="/pagina-nao-existe">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" h="40px" />
          </Link>
          <Link as={NextLink} href="/pagina-nao-existe">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" h="40px" />
          </Link>
        </HStack>

        {/* Legal */}
        <Flex justify="space-between" align="center" borderTop="1px solid" borderColor="gray.800" pt={6} flexWrap="wrap" gap={4}>
          <Text fontSize="13px" color="gray.500">© 2026 Uber Technologies Inc.</Text>
          <HStack spacing={5}>
            {["Privacidade", "Acessibilidade", "Termos"].map((item) => (
              <Link key={item} as={NextLink} href="/pagina-nao-existe" fontSize="13px" color="gray.500" _hover={{ color: "white" }}>
                {item}
              </Link>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
