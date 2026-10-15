import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/login.module.css";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login — Rapport</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.loginPage}>
        <section className={styles.loginBox}>
          <div className={styles.loginHeader}>
            <h1 className={styles.loginTitle}>Bem-vindo ao Rapport</h1>
            <p className={styles.loginSubtitle}>
              Faça login para acessar sua agenda, pacientes e finanças.
            </p>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className={styles.formInput}
              placeholder="seu@exemplo.com"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className={styles.formInput}
              placeholder="••••••••"
            />
          </div>
          <div className={styles.loginActions}>
            <Link href="/dashboard" className={styles.btnPrimary}>
              Entrar
            </Link>
            <p className={styles.links}>
              Ainda não tem conta? <a href="/">Voltar ao launcher</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
