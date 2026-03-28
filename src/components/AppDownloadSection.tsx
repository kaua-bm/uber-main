import styles from "./AppDownloadSection.module.css";
import { ArrowRight } from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>É mais fácil pelo app</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.qrCode}>
              <img
                src="/images/qr-uber-app.png"
                alt="QR Code Uber"
              />
            </div>
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>Baixe o app da Uber</p>
              <p className={styles.cardSubtitle}>Escaneie para baixar</p>
            </div>
            <ArrowRight size={20} className={styles.arrow} />
          </div>

          <div className={styles.card}>
            <div className={styles.qrCode}>
              <img
                src="/images/qr-partner-app.png"
                alt="QR Code Parceiro"
              />
            </div>
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>Baixe o app de parceiro</p>
              <p className={styles.cardSubtitle}>Escaneie para baixar</p>
            </div>
            <ArrowRight size={20} className={styles.arrow} />
          </div>
        </div>
      </div>
    </section>
  );
}
