"use client";

import { Skill_data } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
    // Dividir en 3 filas
    const row1 = Skill_data.slice(0, 8);
    const row2 = Skill_data.slice(8, 15);
    const row3 = Skill_data.slice(15);

    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-fit relative overflow-hidden py-20"
        >
            <SkillText />

            <div className="flex flex-col items-center justify-center w-full gap-8 px-4">

                <div className="flex flex-row flex-wrap justify-center gap-6 items-center">
                    {row1.map((skill, index) => (
                        <SkillDataProvider
                            key={index}
                            src={skill.Image}
                            width={skill.width}
                            height={skill.height}
                            index={index}
                        />
                    ))}
                </div>

                <div className="flex flex-row flex-wrap justify-center gap-6 items-center">
                    {row2.map((skill, index) => (
                        <SkillDataProvider
                            key={index}
                            src={skill.Image}
                            width={skill.width}
                            height={skill.height}
                            index={index}
                        />
                    ))}
                </div>

                <div className="flex flex-row flex-wrap justify-center gap-6 items-center">
                    {row3.map((skill, index) => (
                        <SkillDataProvider
                            key={index}
                            src={skill.Image}
                            width={skill.width}
                            height={skill.height}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            {/* Video de fondo */}
            <div className="w-full h-full absolute top-0">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;