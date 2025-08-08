import BasePage from "../base-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dive Tour | Banyuwangi Dive School",
  description:
    "Join guided dive tours and explore the underwater beauty of Banyuwangi and beyond with our experienced instructors.",
};

export default function DiveTourPage() {
  return (
    <BasePage>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-accent">Dive Tour</h1>
        <p className="text-lg text-primaryDark">
          Join our unforgettable dive tours and experience the vibrant marine life around Banyuwangi.
        </p>
      </div>
    </BasePage>
  );
}
