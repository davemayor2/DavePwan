import React from "react";
import AWCBSection from "./AWCBSection";
import Image from "next/image";
import { urbanLegacy, Emeka, Kudirat, Joshua, Okoro, waleGraphic, naomi, chisom, tochukwu, korede, precious, amara, pius, yinka } from "./assets";

const AboutWhyChooseBelow = () => {
  // Core team (appears in "Meet Our Team"). Move people between arrays as needed.
  const coreTeam = [
    {
      name: "Emeka Justine",
      title: "Managing Director",
      src: Emeka,
    },
    {
      name: "Mr. Pius Dabel",
      title: "Head of Accounts, Lagos",
      src: pius,
    },
    {
      name: "Mr. Korede Tiamiyu",
      title: "Head of Operations, Lagos",
      src: korede,
    },
    {
      name: "Ms. Olayinka Ikuomola",
      title: "Accounts Assitant, Lagos",
      src: yinka,
    },
    {
      name: "Mr. Isaiah Stanley",
      title: "Social Media Manager",
      src: tochukwu,
    },
    {
      name: "Mr. Ayodele Olawale",
      title: "Graphic Designer",
      src: waleGraphic,
    },
    {
      name: "Mr. Chisom Ogoke",
      title: "Operations Surveyor",
      src: chisom,
    },
    {
      name: "Ms. Eze Ijeoma",
      title: "Content Strategist",
      src: naomi,
    },
    {
      name: "Ms. Precious Chinwe",
      title: "Receptionist",
      src: precious,
    },
    {
      name: "Ms. Amarachi ",
      title: "Administrative Officer",
      src: amara,
    },
  ];

  // Mentees (appears under separate section). Add or remove people here freely.
  const mentees = [
    {
      name: "Mr. Joshua Godwin",
      title: "Mentee",
      src: Joshua,
    },
    {
      name: "Mr. Iheanacho Okoro",
      title: "Mentee",
      src: Okoro,
    },
  ];

  const testimonials = [
    {
      name: "Olaide Fiyasoyi",
      content:
        "“Investing with PWAN ELITE was the best decision I made. The process was seamless, and I got my allocation immediately after payment. Truly trustworthy!",
      rating: 5,
    },
    {
      name: "Nneka Maduka",
      content:
        "What I love about PWAN ELITE is their transparency. Within 3 months I had my documents ready, just as promised. No stress at all",
      rating: 5,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <article className="flex flex-row justify-between mx-6 my-6">
        <div>
          <p className="gap-1 capitalize text-xs flex flex-row">
            <span>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.35817 1.07169L1.85817 3.13419C1.14317 3.40919 0.666504 4.08752 0.666504 4.85752V9.17502C0.666504 13.8042 3.79234 18.1217 7.99984 19.1759C12.2073 18.1217 15.3332 13.8042 15.3332 9.17502V4.85752C15.3325 4.48449 15.2181 4.12054 15.0052 3.81425C14.7922 3.50796 14.4909 3.27391 14.1415 3.14335L8.6415 1.08085C8.229 0.915853 7.77067 0.915853 7.35817 1.07169ZM6.37734 12.5942L4.434 10.6509C4.34914 10.566 4.28182 10.4652 4.23589 10.3544C4.18996 10.2435 4.16632 10.1246 4.16632 10.0046C4.16632 9.88458 4.18996 9.76574 4.23589 9.65485C4.28182 9.54397 4.34914 9.44322 4.434 9.35835C4.51887 9.27349 4.61962 9.20617 4.73051 9.16024C4.84139 9.11431 4.96023 9.09067 5.08025 9.09067C5.20027 9.09067 5.31912 9.11431 5.43 9.16024C5.54089 9.20617 5.64164 9.27349 5.7265 9.35835L7.019 10.6509L10.264 7.40585C10.3489 7.32099 10.4496 7.25367 10.5605 7.20774C10.6714 7.16181 10.7902 7.13817 10.9103 7.13817C11.0303 7.13817 11.1491 7.16181 11.26 7.20774C11.3709 7.25367 11.4716 7.32099 11.5565 7.40585C11.6414 7.49072 11.7087 7.59147 11.7546 7.70235C11.8005 7.81324 11.8242 7.93208 11.8242 8.0521C11.8242 8.17212 11.8005 8.29097 11.7546 8.40185C11.7087 8.51273 11.6414 8.61349 11.5565 8.69835L7.66984 12.585C7.3215 12.9517 6.73484 12.9517 6.37734 12.5942Z"
                  fill="#FF0000"
                />
              </svg>
            </span>
            what sets us apart
          </p>
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
        </div>

        <div className="w-2xl text-gray-500">
          We specialize in electrical infrastructure for real estate projects
          ensuring seamless installations, minimal downtime, and future-ready
          systems that support smart living and long-term asset performance.
        </div>
      </article>

      <div className="w-full relative overflow-hidden h-[30rem] bg-slate-900">
        <Image
          src={urbanLegacy}
          alt="urban legacy"
          className="absolute inset-0 w-full object-cover object-center opacity-45 h-full"
        />
      </div>

      <main className="max-w-7xl mx-auto p-6">
        <AWCBSection
          iconTitle="Values"
          flexDirection = 'row'
          title="Meet Our Team"
          items={coreTeam}
          // description="Lorem ipsum dolor sit amet consectetur. Feugiat tortor morbi dictum egestas donec mus at porttitor. Magna facilisis duis nunc porttitor metus suspendisse turpis dignissim."
          type="team"
          columns={3}
          featuredName="Emeka Justine"
        />
        <AWCBSection
          iconTitle="Team"
          flexDirection='row'
          title="Mentees"
          items={mentees}
          type="team"
          columns={3}
        />
        <AWCBSection
          iconTitle="What Our Customers Say"
          flexDirection= 'col'
          addClass = 'mx-auto text-center items-center justify-center'
          title="Testimonials"
          items={testimonials}
          type="testimonials"
          description="PWAN ELITE is a real estate marketing, development and management company, a subsidiary of the PWAN (Property World Africa Network) Group. a company with a mission to make home ownership dreams a reality."
        />
      </main>
    </div>
  );
};

export default AboutWhyChooseBelow;
