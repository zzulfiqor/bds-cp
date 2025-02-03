"use client";

import { useEffect } from "react";
import BasePage from "./base-page";

export default function Home() {

  const testimonies = [
    {
      id: 1,
      name: "Ruby Englishe",
      job: "Traveler",
      content:
        "An extraordinary experience! I had the chance to meet people from all over the world, and I learned a lot about different cultures. I recommend it to everyone!",
    },
    {
      id: 2,
      name: "Shanti Situmorang",
      job: "Entrepreneur",
      content:
        "The diving spots were breathtaking, and the instructors were very professional. It was an unforgettable adventure!",
    },
    {
      id: 3,
      name: "Aldy Pratama",
      job: "Student",
      content:
        "The diving school provided excellent training, and I felt very safe throughout the course. Highly recommended for beginners!",
    },
    {
      id: 4,
      name: "Rizky Ramadhan",
      job: "Freelancer",
      content:
        "I loved the friendly atmosphere and the beautiful underwater scenery. It was a perfect getaway from my daily routine.",
    },
  ];

  let currentIndex = 0;

  function handleSwipe(direction: 'left' | 'right') {
    const testimoniesContainer = document.querySelector('#they-said .flex') as HTMLElement | null;
    if (!testimoniesContainer) return;
    const testimoniesCount = testimoniesContainer.children.length;

    if (direction === 'left') {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimoniesCount - 1;
    } else {
      currentIndex = (currentIndex < testimoniesCount - 1) ? currentIndex + 1 : 0;
    }

    testimoniesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Auto change testimony every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleSwipe('right');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <BasePage
        children={
          <div>
            {/* Section Hero */}
            <section id="hero" className="bg-primaryDark">
              <div className="relative">
                <div className="video-container p-0">
                  <video
                    className="w-[100%] h-[100vh] object-cover -translate-y-[80px] filter brightness-50 md:-translate-y-[85px]"
                    autoPlay
                    loop
                    muted
                  >
                    <source src="/hero.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center -translate-y-20">
                  {/* <img src="/logo-white.png" alt="" /> */}
                  <h1 className="text-white text-3xl md:text-4xl mt-8 mb-4 font-extrabold text-center">
                    Banyuwangi Diving School
                  </h1>
                  <h2 className="text-white text-1xl md:text-2xl text-center">
                    A Premier Diving School in Bangsring, Banyuwangi
                  </h2>
                  <button
                    className="mt-6 px-6 py-3 bg-accent text-white rounded-full font-bold hover:bg-white hover:text-primary transition duration-250 animate-pulse hover:animate-none shadow-lg"
                    onClick={() => {
                      document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Start Your Adventure Now
                  </button>
                </div>
              </div>
            </section>
            {/* End of section hero */}

            {/* Section About */}
            <section id="about" className="bg-primaryDark text-white">
              <div className="container px-[10vw] pb-20 mx-auto grid text-secondary grid-cols-1 gap-4 text-center">
                <p className="text-4xl md:text-5xl font-extrabold">IT IS NOT ONLY DIVE, IT IS LIFE
                </p>
                <p className="text-lg mt-6 text-white">
                  Your diving journey begins in Bangsring, but the exploration continues to the enchanting Tabuhan Island, a gem still untouched by many. Or explore the myriad dive sites around Menjangan Island. If you seek to dance with the currents, don’t miss Watu Dodol and West Bali—both are worthy of your exploration, offering breathtaking views that will leave you in awe.
                </p>
                <div className="py-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative overflow-hidden  backdrop-blur-lg rounded-lg">
                      <img
                        src="/img-dive-1.webp"
                        alt=""
                        className="w-full h-[220px] object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white text-l px-2 py-4 rounded h-auto font-bold">
                        GET YOUR DIVE LICENSE
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button className="mt-2 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-accent"
                          onClick={() => { }}
                        >
                          Learn More
                        </button>
                      </div>

                    </div>

                    <div className="relative overflow-hidden  backdrop-blur-lg rounded-lg">
                      <img
                        src="/img-dive-2.webp"
                        alt=""
                        className="w-full h-[220px] object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white text-l px-2 py-4 rounded h-auto font-bold">
                        CHECK OUR AMAZING DIVING SPOT
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button className="mt-2 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-accent">
                          Learn More
                        </button>
                      </div>
                    </div>

                    <div className="relative overflow-hidden  backdrop-blur-lg rounded-lg">
                      <img
                        src="/img-dive-3.webp"
                        alt=""
                        className="w-full h-[220px] object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white text-l px-2 py-4 rounded h-auto font-bold">
                        OUR DIVE TOUR PACKAGES
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button className="mt-2 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-accent">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End of section about */}

            {/* Section Our Activity */}
            <section id="our-activity">

            </section>
            {/* End Of Our Activity */}

            {/* Section They Said */}
            <section id="they-said" className="bg-primaryDark ">

            </section>

            {/* End of They Said */}

            {/* Section Contact Us */}
            <section id="contact-us">

            </section>
            {/* End of Contact Us */}
          </div>
        }
      />
    </>
  );
}
