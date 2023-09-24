import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="quiz">Quiz</Link>
          </li>
          <li>
            <Link href="practice">Practice</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
