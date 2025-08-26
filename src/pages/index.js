import { HomeBuildQuali } from "@/features/HomeBuildQuali";
import { HomeCardGrid } from "@/features/HomeCardGrid";
import  HomeCert  from "@/features/HomeCert";
import { HomeDiscover } from "@/features/HomeDiscover";
import { HomeHero } from "@/features/HomeHero";
import { HomeSub } from "@/features/HomeSub";
import { HomeValues } from "@/features/HomeValues";
import FadeIn from "@/features/FadeIn";

export default function Home() {
    const heroData = {
        title: "Exposing Clients to Goldmine.",
        description: "Exposing clients to goldmine that abounds in land and housing globally and spreading empowerment through real estate opportunities.",
        backgroundImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        // Add your video file to the public folder and update this path
        // Example: videoSrc: "/hero-video.mp4" (for a file in public/hero-video.mp4)
        // Example: videoSrc: "/videos/hero.mp4" (for a file in public/videos/hero.mp4)
        videoSrc: "/heroSectionVid.mp4", // Replace with your actual video filename
        ctaButton: {
            text: "Contact Us",
            href: "/contact" // <<< ADDED THIS LINE for the button to link to /contact
        }
    };

  const buildingData = {
    images: {
      main: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      overlay: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    title: "Building Quality Through Industrial Innovation",
    description: "PWAN ELITE is a real estate marketing, development and management company; a subsidiary of the PWAN (Property World Africa Network) Group, a company with a vision to make home ownership dreams reality.",
    features: [
      "Over 10 Years of Trusted Real Estate Service",
      "Fully Licensed, Certified CNC Registration & Legal Compliance",
      "Verified Land Titles & Documentation",
      "Qualified, Experienced Realtors",
      "Flexible Payment Plans"
    ],
    //buttonText: "Learn More",
    //href: "/AboutAgain"
  };

  const certificateData = {
    address: "OLUSHOSUN ROAD, LAGOS REGISTERED SURVEY",
    title: "Urban Legacy",
    subtitle: "",
    certificateImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    logoImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    description: "Omyan Built is passionate about creating urban communities and making the real estate industry in the world by providing cost-effective living arrangement to both middle income earners and the corporate and elites."
  };

  const discoverData = {
    title: "Discover Your Dream Space",
    subtitle: "Find homes by location, budget, and features that match your lifestyle, Curated homes you’ll love — hot, new, and exclusive.",
    description: "Curated homes you'll love – hot, new, and exclusive."
  };

  const cardsData = [
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Our Guarantee",
      description: "At PWAN Elite, we believe your investment journey should be secure, transparent, and rewarding. That’s why we offer more than just properties we deliver peace of mind. We guarantee that every property listed with us is thoroughly verified, legally documented, and free from encumbrance. From due diligence to final allocation, we walk with you every step of the way.",
      layout: "left"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80",
      layout: "right",
      textOverlay: true
    }
  ];

  const valuesData = {
    title: "Our Values",
    vision: "To make home ownership dream a reality.",
    mission: "To discover affordable lands everywhere, and make these known to you and also show you how you can make money to buy land and build your own home or how you can make money to buy your home.",
    coreValues: "We are ELITE, upholding excellence, loyalty, integrity, trust, and efficiency in all our dealings with clients.",
  };

  return (
      <div className="min-h-screen">
        <HomeHero {...heroData} />
        {/* Light contrast sentinel after hero to switch navbar to dark text */}
        <div data-nav-contrast="light" className="h-1" aria-hidden="true"></div>
        <FadeIn y={24}><HomeBuildQuali {...buildingData} /></FadeIn>
        <FadeIn y={24} delayMs={100}><HomeCert/></FadeIn>
        <FadeIn y={24} delayMs={200}><HomeDiscover {...discoverData}/></FadeIn>
        <FadeIn y={24} delayMs={300}><HomeCardGrid cards={cardsData}/></FadeIn>
        <FadeIn y={24} delayMs={400}><HomeValues {...valuesData}/></FadeIn>
        <FadeIn y={24} delayMs={500}><HomeSub /></FadeIn>
    </div>
  );
}
