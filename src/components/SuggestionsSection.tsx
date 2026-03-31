import styles from "./SuggestionsSection.module.css";

const services = [
  {
    title: "Viagem",
    description:
      "Vá a qualquer lugar com o app da Uber. Solicite uma viagem, entre no carro e relaxe.",
    img: "/images/service-ride.png",
  },
  {
    title: "Reserve",
    description:
      "Reserve sua viagem com antecedência e fique tranquilo no dia da viagem.",
    img: "/images/service-reserve.png",
  },
  {
    title: "Flash",
    description: "A Uber torna fácil a entrega de itens no mesmo dia.",
    img: "/images/service-flash.png",
  },
  {
    title: "Moto",
    description:
      "Faça viagens de moto econômicas em minutos na porta de sua casa.",
    img: "/images/service-moto.png",
  },
];

export default function SuggestionsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sugestões</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <button className={styles.infoBtn}>Informações</button>
              </div>
              <div className={styles.cardImg}>
                <img src={service.img} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Login CTA */}
      <div className={styles.loginCta}>
        <div className={styles.loginLeft}>
          <h2 className={styles.loginTitle}>
            Faça login para ver as<br />informações da sua conta
          </h2>
          <p className={styles.loginDesc}>
            Veja viagens anteriores, sugestões personalizadas, recursos de
            suporte e muito mais.
          </p>
          <div className={styles.loginActions}>
            <button className={styles.loginBtn}>Faça login na sua conta</button>
            <a href="#" className={styles.createAccount}>Crie uma conta</a>
          </div>
        </div>
        <div className={styles.loginRight}>
          <img
            src="/images/login-people.svg"
            alt="Pessoas"
            className={styles.loginImg}
          />
        </div>
      </div>
    </section>
  );
}
