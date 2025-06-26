import Link from "next/link";
import { getAvailableNewsYears } from "@/lib/news";

export default async function ArchivePage() {
  const links = await getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
