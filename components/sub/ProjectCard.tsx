import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface Props {
    src: string;
    title: string;
    description: string;
    tags: string[];
    github: string;
    type: string;
}

const ProjectCard = ({ src, title, description, tags, github, type }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col">
            <div className="relative">
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="w-full object-contain"
                />
                <span className="absolute top-3 right-3 text-[11px] font-semibold px-3 py-1 rounded-full bg-[#7042f8] text-white opacity-90">
                    {type}
                </span>
            </div>

            <div className="relative p-4 flex flex-col gap-3 flex-1">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

                <div className="flex flex-wrap gap-2 mt-1">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-[11px] px-2 py-1 rounded-full border border-[#7042f88b] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium"
                            style={{ WebkitTextFillColor: "transparent" }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors pt-2"
                >
                    <FaGithub className="w-5 h-5" />
                    <span>View on GitHub</span>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;