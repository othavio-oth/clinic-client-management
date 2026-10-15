import type { NextPage } from "next";
import Link from "next/link";
import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import PatientModal from "../components/PatientModal";
import { PATIENTS, type Patient } from "../data/patients";
import styles from "../styles/dashboard.module.css";

const Patients: NextPage = () => {
  const [filter, setFilter] = useState("");
  const [patients, setPatients] = useState<Patient[]>(PATIENTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);

  const filtered = useMemo(
    () =>
      patients.filter(
        (patient) =>
          patient.name.toLowerCase().includes(filter.toLowerCase()) ||
          patient.email.toLowerCase().includes(filter.toLowerCase()) ||
          patient.phone.includes(filter),
      ),
    [filter, patients],
  );

  const openCreateModal = () => {
    setEditingIndex(null);
    setEditingPatient(null);
    setIsModalOpen(true);
  };

  const getPatientIndex = (patient: Patient) =>
    patients.findIndex(
      (item) => item.email === patient.email && item.name === patient.name,
    );

  const openEditModal = (patient: Patient, index: number) => {
    setEditingIndex(index);
    setEditingPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
    setEditingPatient(null);
  };

  const handleSave = (patient: Patient) => {
    setPatients((current) => {
      if (editingIndex !== null) {
        const updated = [...current];
        updated[editingIndex] = patient;
        return updated;
      }

      return [patient, ...current];
    });

    closeModal();
  };

  return (
    <>
      <Layout
        pageTitle="Pacientes"
        searchPlaceholder="Buscar pacientes..."
        actionLabel="Novo paciente"
        onAction={openCreateModal}
      >
        <div className={styles.pageHeader}>
          <h2>Pacientes</h2>
          <div className={styles.sub}>
            Gerencie atendimentos, recorrências e histórico.
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <h3>Lista de pacientes</h3>
            <span className={styles.badge}>{filtered.length} resultados</span>
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="search">Buscar</label>
            <input
              id="search"
              type="text"
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              placeholder="Nome, e-mail ou telefone"
            />
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Paciente</th>
                  <th>Contato</th>
                  <th>Próximo agendamento</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((patient) => {
                  const patientIndex = getPatientIndex(patient);

                  return (
                    <tr key={`${patient.email}-${patient.name}`}>
                      <td>
                        <Link
                          href={`/patient/${patientIndex}`}
                          className={styles.patientLink}
                        >
                          {patient.name}
                        </Link>
                      </td>
                      <td>{patient.phone}</td>
                      <td>{patient.nextAppointment}</td>
                      <td>
                        <span className={styles.tag}>
                          {patient.status === "Active" ? "Ativo" : "Inativo"}
                        </span>
                      </td>
                      <td>
                        <button
                          type="button"
                          className={styles.tableActionButton}
                          onClick={() => openEditModal(patient, patientIndex)}
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>

      <PatientModal
        isOpen={isModalOpen}
        mode={editingIndex === null ? "create" : "edit"}
        patient={editingPatient}
        onClose={closeModal}
        onSave={handleSave}
      />
    </>
  );
};

export default Patients;
