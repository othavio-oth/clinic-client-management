import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/dashboard.module.css";

const days = [
  { label: "Seg", date: "25" },
  { label: "Ter", date: "26" },
  { label: "Qua", date: "27" },
  { label: "Qui", date: "28", today: true },
  { label: "Sex", date: "29" },
];

const hours = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
];

const appointments = [
  {
    day: "Ter",
    start: "09:00",
    title: "Maria Oliveira",
    detail: "08:00 · 50min",
  },
  {
    day: "Ter",
    start: "10:00",
    title: "Carlos Mendes",
    detail: "10:00 · 50min",
  },
  {
    day: "Qua",
    start: "11:00",
    title: "Rafael Souza",
    detail: "11:00 · 50min",
  },
  {
    day: "Qui",
    start: "09:00",
    title: "Pedro Santos",
    detail: "09:00 · 50min",
  },
  {
    day: "Qua",
    start: "15:00",
    title: "Maria Oliveira",
    detail: "15:00 · 50min",
  },
];

const getRowIndex = (time: string) =>
  hours.findIndex((hour) => hour === time) + 2;
const getColumnIndex = (day: string) =>
  days.findIndex((item) => item.label === day) + 2;

const Schedule: NextPage = () => {
  return (
    <Layout
      pageTitle="Agenda"
      searchPlaceholder="Buscar compromissos..."
      actionLabel="Nova sessão"
    >
      <div className={styles.pageHeader}>
        <h2>Agenda</h2>
        <div className={styles.sub}>Semana de 25 a 29 de Maio de 2026</div>
      </div>

      <div className={styles.agendaCard}>
        <div className={styles.agendaHeader}>
          <div className={styles.weekNav}>
            <button className={styles.navButton}>&lt;</button>
            <span>Semana de 25 a 29 de Maio de 2026</span>
            <button className={styles.navButton}>&gt;</button>
          </div>
          <button className={styles.btnPrimary}>Hoje</button>
        </div>

        <div className={styles.agendaGrid}>
          <div className={styles.timeColumn} />
          {days.map((day) => (
            <div
              key={day.label}
              className={`${styles.dayHeader} ${day.today ? styles.todayHeader : ""}`}
            >
              <span>{day.label}</span>
              <strong>{day.date}</strong>
            </div>
          ))}

          {hours.map((hour) => (
            <div key={hour} className={styles.timeCell}>
              {hour}
            </div>
          ))}

          {days.map((day) =>
            hours.map((hour) => (
              <div key={`${day.label}-${hour}`} className={styles.gridCell} />
            )),
          )}

          {appointments.map((appointment) => (
            <div
              key={`${appointment.day}-${appointment.start}`}
              className={styles.appointmentCard}
              style={{
                gridRowStart: getRowIndex(appointment.start),
                gridColumnStart: getColumnIndex(appointment.day),
              }}
            >
              <strong>{appointment.title}</strong>
              <span>{appointment.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
