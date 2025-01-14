import { useState, useEffect, useRef } from "react";

function About() {
  const [moveDown, setMoveDown] = useState(false);
  const componentRef = useRef(null);
  const debounceTimeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Clear previous timeout if it exists
        if (debounceTimeoutRef.current) {
          clearTimeout(debounceTimeoutRef.current);
        }
        // Set new timeout to debounce setting the moveDown state
        debounceTimeoutRef.current = setTimeout(() => {
          setMoveDown(entry.intersectionRatio >= 0.2);
        }, 500);
      },
      {
        threshold: [0.2],
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
      // Cleanup the timeout when component unmounts or observer is removed
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      id="about-section"
      ref={componentRef}
      className={`relative w-full h-auto text-[#FFF8DC] font-roboto transition-transform duration-750 ease-linear ${
        moveDown ? "translate-y-[120px]" : "translate-y-[-60px]"
      }`}
    >
      {/* Main Container with Border and Border-Radius */}
      <div
        className="relative w-[90%] md:w-[80%] xl:w-[71.15%] h-auto mx-auto rounded-[16px] md:rounded-[40px] p-2 flex flex-col justify-between m-28 z-10"
        style={{ backgroundColor: "rgba(255, 248, 220, 0.8)" }}
      >
        {/* Tab on the top-left side */}
        <div
          className="absolute top-[-60px] lg:top-[-70px] left-0 w-[70%] md:w-[45%] h-[120px] md:h-[215px] rounded-[40px] tab-shape z-0 hidden md:block"
          style={{ backgroundColor: "rgba(255, 248, 220, 0.8)" }}
        >
          <span className="flex items-start justify-start h-full md:text-black font-microExtendFLF custom-h1 lg:px-6 py-6 hidden md:flex">
            01 /// ABOUT
          </span>
        </div>

        {/* Star Image at Bottom-Right */}
        <img
          src="/assets/images/About/star.svg"
          alt="Star"
          className="absolute hidden md:block md:bottom-[-70px] right-0 md:right-[-80px] w-[100px] md:w-[198px] h-[100px] md:h-[195px] z-10"
        />

        {/* Main Content */}
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between md:space-x-2 z-10">
          {/* Row 1 Column 1: Text */}
          <div
            className="bg-black w-full md:w-[56.58%] h-[185px] md:h-[329px] bt-1920:h-[398px] rounded-[16px] md:rounded-[40px] p-2 md:pl-14"
            style={{
              backgroundColor: "black",
              backgroundImage: 'url("/assets/images/About/R1C1.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-[#FFF8DC] text-[16px] md:text-[24px] bt-1920:text-[30px] font-roboto font-semibold flex items-center justify-center h-full text-left">
              JungoAI is a public blockchain network that utilizes Federated AI
              and Big Data to forge a collaborative knowledge ecosystem.
            </h2>
          </div>

          {/* Row 1 Column 2: Shape Image */}
          <div
            className="bg-black w-full md:w-[42.61%] md:h-[329px] bt-1920:h-[398px] rounded-[16px] md:rounded-[40px] p-2 md:p-4 flex items-center justify-center"
            style={{
              backgroundColor: "black",
              backgroundImage: 'url("/assets/images/About/R1C2.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src="/assets/images/About/shape.svg"
              alt="Shape"
              className="w-[60%] h-auto"
            />
          </div>
        </div>

        {/* Second Row: Another Text Block */}
        <div
          className="mt-2 bg-black w-full h-[336px] md:h-[275px] bt-1920:h-[334px] rounded-[16px] md:rounded-[40px] p-4 md:p-[72px] flex flex-col justify-center text-left"
          style={{
            backgroundColor: "black",
            backgroundImage: 'url("/assets/images/About/R2C.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-[16px] md:text-[24px] bt-1920:text-[26px] leading-relaxed font-roboto text-[#FFF8DC]">
            JungoAI is a collaborative and decentralized blockchain that
            utilizes Federated AI and distributed Big Data to create a public
            and collaborative knowledge ecosystem.
          </p>
          <p className="text-[16px] md:text-[24px]  bt-1920:text-[26px] leading-relaxed font-roboto text-[#FFF8DC] mt-2 md:mt-4 text-left">
            The network's nodes work in unison to deliver Big Data and AI
            solutions, and they mint a token reflective of their contributions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
