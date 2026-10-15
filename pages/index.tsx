import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rapport — Início</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ padding: 20, fontFamily: "Inter, system-ui, Arial" }}>
        <h1>Rapport</h1>
        <p>
          Bem-vindo ao protótipo funcional. Navegue pelas telas reais abaixo.
        </p>
        <ul>
          <li>
            <Link href="/login">Tela de login</Link>
          </li>
          <li>
            <Link href="/dashboard">Painel</Link>
          </li>
          <li>
            <Link href="/schedule">Agenda</Link>
          </li>
          <li>
            <Link href="/patients">Pacientes</Link>
          </li>
          <li>
            <Link href="/finance">Financeiro</Link>
          </li>
          <li>
            <Link href="/settings">Configurações</Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
