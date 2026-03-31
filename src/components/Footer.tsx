import styles from "./Footer.module.css";
import { Globe, MapPin } from "lucide-react";

const footerLinks = {
  Empresa: [
    "Quem somos",
    "O que oferecemos",
    "Newsroom",
    "Investidores",
    "Blog",
    "Carreiras",
    "Uber One",
  ],
  Produtos: [
    "Viajar",
    "Dirigir",
    "Fazer entregas",
    "Fazer um pedido",
    "Uber para Empresas",
    "Uber Freight",
    "Gift cards",
    "Uber Health",
  ],
  "Cidadania global": ["Segurança", "Sustentabilidade"],
  Viaje: ["Reservar", "Aeroportos", "Cidades"],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top dark section */}
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.topRow}>
            <div className={styles.brandCol}>
              <p className={styles.logo}>Uber</p>
              <a href="#" className={styles.helpLink}>
                Acesse a Central de Ajuda
              </a>
            </div>
            <div className={styles.addressCol}>
              <p className={styles.address}>
                Uber Technologies Inc. | Uber do Brasil Tecnologia Ltda |
                Avenida Brigadeiro Faria Lima, n.º 949, Pinheiros, São Paulo/SP
                - CEP 05.426-200 | CNPJ: 17.895.646/0001-87
              </p>
            </div>
          </div>

          {/* Links grid */}
          <div className={styles.linksGrid}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className={styles.linkColumn}>
                <h4 className={styles.linkCategory}>{category}</h4>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className={styles.footerLink}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className={styles.bottomRow}>
            <div className={styles.socialLinks}>
              {/* LinkedIn */}
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19H5v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className={styles.socialIcon} aria-label="YouTube">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className={styles.socialIcon} aria-label="X">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            <div className={styles.localeRow}>
              <a href="#" className={styles.localeBtn}>
                <Globe size={16} />
                Português (Brasil)
              </a>
              <a href="#" className={styles.localeBtn}>
                <MapPin size={16} />
                São Paulo
              </a>
            </div>
          </div>

          {/* App stores */}
          <div className={styles.appStores}>
            <a href="#" className={styles.storeBtn}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                height="40"
              />
            </a>
            <a href="#" className={styles.storeBtn}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                height="40"
              />
            </a>
          </div>

          {/* Legal */}
          <div className={styles.legal}>
            <span>© 2026 Uber Technologies Inc.</span>
            <div className={styles.legalLinks}>
              <a href="#">Privacidade</a>
              <a href="#">Acessibilidade</a>
              <a href="#">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
