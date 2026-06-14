import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative h-full w-full" id="home">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute md:top-[-240px] lg:top-[-335px] top-[-400px] left-0 z-[0] w-full h-full object-cover opacity-70"
                style={{ transform: "rotate(180deg)" }}
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
        </div>
    );
};

export default Hero;
