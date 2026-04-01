import styles from "./BusinessSection.module.css";

export default function BusinessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            A plataforma Uber que você conhece, reinventada para empresas
          </h2>
          <p className={styles.desc}>
            Uber para Empresas é uma plataforma global de gestão de viagens,
            refeições e entregas locais para empresas de todos os portes.
          </p>
          <div className={styles.actions}>
            <button className={styles.startBtn}>Começar</button>
            <a href="/pagina" className={styles.solutionsLink}>Confira nossas soluções</a>
          </div>
        </div>
        <div className={styles.right}>
          <img
            src="/images/business-banner.png"
            alt="Uber para Empresas"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
