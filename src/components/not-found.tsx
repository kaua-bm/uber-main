import styles from "./not-found.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Página não encontrada</h2>
        <p className={styles.desc}>
          Ops! Parece que essa página não existe ou foi removida.
        </p>
        <Link href="/" className={styles.homeBtn}>
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
