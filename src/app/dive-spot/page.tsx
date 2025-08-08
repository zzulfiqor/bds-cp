import BasePage from "../base-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diving Spots | Banyuwangi Dive School",
  description:
    "Discover the best diving spots in Banyuwangi, from colorful coral reefs to historic shipwrecks.",
};

export default function DiveSpotPage() {
  return (
    <BasePage>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-accent">Diving Spots</h1>
        <p className="text-lg text-primaryDark">
          Explore a variety of diving spots curated for both beginners and experienced divers.
        </p>
      </div>
    </BasePage>
  );
}
