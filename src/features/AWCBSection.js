import Image from "next/image";
import React from "react";

const AWCBSection = ({
  title,
  description,
  flexDirection,
  addClass,
  bannerText,
  bannerClass,
  items,
  type,
  columns,
  iconTitle,
  image,
  description: desc,
  horizontalScroll = false,
  featuredName,
}) => {
  return (
    <section className="my-12">
      <article
        className={`flex flex-${flexDirection} ${addClass} justify-between my-12`}
      >
        <div>
          <p className="gap-2 text-sm flex flex-row">
            <span>
              <svg
                width="12"
                height="14"
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
            {iconTitle}
          </p>
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        </div>

        {description && <div className="md:text-lg text-sm text-wrap w-md md:w-2xl">{description}</div>}
      </article>

      {/* {description && <p className="text-gray-700 mb-6"></p>} */}
      {bannerText && (
        <div
          className={`bg-gray-300 h-64 flex items-center justify-center ${bannerClass}`}
        >
          <p className="text-3xl font-bold">
            {bannerText.split("\n").map((line, index) => (
              <span key={index} className={index === 1 ? "block mt-2" : ""}>
                {line}
              </span>
            ))}
          </p>
        </div>
      )}
      {items && type === "team" && (
        horizontalScroll ? (
          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-6 px-1 snap-x snap-mandatory">
              {items.map((item, index) => (
                <div key={index} className="text-center w-64 shrink-0 snap-center">
                  <div className="h-64 w-64 bg-white rounded-lg overflow-hidden mb-3 flex items-center justify-center">
                    <Image
                      className="h-full w-full object-contain"
                      src={item.src}
                      alt={item.name}
                    />
                  </div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          featuredName ? (
            <div className="mt-6">
              {/* Featured on top */}
              {(() => {
                const featured = items.find((m) => m.name === featuredName);
                const rest = items.filter((m) => m.name !== featuredName);
                return (
                  <>
                    {featured && (
                      <div className="flex justify-center mb-10">
                        <div className="text-center">
                          <div className="h-64 w-64 bg-white rounded-lg overflow-hidden mb-3 flex items-center justify-center">
                            <Image className="h-full w-full object-contain" src={featured.src} alt={featured.name} />
                          </div>
                          <h3 className="font-semibold">{featured.name}</h3>
                          <p className="text-gray-600">{featured.title}</p>
                        </div>
                      </div>
                    )}
                    {/* Grid for the rest */}
                    <div className={`grid grid-cols-1 ${columns ? `md:grid-cols-${columns}` : 'md:grid-cols-3'} gap-6`}>
                      {rest.map((item, index) => (
                        <div key={index} className="text-center">
                          <div className="h-64 w-64 bg-white rounded-lg overflow-hidden mb-3 mx-auto flex items-center justify-center">
                            <Image className="h-full w-full object-contain" src={item.src} alt={item.name} />
                          </div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-gray-600">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 ${
                columns === 4 ? "md:grid-cols-4 overflow-x-hidden" : "md:grid-cols-1"
              } gap-6 mt-6`}
            >
              {items.map((item, index) => (
                <div key={index} className="text-center">
                  <Image
                    className="h-[24rem] w-[28rem] flex items-center justify-center mb-2"
                    src={item.src}
                    alt={item.name}
                  />
                  <div className="bg-gray-300 ">
                    {item.image}
                  </div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.title}</p>
                </div>
              ))}
            </div>
          )
        )
      )}
      {items && type === "testimonials" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-slate-100 px-6 flex flex-col gap-5 py-8 rounded shadow"
            >
              <div className="flex justify-between mt-2">
                <p className="font-semibold mr-2">{item.name}</p>
                <div className="flex text-yellow-400">
                  {"★".repeat(item.rating)}
                </div>
              </div>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      )}
      {/* {desc && <p className="text-gray-700 mt-6">{desc}</p>} */}
    </section>
  );
};

export default AWCBSection;
