import styles from "./PlanLaterSection.module.css";
import { Calendar, Clock, CreditCard } from "lucide-react";

const advantages = [
  {
    icon: <Calendar size={20} />,
    text: "Escolha o horário exato de partida com até 90 dias de antecedência.",
  },
  {
    icon: <Clock size={20} />,
    text: "Tempo de espera extra incluído para encontrar seu motorista.",
  },
  {
    icon: <CreditCard size={20} />,
    text: "Cancele sem custo com até 60 minutos de antecedência.",
  },
];

export default function PlanLaterSection() {
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
                  <div className={styles.inputField}>
                    <Calendar size={16} />
                    <span>Data</span>
                  </div>
                  <div className={styles.inputField}>
                    <Clock size={16} />
                    <span>Horário</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <button className={styles.advanceBtn}>Avançar</button>
            </div>
            <div className={styles.cardImg}>
              <img
                src="/images/reserve-banner.png"
                alt="Reserve"
              />
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
