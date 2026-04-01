"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./PlanLaterSection.module.css";
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
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      times.push(`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`);
    }
  }
  return times;
}

export default function PlanLaterSection() {
  const today = new Date();
  const [showCal, setShowCal] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
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
  function selectDay(day: number) {
    setSelectedDate(`${String(day).padStart(2,"0")}/${String(viewMonth+1).padStart(2,"0")}/${viewYear}`);
    setShowCal(false);
  }

  const times = generateTimes();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Planejar para mais tarde</h2>
        <div className={styles.content}>

          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <h3 className={styles.cardTitle}>
                Viaje com tranquilidade com o Uber Reserve
              </h3>
              <div className={styles.formGroup}>
                <p className={styles.formLabel}>Escolha a data e o horário</p>
                <div className={styles.inputs}>

                  <div className={styles.pickerWrapper} ref={calRef}>
                    <p className={styles.inputLabel}>Data</p>
                    <div
                      className={`${styles.inputField} ${showCal ? styles.inputActive : ""}`}
                      onClick={() => { setShowCal(v => !v); setShowTime(false); }}
                    >
                      <Calendar size={16} />
                      <span className={selectedDate ? styles.inputValue : styles.inputPlaceholder}>
                        {selectedDate || "Data"}
                      </span>
                    </div>
                    {showCal && (
                      <div className={styles.calDropdown}>
                        <div className={styles.calHeader}>
                          <button onClick={prevMonth}><ChevronLeft size={18} /></button>
                          <span>{MONTHS[viewMonth]} {viewYear}</span>
                          <button onClick={nextMonth}><ChevronRight size={18} /></button>
                        </div>
                        <div className={styles.calGrid}>
                          {DAYS.map(d => <div key={d} className={styles.calDayLabel}>{d}</div>)}
                          {Array.from({length: firstDay}).map((_, i) => <div key={`e${i}`} />)}
                          {Array.from({length: daysInMonth}).map((_, i) => {
                            const day = i + 1;
                            const isToday = day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
                            return (
                              <div
                                key={day}
                                className={`${styles.calDay} ${isToday ? styles.calToday : ""}`}
                                onClick={() => selectDay(day)}
                              >
                                {day}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={styles.pickerWrapper} ref={timeRef}>
                    <p className={styles.inputLabel}>Horário</p>
                    <div
                      className={`${styles.inputField} ${showTime ? styles.inputActive : ""}`}
                      onClick={() => { setShowTime(v => !v); setShowCal(false); }}
                    >
                      <Clock size={16} />
                      <span className={selectedTime ? styles.inputValue : styles.inputPlaceholder}>
                        {selectedTime || "Horário"}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {showTime && (
                      <div className={styles.timeDropdown}>
                        {times.map(t => (
                          <div
                            key={t}
                            className={`${styles.timeOption} ${selectedTime === t ? styles.timeSelected : ""}`}
                            onClick={() => { setSelectedTime(t); setShowTime(false); }}
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>
              <button className={styles.advanceBtn}>Avançar</button>
            </div>

            <div className={styles.cardImg}>
              <img src="/images/reserve-banner.png" alt="Reserve" />
            </div>
          </div>

          <div className={styles.advantages}>
            <h4 className={styles.advantagesTitle}>Vantagens</h4>
            <ul className={styles.advantagesList}>
              {advantages.map((item, i) => (
                <li key={i} className={styles.advantageItem}>
                  <span className={styles.advantageIcon}>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <a href="#" className={styles.termsLink}>Consulte os termos</a>
          </div>

        </div>
      </div>
    </section>
  );
}
