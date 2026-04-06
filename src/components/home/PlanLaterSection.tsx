"use client";
import { useState, useRef, useEffect } from "react";
import {
  Box, Flex, Text, Button, VStack, HStack, Image, Input,
  InputGroup, InputLeftElement, List, ListItem,
} from "@chakra-ui/react";
import { Calendar, Clock, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";

const advantages = [
  { icon: <Calendar size={20} />, text: "Escolha o horário exato de partida com até 90 dias de antecedência." },
  { icon: <Clock size={20} />, text: "Tempo de espera extra incluído para encontrar seu motorista." },
  { icon: <CreditCard size={20} />, text: "Cancele sem custo com até 60 minutos de antecedência." },
];

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function generateTimes() {
  const times: string[] = [];
  for (let h = 0; h < 24; h++)
    for (let m = 0; m < 60; m += 15)
      times.push(`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`);
  return times;
}

export default function PlanLaterSection() {
  const today = new Date();
  const [showCal, setShowCal] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const calRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (calRef.current && !calRef.current.contains(e.target as Node)) setShowCal(false);
      if (timeRef.current && !timeRef.current.contains(e.target as Node)) setShowTime(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  const times = generateTimes();

  return (
    <Box py={16}>
      <Box maxW="1200px" mx="auto" px={6}>
        <Text fontSize="32px" fontWeight="700" letterSpacing="-0.5px" mb={6}>
          Planejar para mais tarde
        </Text>

        <Flex gap={12} align="flex-start" direction={{ base: "column", md: "row" }}>
          {/* Card azul */}
          <Box flex={1.5} bg="#c9e2f2" borderRadius="xl" p={10} overflow="visible" position="relative" minH="380px">
            <Flex justify="space-between" align="flex-end">
              <Box flex={1}>
                <Text fontSize="26px" fontWeight="700" lineHeight="1.2" letterSpacing="-0.5px" mb={6}>
                  Viaje com tranquilidade com o Uber Reserve
                </Text>
                <Text fontSize="14px" fontWeight="600" mb={3}>Escolha a data e o horário</Text>

                <Flex gap={3} mb={5}>
                  {/* Data */}
                  <Box position="relative" ref={calRef} flex={1}>
                    <Text fontSize="12px" color="gray.600" mb={1}>Data</Text>
                    <Button
                      leftIcon={<Calendar size={15} />}
                      bg={showCal ? "white" : "gray.100"}
                      border={showCal ? "2px solid black" : "2px solid transparent"}
                      borderRadius="full"
                      fontWeight="400"
                      color={selectedDate ? "black" : "gray.500"}
                      w="100%"
                      justifyContent="flex-start"
                      onClick={() => { setShowCal(v => !v); setShowTime(false); }}
                      _hover={{ bg: "gray.200" }}
                    >
                      {selectedDate || "Data"}
                    </Button>
                    {showCal && (
                      <Box
                        position="absolute" top="calc(100% + 8px)" left={0}
                        bg="white" borderRadius="xl" boxShadow="xl" p={4} w="300px" zIndex={200}
                      >
                        <Flex justify="space-between" align="center" mb={4}>
                          <Button variant="ghost" size="sm" onClick={prevMonth}><ChevronLeft size={18} /></Button>
                          <Text fontWeight="600">{MONTHS[viewMonth]} {viewYear}</Text>
                          <Button variant="ghost" size="sm" onClick={nextMonth}><ChevronRight size={18} /></Button>
                        </Flex>
                        <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={1}>
                          {DAYS.map(d => (
                            <Text key={d} textAlign="center" fontSize="12px" color="gray.400" fontWeight="500" pb={1}>{d}</Text>
                          ))}
                          {Array.from({ length: firstDay }).map((_, i) => <Box key={`e${i}`} />)}
                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1;
                            const isToday = day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
                            return (
                              <Box
                                key={day} textAlign="center" fontSize="14px" py={2}
                                borderRadius="full" cursor="pointer"
                                border={isToday ? "2px solid black" : "none"}
                                fontWeight={isToday ? "600" : "400"}
                                _hover={{ bg: "gray.100" }}
                                onClick={() => {
                                  setSelectedDate(`${String(day).padStart(2,"0")}/${String(viewMonth+1).padStart(2,"0")}/${viewYear}`);
                                  setShowCal(false);
                                }}
                              >
                                {day}
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>
                    )}
                  </Box>

                  {/* Horário */}
                  <Box position="relative" ref={timeRef} flex={1}>
                    <Text fontSize="12px" color="gray.600" mb={1}>Horário</Text>
                    <Button
                      leftIcon={<Clock size={15} />}
                      rightIcon={<Box as="span" fontSize="10px">▾</Box>}
                      bg={showTime ? "white" : "gray.100"}
                      border={showTime ? "2px solid black" : "2px solid transparent"}
                      borderRadius="full"
                      fontWeight="400"
                      color={selectedTime ? "black" : "gray.500"}
                      w="100%"
                      justifyContent="flex-start"
                      onClick={() => { setShowTime(v => !v); setShowCal(false); }}
                      _hover={{ bg: "gray.200" }}
                    >
                      {selectedTime || "Horário"}
                    </Button>
                    {showTime && (
                      <Box
                        position="absolute" top="calc(100% + 8px)" left={0}
                        bg="white" borderRadius="xl" boxShadow="xl" w="160px"
                        maxH="220px" overflowY="auto" zIndex={200}
                      >
                        {times.map(t => (
                          <Box
                            key={t} px={4} py={3} fontSize="15px" cursor="pointer"
                            bg={selectedTime === t ? "gray.100" : "white"}
                            fontWeight={selectedTime === t ? "600" : "400"}
                            _hover={{ bg: "gray.50" }}
                            onClick={() => { setSelectedTime(t); setShowTime(false); }}
                          >
                            {t}
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                </Flex>

                <Button bg="black" color="white" borderRadius="full" w="100%" py={6} fontWeight="600" _hover={{ bg: "gray.800" }}>
                  Avançar
                </Button>
              </Box>

              <Box w="240px" alignSelf="flex-end" mb={-10} mr={-10} flexShrink={0}>
                <Image src="/images/reserve-banner.png" alt="Reserve" w="100%" objectFit="contain" />
              </Box>
            </Flex>
          </Box>

          {/* Vantagens */}
          <Box flex={1} pt={2}>
            <Text fontSize="18px" fontWeight="700" mb={5}>Vantagens</Text>
            <VStack align="stretch" spacing={5} mb={6}>
              {advantages.map((item, i) => (
                <Flex key={i} align="flex-start" gap={3}>
                  <Box mt="2px" flexShrink={0}>{item.icon}</Box>
                  <Text fontSize="15px" lineHeight="1.4">{item.text}</Text>
                </Flex>
              ))}
            </VStack>
            <Text fontSize="14px" color="gray.500" textDecoration="underline" cursor="pointer">
              Consulte os termos
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
