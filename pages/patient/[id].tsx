import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { PATIENTS } from "../../data/patients";
import styles from "../../styles/dashboard.module.css";

const PatientDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const patientIndex = Number(id ?? 0);
  const patient = PATIENTS[patientIndex] ?? PATIENTS[0];

  if (!patient) {
    return (
      <Layout pageTitle="Paciente">
        <div className={styles.card}>
          <h3>Paciente não encontrado</h3>
          <Link href="/patients" className={styles.patientLink}>
            Voltar para pacientes
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      pageTitle="Detalhes do paciente"
      searchPlaceholder="Buscar pacientes..."
    >
      <div className={styles.pageHeader}>
        <h2>{patient.name}</h2>
        <div className={styles.sub}>Perfil completo do paciente</div>
      </div>

      <div className={styles.card}>
        <div className={styles.profileHeader}>
          <div className={styles.pAvatar}>{patient.initials}</div>
          <div>
            <h3>{patient.name}</h3>
            <p>{patient.email}</p>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label>Telefone</label>
            <input value={patient.phone} readOnly />
          </div>
          <div className={styles.fieldGroup}>
            <label>Status</label>
            <input
              value={patient.status === "Active" ? "Ativo" : "Inativo"}
              readOnly
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label>Próximo agendamento</label>
            <input value={patient.nextAppointment} readOnly />
          </div>
          <div className={styles.fieldGroup}>
            <label>Recorrência</label>
            <input value={patient.recurrence} readOnly />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label>Última sessão</label>
            <input value={patient.lastSession} readOnly />
          </div>
          <div className={styles.fieldGroup}>
            <label>Valor</label>
            <input value={patient.value} readOnly />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.fieldGroup}>
            <label>Faltas</label>
            <input value={patient.missedSessions} readOnly />
          </div>
          <div className={styles.fieldGroup}>
            <label>Contato</label>
            <input value={patient.email} readOnly />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PatientDetailPage;
