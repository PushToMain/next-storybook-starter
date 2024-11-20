import Container from "@/components/ui/container";
import { NavMenu } from "./NavMenu";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Header({
  companyName = "Company Name",
}: {
  companyName?: string;
}) {
  return (
    <header className="sticky top-0 z-50 bg-transparent py-5">
      <Container className="flex items-center justify-between">
        <Link href="/">{companyName}</Link>
        <NavMenu />

        <div className="flex items-center gap-4">
          <Button>Sign Up</Button>
        </div>
      </Container>
    </header>
  );
}
