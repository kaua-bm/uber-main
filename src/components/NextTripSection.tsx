import styles from "./NextTripSection.module.css";
import { MapPin } from "lucide-react";

export default function NextTripSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>Planejando sua próxima viagem?</h2>
          <p className={styles.desc}>
            De uma viagem de fim de semana a destinos internacionais, estamos
            aqui para ajudar. Explore opções de transporte, pontos de interesse
            e muito mais com o nosso novo City Hub.
          </p>
          <button className={styles.cityBtn}>
            <MapPin size={16} />
            São Paulo
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className={styles.right}>
          <img
            src="/images/city-hub.png"
            alt="Cidade"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
