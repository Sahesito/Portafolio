import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/Horizon.png"
                    title="Horizon"
                    description="Full-stack banking app built with Next.js 16. Connect multiple bank accounts, view real-time transactions, and transfer funds securely using Plaid, Dwolla & Appwrite."
                    tags={["Next.js", "TypeScript", "Plaid", "Appwrite"]}
                    github="https://github.com/Sahesito/Horizon"
                    type="Web App"
                />
                <ProjectCard
                    src="/Itera.png"
                    title="Itera"
                    description="Native Android productivity app for students. Manage subjects, tasks, attendance and grades with reminders, built with Kotlin, Jetpack Compose & Clean Architecture."
                    tags={["Kotlin", "Jetpack Compose", "Room", "MVVM"]}
                    github="https://github.com/Sahesito/Itera"
                    type="Android App"
                />
                <ProjectCard
                    src="/Zenqor.png"
                    title="Zenqor"
                    description="Sales intelligence platform with admin dashboard, product catalog, real-time analytics and multi-role auth. Built with Next.js 15, Zustand & TanStack Query."
                    tags={["Next.js", "TypeScript", "Zustand", "Recharts"]}
                    github="https://github.com/Sahesito/Zenqor-Frontend"
                    type="Web App"
                />
            </div>
        </div>
    );
};

export default Projects;