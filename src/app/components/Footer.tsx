import Image from "next/image";
import Map from "./Map";

export default function Footer() {
  return (
    <>
      <div className="w-full h-auto bg-primaryDark px-4 pt-12 pb-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h1 className="font-bold text-accent pb-4">CONTACT :</h1>
            <table className="w-full align-top text-white overflow-hidden text-sm md:text-base">
              <tbody>
                <tr className="align-top">
                  <td className="pr-4 align-top">Email</td>
                  <td className="align-top"> : </td>
                  <td className="pl-4 align-top">
                    <a href="mailto:info@banyuwangidivingschool.com">
                      info@banyuwangidivingschool.com
                    </a>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="pr-4 align-top">Phone</td>
                  <td className="align-top"> : </td>
                  <td className="pl-4 align-top">
                    <a href="tel:+6281979778878">+62 819-7977-8878</a>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="pr-4 align-top">Address</td>
                  <td className="align-top"> : </td>
                  <td className="pl-4 align-top">
                    Jl. Bangsring Under Water, Kemanduran, Bangsring, Kec.
                    Wongsorejo, Kabupaten Banyuwangi, Jawa Timur 68453
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="pr-4 align-top">Instagram</td>
                  <td className="align-top"> : </td>
                  <td className="pl-4 align-top">
                    <a
                      href="https://www.instagram.com/banyuwangidivingschool/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @banyuwangidivingschool
                    </a>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="pr-4 align-top">Tiktok</td>
                  <td className="align-top"> : </td>
                  <td className="pl-4 align-top">
                    <a
                      href="https://www.instagram.com/banyuwangidivingschool/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      banyuwangidivingschool
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Certified By Padi */}
          <div className="text-accent sm:w-full">
            <h1 className="font-bold">CERTIFIED BY :</h1>
            <div className="flex flex-col items-start text-sm md:text-base">
              <div className="flex flex-col items-center w-full">
                <Image
                  src="/padi.png"
                  alt="Padi"
                  width={200} // sesuaikan ukuran sesuai kebutuhan
                  height={100} // sesuaikan ukuran sesuai kebutuhan
                  className="w-1/2 pt-4 pb-4"
                />
                <p className="text-sm text-white text-center">
                  The Professional Association of Diving Instructors
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="text-accent overflow-hidden w-auto">
            <h1 className="font-bold">BANYUWANGI DIVING SCHOOL</h1>
            <h3 className="text-white pt-2 pb-4 text-sm md:text-base">
              Jl. Bangsring Under Water, Kemanduran, Bangsring, Kec.
              Wongsorejo, Kabupaten Banyuwangi, Jawa Timur 68453
            </h3>
            <Map />
          </div>
        </div>
      </div>

      {/* Copyright text */}
      <div className="w-full bg-primary pt-2 px-4 text-center text-white pb-20 md:pb-2">
        <p>© 2025 Ahmad Zuhiar Dzulfiqor All Rights Reserved.</p>
      </div>
    </>
  );
}
