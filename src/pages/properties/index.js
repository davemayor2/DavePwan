"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  propsBg, akuRuo, speak, urbanLegacy, seeLove, eastView,
  koleAyo, handpick, alaomaLuxury, obiEze, eliteCity,
  eliteCasa, eliteEmpire, greenView, ugochiEstate,
  ugwumbaEstate, lavenderCourts, eliteEastland2
} from "@/features/assets";

import PropFeaturesCard from '@/features/PropFeaturesCard';
import PropPropertiesCard from '@/features/PropPropertiesCard';
import PropLandCard from '@/features/PropLandCard';

const IndexPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredLands, setFilteredLands] = useState([]);

  const features = [
    { title: "Handpicked Homes, Tailored for You", style: { backgroundImage: `url(${handpick.src})`} },
    { title: "Properties That Speak Your Style", style: { backgroundImage: `url(${speak.src})`} },
    { title: "See It. Love It. Live It.", style: { backgroundImage: `url(${seeLove.src})`} },
  ];

  const lands = [
    {
      id: "ul1",
      title: "Urban Legacy",
      location: "Lagos",
      description: "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster.",
      imageAlt: "Urban Legacy",
      src: urbanLegacy,
      subscriptionFormUrl: "/downloads/Urban_Legacy_Sub_Form.pdf",
      flyerUrl: "/downloads/urbanLegacy.jpg",
      subscriptionFormFileName: "Urban_Legacy_Subscription_Form.pdf",
      flyerFileName: "Urban_Legacy_Flyer.jpg",
    },
    {
      id: "kae1",
      title: "Kole Ayo Estate",
      location: "Lagos",
      description: "Located at Anobi London Road, Irangushi, Epe, Kole Ayo Estate comes with a Freehold title and immediate allocation. It’s near major landmarks like YabaTech Epe, LASUED, and St. Augustine University. Fenced, plotted, and ready for development—ideal for investors or homebuyers in a fast-growing area.",
      imageAlt: "Kole Ayo Estate",
      src: koleAyo,
      subscriptionFormUrl: "/downloads/KOLE-AYO_SUBS_FORM.pdf",
      flyerUrl: "/downloads/koleAyo.png",
      subscriptionFormFileName: "KOLE-AYO_Subscription_Form.pdf",
      flyerFileName: "KOLE-AYO_Flyer.png",
    },
    {
      id: "ep31",
      title: "Eastview Phase 3",
      location: "Delta",
      description: "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster.",
      imageAlt: "Eastview Phase 3",
      src: eastView,
      subscriptionFormUrl: "/downloads/EASTVIEW_SUBS_FORM.pdf",
      flyerUrl: "/downloads/eastView.pdf",
      subscriptionFormFileName: "Eastview_Subscription_Form.pdf",
      flyerFileName: "Eastview_Flyer.png",
    },
    {
      id: "al1",
      title: "Alaoma Luxury",
      location: "Imo",
      description: "Located in Ochicha, Obike, Ngor-Okpala, Alaoma Luxury Estate offers high ROI potential in a fast-developing area. Surrounded by key landmarks like Tony Chukwu Factory, Zion Ministry by Ebuka Obi, and Umueme Market Square, the estate is fenced, plotted, and comes with a Deed of Assignment and Registered Survey.",
      imageAlt: "Alaoma Luxury",
      src: alaomaLuxury,
      subscriptionFormUrl: "/downloads/ALAOMA _LUXURY_ESTATE_SUBS_FORM.pdf",
      flyerUrl: "/downloads/alaomaLuxury.png",
      subscriptionFormFileName: "ALAOMA _LUXURY_ESTATE_Subscription_Form.pdf",
      flyerFileName: "ALAOMA _LUXURY_ESTATE_Flyer.png",
    },
    {
      id: "oe1",
      title: "Obi-Eze",
      location: "Delta",
      description: "Located in Umueze Ibusa, Asaba, Obieze 2 is selling for ₦10M in a fast-developing, buy-and-build area along a major road. It’s just 18 minutes from Koka Flyover and close to key landmarks like FGGC Ibusa, General Hospital, and Ibusa Main Market.",
      imageAlt: "Obi-Eze",
      src: obiEze,
      subscriptionFormUrl: "/downloads/OBI-EZE_PHASE_2 SUBS_FORM.pdf",
      flyerUrl: "/downloads/obiEze.png",
      subscriptionFormFileName: "OBI-EZE_PHASE_Subscription_Form.pdf",
      flyerFileName: "OBI-EZE_PHASE_2_Flyer.png",
    },
    {
      id: "ecy1",
      title: "Elite City",
      location: "Delta",
      description: "Located in Idasa, Agbara, this estate comes with a Certificate of Occupancy (C of O) and sits in a high-demand, fast-growing area ideal for residential or commercial development.\n Surrounded by landmarks like Optic Estate, Lusada, Crown City Parks & Resorts, and Ijuri Catholic Church, the estate is fenced, plotted, and offers immediate allocation. With strong ROI potential, it’s perfect for investors with vision.",
      imageAlt: "Elite City",
      src: eliteCity,
      subscriptionFormUrl: "/downloads/ELITE_CITY_SUBS_FORM.pdf",
      flyerUrl: "/downloads/eliteCity.png",
      subscriptionFormFileName: "Elite_City_Subscription_Form.pdf",
      flyerFileName: "Elite_City_Flyer.png",
    },
    {
      id: "eca1",
      title: "Elite Casa",
      location: "Lagos",
      description: "Located in Idasa, Agbara, this estate comes with a Certificate of Occupancy (C of O) and sits in a high-demand, fast-growing area ideal for residential or commercial development.\n Surrounded by landmarks like Optic Estate, Lusada, Crown City Parks & Resorts, and Ijuri Catholic Church, the estate is fenced, plotted, and offers immediate allocation. With strong ROI potential, it’s perfect for investors with vision.",
      imageAlt: "Elite Casa",
      src: eliteCasa,
      subscriptionFormUrl: "/downloads/ELITE_CITY_SUBS_FORM.pdf",
      flyerUrl: "/downloads/eliteCasa.jpeg",
      subscriptionFormFileName: "Elite_Casa_Subscription_Form.pdf",
      flyerFileName: "Elite_Casa_Flyer.jpeg",
    },
    {
      id: "ee1",
      title: "Elite Empire",
      location: "Imo",
      description: "Elite Empire is strategically located in Avu-Oforola, a fast-growing area ideal for premium real estate investment. Surrounded by notable landmarks like Control Bus Stop, Avu Junction, Imo State Automobile Hub, and Deeper Life Camp Ground, it offers strong prospects for residential or commercial use.",
      imageAlt: "Elite Empire",
      src: eliteEmpire,
      subscriptionFormUrl: "/downloads/ELITE_EMPIRE _ESTATE _SUBS_FORM.pdf",
      flyerUrl: "/downloads/eliteEmpire.png",
      subscriptionFormFileName: "ELITE_EMPIRE _ESTATE_Subscription_Form.pdf",
      flyerFileName: "ELITE_EMPIRE _ESTATE_Flyer.png",
    },
    {
      id: "uge1",
      title: "Ugochi Estate",
      location: "Delta",
      description: "Located in Ogwashi within the Asaba capital territory, Greenview Estate is selling for ₦3.5M in a fast-developing, buy-and-build area with houses and hostels already rising nearby. It sits along a major road and is just 15–20 minutes from key junctions and Asaba International Airport.",
      imageAlt: "Ugochi Estate",
      src: ugochiEstate,
      subscriptionFormUrl: "/downloads/UGOCHI_PHASE_2_SUBS_FORM.pdf",
      flyerUrl: "/downloads/ugochiEstate.PNG",
      subscriptionFormFileName: "Ugochi_Estate_Subscription_Form.pdf",
      flyerFileName: "Ugochi_Estate_Flyer.jpeg",
    },
    {
      id: "aur1",
      title: "AKU RUO UNO",
      location: "Delta",
      description: "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster.",
      imageAlt: "AKU RUO UNO",
      src: akuRuo,
      subscriptionFormUrl: "/downloads/AKU_RUO_UNO_PHASE 2_SUBS_FORM.pdf",
      flyerUrl: "/downloads/akuRuo.png",
      subscriptionFormFileName: "Aku_Ruo_Uno_Subscription_Form.pdf",
      flyerFileName: "Aku_Ruo_Uno_Flyer.png",
    },
    {
      id: "ugb1",
      title: "Ugwumba Estate",
      location: "Abia",
      description: "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster.",
      imageAlt: "Ugwumba Estate",
      src: ugwumbaEstate,
      subscriptionFormUrl: "/downloads/UGWUMBA_SUBS_FORM.pdf",
      flyerUrl: "/downloads/ugwumbaEstate.jpeg",
      subscriptionFormFileName: "Ugwumba_Estate_Form.pdf",
      flyerFileName: "Ugwumba_Estate_Flyer.png",
    },
    {
      id: "ldc1 ",
      title: "Lavender Courts",
      location: "Anambra",
      description: "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster.",
      imageAlt: "Ugwumba Estate",
      src: lavenderCourts,
      subscriptionFormUrl: "/downloads/UGWUMBA_SUBS_FORM.pdf",
      flyerUrl: "/downloads/lavenderCourts.jpeg",
      subscriptionFormFileName: "Ugwumba_Estate_Form.pdf",
      flyerFileName: "Lavender_Courts_Flyer.jpeg",
    },
    {
      id: "eel2 ",
      title: "Elite Eastland Phase 2",
      location: "Imo",
      description: "PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster.",
      imageAlt: "Elite Eastland Phase 2",
      src: eliteEastland2,
      subscriptionFormUrl: "/downloads/ELITE_EASTLAND_PHASE_2_SUBS_FORM.pdf",
      flyerUrl: "/downloads/eliteEastland2.jpeg",
      subscriptionFormFileName: "Elite_Eastland_Phase_2_Subscription_Form.pdf",
      flyerFileName: "Elite_Eastland_Phase_2_Flyer.jpeg",
    },
  ];

  // Dynamically create a list of unique locations for the filter
  const uniqueLocations = ["All", ...new Set(lands.map(land => land.location))];

  const sellingFastTitles = [
    "Kole Ayo Estate",
    "Ugochi Estate",
    "Urban Legacy",
    "Elite Empire",
  ];
  const propertiesToDisplayFast = lands.filter(land => sellingFastTitles.includes(land.title));

  const filterLands = (category) => {
    if (category === "All") {
      return lands;
    }
    return lands.filter(land => land.location.toLowerCase() === category.toLowerCase());
  };

  useEffect(() => {
    // Initialize filteredLands with all lands on first render
    setFilteredLands(lands);
  }, []);

  const handleCategoryClick = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    // You might want to adjust this setTimeout duration or remove it if not simulating API calls
    setTimeout(() => {
      const filtered = filterLands(category);
      setFilteredLands(filtered);
      setIsLoading(false);
    }, 500); // Changed to 500ms for quicker feedback, adjust as needed
  };

  const LoadingSpinner = () => {
    return (
      <div className='flex flex-col gap-6 justify-center items-center py-12'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-red-700'></div>
        <p>Loading Properties..............</p>
      </div>
    );
  };

  const NoPropertiesMessage = () => {
    return (
      <div className='text-center py-12'>
        <p className='text-gray-600 text-lg'>
          This location has no properties to display currently
        </p>
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-cover bg-center text-white -mt-18 h-[42rem] flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${propsBg.src})`}}>
        <div className="absolute inset-0 h-[37.5rem] bg-black opacity-40"></div>
        <h1 className="relative text-6xl font-semibold">Our Properties</h1>
        <p className="relative max-w-xl mt-4">
          Exposing clients to goldmine that abounds in land and housing globally
          and spreading empowerment through real estate opportunities.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-6">
        {features.map((feature) => (
          <PropFeaturesCard key={feature.title} title={feature.title} style={feature.style} />
        ))}
      </div>

      {/* Properties Selling Fast Section */}
      <div className="bg-gray-100 flex flex-col md:flex-row justify-evenly p-6 gap-8">
        <div className="flex flex-col items-center justify-center text-center md:text-left">
          <span className='flex flex-row gap-2'><p className='text-red-600'>🔥</p>Properties</span>
          <h2 className="text-2xl font-bold">Properties Selling Fast</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-11">
          {propertiesToDisplayFast.map((property) => (
            <PropPropertiesCard
              key={property.id}
              id={property.id}
              title={property.title}
              location={property.location}
              description={property.description}
              src={property.src}
            />
          ))}
        </div>
      </div>

      {/* Our Lands Section */}
      <section>
        <div className="min-h-screen flex flex-col items-center pt-4 pb-24 mb-48">
          <div className="text-center">
            <span className="text-red-600">🔥 Properties</span>
            <h1 className="text-3xl font-bold">Our Lands</h1>
          </div>
          {/* Category Filter Buttons */}
          <div className="flex space-x-2 mt-4 p-3 rounded-lg bg-gray-100">
            {/* <<< CHANGED THIS MAPPING: Using uniqueLocations now >>> */}
            {uniqueLocations.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                disabled={isLoading}
                className={`rounded px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-white text-red-600 shadow-sm"
                    : "text-gray-600 hover:text-red-600 hover:-translate-y-0.5"
                }${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Filtered Lands Display */}
          <div className="mt-6 w-full max-w-5xl">
            {isLoading ? (
              <LoadingSpinner />
            ) : filteredLands.length > 0 ? (
              <div className="space-y-6">
                {filteredLands.map((land) => (
                  <PropLandCard
                    key={land.id}
                    id={land.id}
                    title={land.title}
                    description={land.description}
                    imageSrc={land.src}
                    imageAlt={land.imageAlt}
                    subscriptionFormUrl={land.subscriptionFormUrl}
                    flyerUrl={land.flyerUrl}
                    subscriptionFormFileName={land.subscriptionFormFileName}
                    flyerFileName={land.flyerFileName}
                  />
                ))}
              </div>
            ) : (
              <NoPropertiesMessage />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;