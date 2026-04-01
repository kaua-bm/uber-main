"use client";
import styles from "./Navbar.module.css";
import { ChevronDown, Globe } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link href="/" className={styles.logo}>
          Uber
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/viajar">Viajar</Link></li>
          <li><Link href="/ganhe-dinheiro">Ganhe dinheiro</Link></li>
          <li><Link href="/empresa">Empresa</Link></li>
          <li>
            <Link href="/sobre" className={styles.withChevron}>
              Sobre <ChevronDown size={14} />
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.navRight}>
        <Link href="/idioma" className={styles.langBtn}>
          <Globe size={16} />
          PT-BR
        </Link>
        <Link href="/ajuda" className={styles.navLink}>Ajuda</Link>
        <Link href="/login" className={styles.navLink}>Fazer login</Link>
        <Link href="/cadastro" className={styles.signupBtn}>Cadastre-se</Link>
      </div>
    </nav>
  );
}
