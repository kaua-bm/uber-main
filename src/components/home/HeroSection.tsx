"use client";
import { useState } from "react";
import {
  Box, Flex, Text, Button, Input, InputGroup, InputLeftElement,
  InputRightElement, Modal, ModalOverlay, ModalContent, ModalBody,
  VStack, HStack, Divider, Radio, RadioGroup, Link,
} from "@chakra-ui/react";
import { MapPin, Clock, Navigation, X } from "lucide-react";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState("agora");

  return (
    <>
      <Flex maxW="1200px" mx="auto" px={6} py={16} gap={10} align="center">
        {/* Esquerda */}
        <Box flex={1}>
          <Flex align="center" gap={2} mb={5} fontSize="14px" fontWeight="500">
            <MapPin size={14} />
            <Text>São Paulo, BR</Text>
            <Link textDecoration="underline" fontSize="14px">Alterar cidade</Link>
          </Flex>

          <Text fontSize={{ base: "40px", md: "56px" }} fontWeight="700" lineHeight="1.1" letterSpacing="-1.5px" mb={7}>
            Vá a qualquer lugar<br />com o app da Uber
          </Text>

          <Button
            leftIcon={<Clock size={16} />}
            rightIcon={<Box as="span" fontSize="10px">▾</Box>}
            bg="gray.200"
            color="black"
            borderRadius="full"
            fontWeight="600"
            mb={4}
            onClick={() => setShowModal(true)}
            _hover={{ bg: "gray.300" }}
          >
            Agora
          </Button>

          <Box bg="gray.100" borderRadius="lg" mb={6}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" mt={1}>
                <Box w="10px" h="10px" borderRadius="full" bg="black" ml={4} />
              </InputLeftElement>
              <Input
                placeholder="Local de partida"
                border="none"
                bg="transparent"
                pl={10}
                py={6}
                _focus={{ boxShadow: "none" }}
              />
              <InputRightElement mt={1}>
                <Navigation size={16} />
              </InputRightElement>
            </InputGroup>
            <Divider borderColor="gray.300" />
            <InputGroup>
              <InputLeftElement pointerEvents="none" mt={1}>
                <Box w="10px" h="10px" bg="black" ml={4} />
              </InputLeftElement>
              <Input
                placeholder="Local de chegada"
                border="none"
                bg="transparent"
                pl={10}
                py={6}
                _focus={{ boxShadow: "none" }}
              />
            </InputGroup>
          </Box>

          <Flex align="center" gap={6} flexWrap="wrap">
            <Button bg="black" color="white" borderRadius="full" px={7} py={6} fontWeight="600" _hover={{ bg: "gray.800" }}>
              Ver preços
            </Button>
            <Link fontSize="15px" fontWeight="500" textDecoration="underline">
              Faça login para ver sua atividade recente
            </Link>
          </Flex>
        </Box>

        {/* Direita */}
        <Box flex={1} maxW="560px" borderRadius="xl" overflow="hidden" position="relative">
          <Box as="img" src="/images/hero-banner.png" alt="Hero" w="100%" h="420px" objectFit="cover" display="block" />
          <Flex
            position="absolute" bottom={0} left={0} right={0}
            bg="rgba(160,100,60,0.85)" align="center" justify="space-between" px={5} py={4}
          >
            <Text color="white" fontSize="15px" fontWeight="500">Pronto para viajar?</Text>
            <Button bg="white" color="black" borderRadius="full" fontSize="14px" fontWeight="600" size="sm">
              Agende com antecedência
            </Button>
          </Flex>
        </Box>
      </Flex>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="xl" p={4} maxW="480px">
          <ModalBody>
            <RadioGroup value={selected} onChange={setSelected}>
              <VStack align="stretch" spacing={0}>
                <Flex justify="space-between" align="center" py={5}>
                  <Text fontSize="17px" fontWeight="500">Partir agora</Text>
                  <Radio value="agora" colorScheme="blackAlpha" />
                </Flex>
                <Divider />
                <Flex justify="space-between" align="center" py={5}>
                  <Text fontSize="17px" fontWeight="500">Agendar mais tarde</Text>
                  <Radio value="agendar" colorScheme="blackAlpha" />
                </Flex>
              </VStack>
            </RadioGroup>
            <Flex justify="flex-end" gap={3} mt={6}>
              <Button variant="ghost" borderRadius="full" onClick={() => setShowModal(false)}>
                Cancelar
              </Button>
              <Button bg="black" color="white" borderRadius="full" px={7} _hover={{ bg: "gray.800" }} onClick={() => setShowModal(false)}>
                Confirmar
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
