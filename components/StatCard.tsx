import styles from "../styles/dashboard.module.css";

type Props = {
  label: string;
  value: string | number;
  sub?: string;
};

export default function StatCard({ label, value, sub }: Props) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
      {sub && <div className={styles.statSub}>{sub}</div>}
    </div>
  );
}
