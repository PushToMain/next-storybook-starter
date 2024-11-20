import Link from "next/link";
import { Button } from "@/components/ui/Button";

type Button = {
  label: string;
  href: string;
  variant: "default" | "outline";
  newTab: boolean;
};

export const ctaButtons: Button[] = [
  {
    label: "Get started",
    href: "/",
    variant: "default",
    newTab: false,
  },
  {
    label: "Learn more",
    href: "/",
    variant: "outline",
    newTab: false,
  },
];

export default function Hero({
  announcementText = "Announcing our next round of funding.",
  announcementLinkText = "Read more",
  announcementUrl = "#",
  headline = "Data to enrich your online business",
  description = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
  buttons = ctaButtons,
}: {
  announcementText?: string;
  announcementLinkText?: string;
  announcementUrl?: string;
  headline?: string;
  description?: string;
  buttons?: Button[];
}) {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              {announcementText}{" "}
              <Link
                href={announcementUrl || "#addLink"}
                className="font-semibold text-indigo-600"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                {announcementLinkText} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              {headline}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              {description}
            </p>

            {buttons && buttons.length > 0 && (
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {buttons.map(({ label, href, variant, newTab }) => (
                  <Button key={label} variant={variant}>
                    <Link
                      href={href}
                      target={newTab ? "_blank" : "_self"}
                      rel={newTab ? "noopener noreferrer" : undefined}
                    >
                      {label}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
