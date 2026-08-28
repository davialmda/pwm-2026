import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Meus exercícios de CSS</h1>

      <nav>
        <Link href="/atividade1">Atividade 1</Link>
        <br />

        <Link href="/atividade2">Atividade 2</Link>
        <br />

        <Link href="/atividade3">Atividade 3 </Link>
        <br />

        <Link href="/atividade4">Atividade 4</Link>
      </nav>
    </main>
  );
}