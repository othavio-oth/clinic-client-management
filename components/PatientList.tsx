import Link from "next/link";
import type { Patient } from "../data/patients";
import styles from "../styles/dashboard.module.css";

type Props = { patients?: Patient[] };

export default function PatientList({ patients = [] }: Props) {
  return (
    <div>
      <h3>Pacientes</h3>
      <div className={styles.patientList}>
        {patients.map((p, idx) => (
          <div key={idx} className={styles.patientItem}>
            <div className={styles.pAvatar}>{p.initials}</div>
            <div className={styles.pInfo}>
              <div className={styles.pName}>
                <Link href={`/patient/${idx}`} className={styles.patientLink}>
                  {p.name}
                </Link>
              </div>
              <div className={styles.pDetail}>
                {p.email} · {p.phone}
              </div>
            </div>
            <div className={styles.pMeta}>{p.nextAppointment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
