import styles from "./DriveSection.module.css";

export default function DriveSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="/images/driver-banner.png"
            alt="Motorista Uber"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Dirija quando quiser e ganhe de acordo com suas necessidades
          </h2>
          <p className={styles.desc}>
            Ganhe dinheiro com entregas e viagens no horário que você definir.
            Você pode usar seu próprio carro ou escolher um carro alugado por
            meio do app da Uber.
          </p>
          <div className={styles.actions}>
            <button className={styles.startBtn}>Começar</button>
            <a href="/pagina" className={styles.loginLink}>Já tem uma conta? Fazer login</a>
          </div>
        </div>
      </div>

      <div className={styles.priceBar}>
        <button className={styles.priceBarBtn}>Ver preços</button>
      </div>
    </section>
  );
}
