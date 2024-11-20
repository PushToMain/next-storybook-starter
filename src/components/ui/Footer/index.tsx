import Link from "next/link";
import Container from "@/components/ui/container";

export default function Footer({
  linkOneText = "Documentation",
  linkTwoText = "Examples",
  linkThreeText = "Go to nextjs.org →",
}: {
  linkOneText?: string;
  linkTwoText?: string;
  linkThreeText?: string;
}) {
  return (
    <footer className="bg-black py-4 text-white">
      <Container className="flex flex-wrap items-center justify-center gap-6">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkOneText}
        </Link>

        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkTwoText}
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkThreeText}
        </Link>
      </Container>
    </footer>
  );
}
