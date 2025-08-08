import BasePage from "../base-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Banyuwangi Dive School",
  description:
    "Browse photos from our dive trips and training sessions at Banyuwangi Dive School.",
};

export default function GalleryPage() {
  return (
    <BasePage>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-accent">Gallery</h1>
        <p className="text-lg text-primaryDark">
          Take a look at memorable moments captured during our dives and activities.
        </p>
      </div>
    </BasePage>
  );
}
