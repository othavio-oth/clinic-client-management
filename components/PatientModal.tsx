import { FormEvent, useEffect, useState } from "react";
import type { Patient } from "../data/patients";
import styles from "../styles/dashboard.module.css";

type Props = {
  isOpen: boolean;
  mode: "create" | "edit";
  patient: Patient | null;
  onClose: () => void;
  onSave: (patient: Patient) => void;
};

const emptyPatient: Patient = {
  initials: "",
  name: "",
  email: "",
  phone: "",
  nextAppointment: "",
  status: "Active",
  missedSessions: 0,
  lastSession: "",
  value: "",
  recurrence: "—",
};

const buildInitials = (name: string) => {
  const words = name.trim().split(/\s+/).filter(Boolean).slice(0, 2);

  if (!words.length) {
    return "";
  }

  return words
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);
};

export default function PatientModal({
  isOpen,
  mode,
  patient,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState<Patient>(emptyPatient);

  useEffect(() => {
    if (isOpen) {
      setForm(patient ?? emptyPatient);
    }
  }, [isOpen, patient]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const updateField = <K extends keyof Patient>(
    field: K,
    value: Patient[K],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const patientToSave: Patient = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      initials: form.initials || buildInitials(form.name),
      status: form.status || "Active",
    };

    if (!patientToSave.name || !patientToSave.email || !patientToSave.phone) {
      return;
    }

    onSave(patientToSave);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalCard}
        role="dialog"
        aria-modal="true"
        aria-labelledby="patient-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <div>
            <div className={styles.cardLabel}>Paciente</div>
            <h3 id="patient-modal-title" className={styles.modalTitle}>
              {mode === "create" ? "Novo paciente" : "Editar paciente"}
            </h3>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.modalBody}>
            <div className={styles.formRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor="patient-name">Nome</label>
                <input
                  id="patient-name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Nome completo"
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="patient-initials">Iniciais</label>
                <input
                  id="patient-initials"
                  value={form.initials}
                  onChange={(event) =>
                    updateField("initials", event.target.value)
                  }
                  placeholder="Ex.: JA"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor="patient-email">E-mail</label>
                <input
                  id="patient-email"
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="seu@email.com"
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="patient-phone">Telefone</label>
                <input
                  id="patient-phone"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor="patient-next">Próximo agendamento</label>
                <input
                  id="patient-next"
                  value={form.nextAppointment}
                  onChange={(event) =>
                    updateField("nextAppointment", event.target.value)
                  }
                  placeholder="Ter 14h"
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="patient-status">Status</label>
                <select
                  id="patient-status"
                  value={form.status}
                  onChange={(event) =>
                    updateField("status", event.target.value)
                  }
                >
                  <option value="Active">Ativo</option>
                  <option value="Inactive">Inativo</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor="patient-last">Última sessão</label>
                <input
                  id="patient-last"
                  value={form.lastSession}
                  onChange={(event) =>
                    updateField("lastSession", event.target.value)
                  }
                  placeholder="19 mai"
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="patient-value">Valor</label>
                <input
                  id="patient-value"
                  value={form.value}
                  onChange={(event) => updateField("value", event.target.value)}
                  placeholder="R$ 120"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor="patient-missed">Faltas</label>
                <input
                  id="patient-missed"
                  type="number"
                  min={0}
                  value={form.missedSessions}
                  onChange={(event) =>
                    updateField(
                      "missedSessions",
                      Number(event.target.value) || 0,
                    )
                  }
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="patient-recurrence">Recorrência</label>
                <input
                  id="patient-recurrence"
                  value={form.recurrence}
                  onChange={(event) =>
                    updateField("recurrence", event.target.value)
                  }
                  placeholder="Terças, 14h (semanal)"
                />
              </div>
            </div>
          </div>

          <div className={styles.modalFooter}>
            <button
              type="button"
              className={styles.btnSecondary}
              onClick={onClose}
            >
              Cancelar
            </button>
            <button type="submit" className={styles.btnPrimary}>
              {mode === "create" ? "Salvar paciente" : "Atualizar paciente"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
