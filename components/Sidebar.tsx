import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/dashboard.module.css";

const navItems = [
  { href: "/dashboard", label: "Painel" },
  { href: "/schedule", label: "Agenda" },
  { href: "/patients", label: "Pacientes" },
  { href: "/finance", label: "Financeiro" },
  { href: "/settings", label: "Configurações" },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>R</div>
        <div className={styles.brand}>
          Rapport <span>Pro</span>
        </div>
      </div>
      <nav className={styles.sidebarNav}>
        {navItems.map((item) => {
          const active = router.pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${active ? styles.activeNavLink : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className={styles.sidebarFooter}>
        <div className={styles.avatar}>OT</div>
        <div className={styles.footerInfo}>
          <div className={styles.name}>Otavio</div>
          <div className={styles.crp}>CRP 12345</div>
        </div>
      </div>
    </aside>
  );
}
