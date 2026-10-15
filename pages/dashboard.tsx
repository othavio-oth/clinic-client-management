import type { NextPage } from "next";
import Layout from "../components/Layout";
import PatientList from "../components/PatientList";
import StatCard from "../components/StatCard";
import { PATIENTS } from "../data/patients";
import styles from "../styles/dashboard.module.css";

const Dashboard: NextPage = () => {
  return (
    <Layout
      pageTitle="Painel"
      searchPlaceholder="Buscar pacientes, sessões..."
      actionLabel="Agendar"
    >
      <div className={styles.pageHeader}>
        <h2>Visão geral</h2>
        <div className={styles.sub}>Resumo rápido das sessões e pacientes</div>
      </div>

      <div className={styles.cardGrid}>
        <StatCard label="Sessões esta semana" value="34" sub="+8%" />
        <StatCard label="Pacientes ativos" value="72" sub="—" />
        <StatCard
          label="Faturamento (mês)"
          value="R$ 8.400"
          sub="Meta: R$10.000"
        />
      </div>

      <div className={styles.twoCol}>
        <div style={{ flex: 1, marginRight: 16 }}>
          <div className={styles.card}>
            <PatientList patients={PATIENTS} />
          </div>
        </div>
        <div style={{ width: 360 }}>
          <div className={styles.card}>
            <h3>Resumo financeiro</h3>
            <div className={styles.finCard}>
              <div className={styles.finLabel}>Recebido (mês)</div>
              <div className={styles.finValue}>R$ 6.200</div>
              <div className={styles.finSub}>Em aberto: R$ 1.200</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
