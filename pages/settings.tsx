import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/dashboard.module.css";

const Settings: NextPage = () => {
  return (
    <Layout
      pageTitle="Configurações"
      searchPlaceholder="Buscar configurações..."
      actionLabel=""
    >
      <div className={styles.pageHeader}>
        <h2>Configurações</h2>
        <div className={styles.sub}>
          Ajuste sua conta, notificações e preferências do fluxo.
        </div>
      </div>

      <div className={styles.settingsSection}>
        <h3>Conta</h3>
        <div className={styles.settingsRow}>
          <div>
            <strong>Nome</strong>
            <p>Otavio Souza</p>
          </div>
          <div>
            <strong>Plano</strong>
            <p>Essencial</p>
          </div>
        </div>
        <div className={styles.settingsRow}>
          <div>
            <strong>E-mail</strong>
            <p>otavio@email.com</p>
          </div>
          <div>
            <strong>Telefone</strong>
            <p>(11) 99999-8888</p>
          </div>
        </div>
      </div>

      <div className={styles.settingsSection}>
        <h3>Notificações</h3>
        <div className={styles.settingsRow}>
          <div>
            <strong>Lembretes de sessão</strong>
            <p>Enviar lembretes aos pacientes 30 minutos antes.</p>
          </div>
          <label className={styles.toggleLabel}>
            <div className={styles.toggleControl}>
              <input type="checkbox" defaultChecked />
              <span className={styles.toggleSlider} />
            </div>
          </label>
        </div>
        <div className={styles.settingsRow}>
          <div>
            <strong>Resumo diário</strong>
            <p>Receber relatório financeiro e agenda por e-mail.</p>
          </div>
          <label className={styles.toggleLabel}>
            <div className={styles.toggleControl}>
              <input type="checkbox" />
              <span className={styles.toggleSlider} />
            </div>
          </label>
        </div>
      </div>

      <div className={styles.settingsSection}>
        <h3>Preferências</h3>
        <div className={styles.settingsRow}>
          <div>
            <strong>Modo de exibição</strong>
            <p>Escolha o layout mais confortável para o seu dia.</p>
          </div>
          <span className={styles.badge}>Claro</span>
        </div>
        <div className={styles.settingsRow}>
          <div>
            <strong>Idiomas</strong>
            <p>Português (Brasil)</p>
          </div>
          <span className={styles.badge}>PT-BR</span>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
