"use client";
import styles from "./HeroSection.module.css";
import { MapPin, Clock, Navigation, Square } from "lucide-react";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.location}>
          <MapPin size={14} />
          <span>São Paulo, BR</span>
          <a href="#" className={styles.changeCity}>Alterar cidade</a>
        </p>
        <h1 className={styles.title}>
          Vá a qualquer lugar<br />com o app da Uber
        </h1>

        <button className={styles.timeBtn}>
          <Clock size={16} />
          Agora
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <div className={styles.dotBlack} />
            <input
              type="text"
              placeholder="Local de partida"
              className={styles.input}
            />
            <Navigation size={16} className={styles.navIcon} />
          </div>
          <div className={styles.divider} />
          <div className={styles.inputWrapper}>
            <div className={styles.dotSquare} />
            <input
              type="text"
              placeholder="Local de chegada"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.priceBtn}>Ver preços</button>
          <a href="#" className={styles.loginLink}>
            Faça login para ver sua atividade recente
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imageCard}>
          <img
            src="/images/hero-banner.png"
            alt="Hero"
            className={styles.heroImage}
          />
          <div className={styles.cardOverlay}>
            <span>Pronto para viajar?</span>
            <button className={styles.scheduleBtn}>Agende com antecedência</button>
          </div>
        </div>
      </div>
    </section>
  );
}
