"use client";
import styles from "./Navbar.module.css";
import { ChevronDown, Globe } from "lucide-react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <a href="/" className={styles.logo}>
          Uber
        </a>
        <ul className={styles.navLinks}>
          <li>
            <a href="#">Viajar</a>
          </li>
          <li>
            <a href="#">Ganhe dinheiro</a>
          </li>
          <li>
            <a href="#">Empresa</a>
          </li>
          <li>
            <a href="#" className={styles.withChevron}>
              Sobre <ChevronDown size={14} />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.navRight}>
        <a href="#" className={styles.langBtn}>
          <Globe size={16} />
          PT-BR
        </a>
        <a href="#" className={styles.navLink}>
          Ajuda
        </a>
        <a href="#" className={styles.navLink}>
          Fazer login
        </a>
        <a href="#" className={styles.signupBtn}>
          Cadastre-se
        </a>
      </div>
    </nav>
  );
}
