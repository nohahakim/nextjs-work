import Link from "next/link";

export default function LandingPage() {
  return (
    <main>
      <h1>Welcome to Our News Site</h1>
      <p>Explore the latest updates!</p>
      <Link href="/news">Read the Latest News</Link>
    </main>
  );
}
