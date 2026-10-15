import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/dashboard.module.css";

const payments = [
  {
    date: "Jun 01",
    description: "Session with João Almeida",
    amount: "R$ 120",
    status: "Paid",
  },
  {
    date: "Jun 02",
    description: "Session with Maria Santos",
    amount: "R$ 150",
    status: "Pending",
  },
  {
    date: "Jun 03",
    description: "Session with Ana Costa",
    amount: "R$ 100",
    status: "Paid",
  },
  {
    date: "Jun 05",
    description: "Session with Roberto Nunes",
    amount: "R$ 140",
    status: "Paid",
  },
];

const Finance: NextPage = () => {
  return (
    <Layout
      pageTitle="Financeiro"
      searchPlaceholder="Buscar transações..."
      actionLabel="Nova cobrança"
    >
      <div className={styles.pageHeader}>
        <h2>Financeiro</h2>
        <div className={styles.sub}>
          Resumo de receitas, cobranças e recebimentos.
        </div>
      </div>

      <div className={styles.cardGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Receita do mês</div>
          <div className={styles.statValue}>R$ 8.400</div>
          <div className={styles.statSub}>Meta R$ 10.000</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>A receber</div>
          <div className={styles.statValue}>R$ 1.200</div>
          <div className={styles.statSub}>8 sessões pendentes</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Recebido hoje</div>
          <div className={styles.statValue}>R$ 370</div>
          <div className={styles.statSub}>2 transações</div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.sectionTitle}>
          <h3>Movimentação recente</h3>
          <span className={styles.badge}>Atualizado</span>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.date + payment.amount}>
                  <td>{payment.date}</td>
                  <td>{payment.description}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.status === "Paid" ? "Pago" : "Pendente"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Finance;
