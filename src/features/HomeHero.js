import React from "react";
import Link from 'next/link'; // <<< Import Link from next/link
import { homeBg } from "./assets";
import FadeIn from "@/features/FadeIn";

const ArrowRightUpIcon = ({ className }) => (
  <svg
    data-slot="icon"
    fill="none"
    strokeWidth="1.5"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true" // Indicate to screen readers that this is decorative
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
  </svg>
);

export const HomeHero = ({ title, subtitle, description, ctaButton, videoSrc }) => (
  // Added 'relative' to the parent div so the absolute overlay is positioned correctly
  <div className="h-[46rem] -mt-18 relative overflow-hidden">
    {/* Dark contrast sentinel for navbar over hero */}
    <div data-nav-contrast="dark" className="absolute top-0 inset-x-0 h-1 pointer-events-none" aria-hidden="true"></div>

    {/* Video Background */}
    {videoSrc && (
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={homeBg.src} // Fallback image while video loads
        onError={(e) => {
          console.log("Video failed to load, falling back to background image");
          e.target.style.display = 'none';
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback text for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
    )}
    
    {/* Fallback Background Image - shows if no video or video fails to load */}
    {!videoSrc && (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${homeBg.src})` }}
        aria-hidden="true"
      ></div>
    )}

    {/* Overlay: Changed height to 'inset-0' to cover the whole parent,
        and increased opacity to 'opacity-60' for better contrast.
        Adjust opacity-60 to opacity-50 or opacity-70 if you want it lighter/darker. */}
    <div
      className="absolute inset-0 bg-black opacity-60"
      aria-hidden="true"
    ></div>

    <div className="relative flex items-center h-full">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl text-white relative z-10">
          <FadeIn>
            <h1 className="text-7xl md:text-6xl font-semibold mb-6 leading-tight">
              {title}
            </h1>
          </FadeIn>
          {description && (
            <FadeIn delayMs={100}>
              <p className="text-lg mb-8">{description}</p>
            </FadeIn>
          )}

          {/* Conditional rendering: Only show the button if ctaButton and its href exist */}
          {ctaButton && ctaButton.href && (
            // <<< Changed from <button> to <Link> for navigation >>>
            <FadeIn delayMs={200}>
              <Link href={ctaButton.href} legacyBehavior>
                <a className="bg-white hover:bg-red-700 text-black px-3 py-3 rounded-lg text-lg font-semibold inline-flex items-center">
                  {ctaButton.text}
                  <span className="ml-3 bg-red-600 p-2 rounded-full flex items-center justify-center transition duration-300 ease-in-out">
                    <ArrowRightUpIcon className="w-5 h-5 text-white" />
                  </span>
                </a>
              </Link>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  </div>
);