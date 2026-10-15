import styles from "../styles/dashboard.module.css";

type Props = {
  title?: string;
  placeholder?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function Topbar({
  title = "Painel",
  placeholder = "Buscar pacientes, sessões...",
  actionLabel = "Novo",
  onAction,
}: Props) {
  return (
    <header className={styles.topbar}>
      <h2>{title}</h2>
      <div className={styles.spacer} />
      <div className={styles.searchBox}>
        <input className={styles.searchInput} placeholder={placeholder} />
      </div>
      {actionLabel ? (
        <button type="button" className={styles.btn} onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </header>
  );
}
