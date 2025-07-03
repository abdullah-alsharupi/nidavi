import React from "react";
import { useRef, useEffect, useState } from "react";

const Customers = () => {
  const customerLogos = [
    "/blakclogos/armoringsolutionsblack.png",
    "/blakclogos/arslantiefbaublacklogo.png",
    "/blakclogos/aybasblacklogo.png",
    "/blakclogos/datyconblacklogo.png",
    "/blakclogos/helleniccleanblacklogo.png",
    "/blakclogos/schwarzhochtiefbaublack.png",
    "/blakclogos/sdhbaulogo.png",
    "/blakclogos/yükselbauverputzblacklogo.png",
  ];

  const logosContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const container = logosContainerRef.current;
    if (!container) return;

    if (isMobile) {
      // Horizontal scrolling animation for mobile
      const scrollWidth = container.scrollWidth;
      const duration = 20000; // 20 seconds for full scroll
      const logoWidth = container.firstChild?.offsetWidth || 0;

      let startTime = null;
      let requestId;

      const animateScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          container.scrollLeft = progress * (scrollWidth / 2);
          requestId = requestAnimationFrame(animateScroll);
        } else {
          container.scrollLeft = 0;
          startTime = null;
          requestId = requestAnimationFrame(animateScroll);
        }
      };

      requestId = requestAnimationFrame(animateScroll);

      return () => {
        cancelAnimationFrame(requestId);
      };
    } else {
      // Vertical scrolling animation for desktop
      const scrollHeight = container.scrollHeight;
      const duration = 20000; // 20 seconds for full scroll

      let startTime = null;
      let requestId;

      const animateScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          container.scrollTop = progress * (scrollHeight / 2);
          requestId = requestAnimationFrame(animateScroll);
        } else {
          container.scrollTop = 0;
          startTime = null;
          requestId = requestAnimationFrame(animateScroll);
        }
      };

      requestId = requestAnimationFrame(animateScroll);

      const handleHover = () => {
        cancelAnimationFrame(requestId);
      };

      const handleHoverEnd = () => {
        startTime = null;
        requestId = requestAnimationFrame(animateScroll);
      };

      container.addEventListener("mouseenter", handleHover);
      container.addEventListener("mouseleave", handleHoverEnd);

      return () => {
        cancelAnimationFrame(requestId);
        container.removeEventListener("mouseenter", handleHover);
        container.removeEventListener("mouseleave", handleHoverEnd);
      };
    }
  }, [isMobile]);

  return (
    <div className="bg-yellow-400 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Mobile: Logos first */}
        {isMobile && (
          <div className="lg:w-1/2 w-full h-40 mb-8 overflow-hidden relative">
            <div
              ref={logosContainerRef}
              className="h-full overflow-x-auto scrollbar-hide flex space-x-8 py-4"
            >
              {customerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-full flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Customer logo ${index + 1}`}
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
              {customerLogos.map((logo, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-shrink-0 w-48 h-full flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Customer logo ${index + 1}`}
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left side - Text content */}
          <div className={`${isMobile ? "w-full" : "lg:w-1/2"}`}>
            <h1
              className={`italic text-3xl sm:text-4xl  font-bold text-gray-900 mb-8 ${
                isMobile ? "text-center" : ""
              }`}
            >
              Zielgruppe
            </h1>

            <div className="space-y-6">
              <h2
                className={`italic text-xl sm:text-2xl font-semibold  text-gray-800 ${
                  isMobile ? "text-center" : ""
                }`}
              >
                Unsere Kunden
              </h2>

              <p
                className={`text-base sm:text-lg text-black leading-relaxed ${
                  isMobile ? "text-center" : ""
                }`}
              >
                Bei NIDAVI ist jeder willkommen - ob Handwerksbetrieb, kleines
                Unternehmen, Verein oder Organisation. Unser Herz schlägt
                besonders für KMU und das Handwerk, denn wir wissen, worauf es
                im Alltag wirklich ankommt. Gleichzeitig gestalten wir auch
                gerne reduzierte, wirkungsvolle Designs für gemeinnützige
                Projekte oder Vereine. Was uns wichtig ist: Dass du dich
                verstanden fühlst - und mit dem Ergebnis rundum zufrieden bist.
              </p>

              
<div className={`flex-1 justify-center ${isMobile? 'text-center':''}`}>
   <button className="text-lg sm:text-xl font-medium text-white bg-black p-1 items-center">
                Kunden entdecken
              </button>
</div>
             
            </div>
          </div>

          {/* Desktop: Logos on the right */}
          {!isMobile && (
            <div className="lg:w-1/2 w-full h-[500px] overflow-hidden relative">
              <div
                ref={logosContainerRef}
                className="h-full overflow-y-auto scrollbar-hide space-y-8 py-4"
              >
                {customerLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center h-24"
                  >
                    <img
                      src={logo}
                      alt={`Customer logo ${index + 1}`}
                      className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {customerLogos.map((logo, index) => (
                  <div
                    key={`dup-${index}`}
                    className="flex justify-center items-center h-24"
                  >
                    <img
                      src={logo}
                      alt={`Customer logo ${index + 1}`}
                      className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Customers;
