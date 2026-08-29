"use client";

import { useState } from "react";
import {
    ArrowDown,
    ArrowUpRight,
    Code2,
    Github,
    GraduationCap,
    Linkedin,
    Mail,
    Menu,
    Server,
    Terminal,
    Trophy,
    Users,
    X,
} from "lucide-react";

const projects = [
    {
        number: "01",
        title: "MeetVerse",
        subtitle: "Graduation Project · Real-time meetings & AI",
        description:
            "A real-time meeting platform built around low-latency audio and video communication, real-time speech-to-text, and custom machine-learning noise cancellation.",
        technologies: [
            "ASP.NET Core",
            "FastAPI",
            "WebRTC",
            "LiveKit",
            "Python",
            "Deepgram",
            "SQL Server",
        ],
        featured: true,
    },
    {
        number: "02",
        title: "Tiny Language Compiler",
        subtitle: "Compiler from scratch",
        description:
            "A custom compiler for the Tiny programming language, implementing structural production rules, lexical analysis, parsing, AST construction, semantic analysis, and execution.",
        technologies: [
            "C++",
            "Formal Grammars",
            "Lexer",
            "Parser",
            "AST",
        ],
    },
    {
        number: "03",
        title: "Courses API",
        subtitle: "RESTful backend",
        description:
            "A RESTful API supporting full CRUD operations with role-based access, structured endpoints, request validation, custom middleware, clean architecture, and proper HTTP status handling.",
        technologies: [
            "Express.js",
            "MongoDB",
            "REST API",
            "RBAC",
            "Clean Architecture",
        ],
    },
    {
        number: "04",
        title: "PS Tracker",
        subtitle: "Competitive programming tool",
        description:
            "A web application for tracking problems, solutions, and statistics for competitive programmers.",
        technologies: ["PHP", "MySQL", "HTML", "CSS"],
    },
];

const skills = [
    {
        title: "Languages",
        items: ["C++", "Python", "JavaScript", "SQL", "PHP", "Java"],
    },
    {
        title: "Backend",
        items: ["Express.js", "ASP.NET Core", "FastAPI", "REST APIs"],
    },
    {
        title: "Databases",
        items: ["SQL Server", "MongoDB", "MySQL"],
    },
    {
        title: "Core Concepts",
        items: [
            "Algorithms",
            "Data Structures",
            "OOP",
            "Database Design",
            "Problem Solving",
        ],
    },
    {
        title: "Tools",
        items: ["Git", "GitHub"],
    },
];

const acpcResults = [
    ["2023", "56th place"],
    ["2024", "67th place"],
    ["2025", "77th place"],
];

const ecpcResults = [
    ["2023", "72nd place"],
    ["2024", "33rd place"],
    ["2025", "53rd place"],
    ["2026", "Finals Coach"],
];

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setMenuOpen(false);
    };

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#08090b] text-[#f4f4f0] selection:bg-white selection:text-black">
            {/* Background */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/2 top-[-300px] h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Navigation */}
            <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-[#08090b]/80 backdrop-blur-xl">
                <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
                    <button
                        onClick={() => scrollTo("home")}
                        className="font-mono text-sm font-bold tracking-tight"
                    >
                        MW<span className="text-white/30">.</span>
                    </button>

                    <div className="hidden items-center gap-8 md:flex">
                        <NavButton label="About" onClick={() => scrollTo("about")} />
                        <NavButton
                            label="Projects"
                            onClick={() => scrollTo("projects")}
                        />
                        <NavButton
                            label="Achievements"
                            onClick={() => scrollTo("achievements")}
                        />
                        <NavButton
                            label="Contact"
                            onClick={() => scrollTo("contact")}
                        />
                    </div>

                    <a
                        href="/Mohamed_Warith_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-white/40 hover:bg-white hover:text-black md:block"
                    >
                        Resume
                    </a>

                    <button
                        onClick={() => setMenuOpen((value) => !value)}
                        className="text-white/70 md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>

                {menuOpen && (
                    <div className="border-t border-white/[0.07] bg-[#08090b] px-6 py-5 md:hidden">
                        <MobileNavButton
                            label="About"
                            onClick={() => scrollTo("about")}
                        />
                        <MobileNavButton
                            label="Projects"
                            onClick={() => scrollTo("projects")}
                        />
                        <MobileNavButton
                            label="Achievements"
                            onClick={() => scrollTo("achievements")}
                        />
                        <MobileNavButton
                            label="Contact"
                            onClick={() => scrollTo("contact")}
                        />

                        <a
                            href="/Mohamed_Warith_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 block border-t border-white/[0.07] pt-4 text-sm text-white/60"
                        >
                            Download Resume
                        </a>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section
                id="home"
                className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10"
            >
                <div className="w-full">
                    <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                        <span className="h-px w-8 bg-white/30" />
                        Software Engineer
                    </div>

                    <h1 className="max-w-6xl text-[clamp(4rem,12vw,10rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
                        Mohamed
                        <br />
                        <span className="text-white/[0.22]">Warith.</span>
                    </h1>

                    <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div>
                            <p className="max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
                                Computer Science graduate who enjoys building software,
                                solving hard problems, and understanding how systems work
                                underneath the abstraction.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <button
                                    onClick={() => scrollTo("projects")}
                                    className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                                >
                                    View projects
                                    <ArrowDown
                                        size={16}
                                        className="transition-transform group-hover:translate-y-1"
                                    />
                                </button>

                                <a
                                    href="https://github.com/mwarith"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
                                >
                                    <Github size={16} />
                                    GitHub
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-10 border-l border-white/10 pl-8 lg:pb-2">
                            <div>
                                <p className="font-mono text-4xl tracking-tight">3×</p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-white/35">
                                    ACPC Finalist
                                </p>
                            </div>

                            <div>
                                <p className="font-mono text-4xl tracking-tight">3.77</p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-white/35">
                                    GPA / 4.0
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 flex items-center gap-3 text-xs text-white/25">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                        Cairo, Egypt
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="border-t border-white/[0.07]">
                <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
                    <SectionHeader
                        number="01"
                        title="About"
                        description="A little about how I approach software."
                    />

                    <div className="mt-20 grid gap-16 lg:grid-cols-2">
                        <div>
                            <p className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                                Strong fundamentals first.
                                <br />
                                <span className="text-white/25">Tools come second.</span>
                            </p>
                        </div>

                        <div className="space-y-6 text-base leading-8 text-white/50">
                            <p>
                                I&apos;m a Computer Science graduate from Benha University with
                                a strong foundation in algorithms, data structures, OOP,
                                databases, and problem solving.
                            </p>

                            <p>
                                My projects range from backend APIs and database-driven
                                applications to real-time communication systems, compilers,
                                and machine-learning experiments.
                            </p>

                            <p>
                                Competitive programming has shaped the way I approach
                                engineering: understand the problem, consider edge cases,
                                build a solution, and test it properly.
                            </p>
                        </div>
                    </div>

                    <div className="mt-24 grid border-l border-t border-white/[0.07] md:grid-cols-3">
                        <InfoCard
                            icon={<Server size={22} />}
                            title="Backend"
                            text="APIs, services, databases, architecture"
                        />

                        <InfoCard
                            icon={<Terminal size={22} />}
                            title="Problem Solving"
                            text="Algorithms, data structures, optimization"
                        />

                        <InfoCard
                            icon={<Code2 size={22} />}
                            title="Systems"
                            text="Compilers, real-time apps, ML experiments"
                        />
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="border-t border-white/[0.07]">
                <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
                    <SectionHeader
                        number="02"
                        title="Projects"
                        description="Things I&apos;ve built and worked on."
                    />

                    <div className="mt-20 space-y-5">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="border-t border-white/[0.07]">
                <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
                    <SectionHeader
                        number="03"
                        title="Education"
                        description="Where I built the foundation."
                    />

                    <div className="mt-16 flex flex-col gap-8 rounded-2xl border border-white/[0.08] p-7 md:flex-row md:items-center md:justify-between md:p-10">
                        <div className="flex gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10">
                                <GraduationCap size={22} className="text-white/60" />
                            </div>

                            <div>
                                <h3 className="text-xl font-medium">
                                    Bachelor in Computer Science
                                </h3>

                                <p className="mt-1 text-white/40">
                                    Faculty of Computer and Artificial Intelligence
                                </p>

                                <p className="text-white/40">Benha University</p>
                            </div>
                        </div>

                        <div className="md:text-right">
                            <p className="font-mono text-sm text-white/40">
                                SEP 2022 — JUN 2026
                            </p>

                            <p className="mt-2 text-lg">
                                GPA <span className="font-mono">3.77/4.0</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section
                id="achievements"
                className="border-t border-white/[0.07]"
            >
                <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
                    <SectionHeader
                        number="04"
                        title="Problem Solving"
                        description="Competitive programming and community work."
                    />

                    <div className="mt-20 grid gap-6 lg:grid-cols-2">
                        <CompetitionCard
                            title="ACPC"
                            subtitle="Arab & African Collegiate Programming Contest"
                            rows={acpcResults}
                        />

                        <CompetitionCard
                            title="ECPC"
                            subtitle="Egyptian Collegiate Programming Contest"
                            rows={ecpcResults}
                        />
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/[0.08] p-8 md:p-10">
                        <div className="flex items-start gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10">
                                <Users size={21} className="text-white/60" />
                            </div>

                            <div>
                                <h3 className="text-xl font-medium">
                                    ICPC Benha Community
                                </h3>

                                <p className="mt-3 max-w-2xl leading-7 text-white/45">
                                    Mentored trainees in algorithms, data structures, and
                                    problem solving. Also contributed as a tester and judge for
                                    ECPC Qualifications and regional contests including MCPC
                                    2025 and PCPC 2025.
                                </p>

                                <p className="mt-5 font-mono text-xs text-white/30">
                                    JUL 2024 — AUG 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="border-t border-white/[0.07]">
                <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
                    <SectionHeader
                        number="05"
                        title="Stack"
                        description="Technologies and concepts I work with."
                    />

                    <div className="mt-16 grid border-l border-t border-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
                        {skills.map((skill) => (
                            <div
                                key={skill.title}
                                className="border-b border-r border-white/[0.07] p-7 md:p-9"
                            >
                                <p className="mb-7 font-mono text-xs uppercase tracking-[0.2em] text-white/30">
                                    {skill.title}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60 transition hover:border-white/25 hover:text-white"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="border-t border-white/[0.07]">
                <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
                    <div className="max-w-5xl">
                        <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-white/30">
                            06 / Contact
                        </p>

                        <h2 className="text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                            Let&apos;s build
                            <br />
                            <span className="text-white/[0.22]">something.</span>
                        </h2>

                        <div className="mt-12 flex flex-wrap gap-3">
                            <a
                                href="mailto:dev.mohamedwarith@gmail.com"
                                className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                            >
                                <Mail size={16} />
                                Email me
                            </a>

                            <a
                                href="https://www.linkedin.com/in/mwarith"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
                            >
                                <Linkedin size={16} />
                                LinkedIn
                                <ArrowUpRight size={15} />
                            </a>

                            <a
                                href="https://github.com/mwarith"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
                            >
                                <Github size={16} />
                                GitHub
                                <ArrowUpRight size={15} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/[0.07]">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between lg:px-10">
                    <span className="font-mono">MW.</span>
                    <span>© {new Date().getFullYear()} Mohamed Warith</span>
                </div>
            </footer>
        </main>
    );
}

function NavButton({
    label,
    onClick,
}: {
    label: string;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="text-sm text-white/50 transition hover:text-white"
        >
            {label}
        </button>
    );
}

function MobileNavButton({
    label,
    onClick,
}: {
    label: string;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="block w-full py-3 text-left text-sm text-white/60"
        >
            {label}
        </button>
    );
}

function SectionHeader({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
                <p className="mb-3 font-mono text-xs text-white/25">{number}</p>

                <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                    {title}
                </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-white/35">
                {description}
            </p>
        </div>
    );
}

function InfoCard({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div className="border-b border-r border-white/[0.07] p-8 last:border-r-0 md:border-b-0">
            <div className="mb-7 text-white/50">{icon}</div>

            <h3 className="text-lg font-medium">{title}</h3>

            <p className="mt-2 text-sm leading-6 text-white/35">{text}</p>
        </div>
    );
}

function ProjectCard({
    project,
}: {
    project: (typeof projects)[number];
}) {
    return (
        <article
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] transition duration-500 hover:border-white/20 ${project.featured ? "bg-white/[0.035]" : ""
                }`}
        >
            {project.featured && (
                <div className="absolute right-6 top-6 rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/40">
                    Featured
                </div>
            )}

            <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[100px_1fr_auto]">
                <span className="font-mono text-sm text-white/20">
                    {project.number}
                </span>

                <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-white/30">
                        {project.subtitle}
                    </p>

                    <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                        {project.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
                        {project.description}
                    </p>

                    <div className="mt-7 flex max-w-3xl flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] text-white/40"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:block">
                    <ArrowUpRight
                        size={24}
                        className="text-white/20 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/70"
                    />
                </div>
            </div>
        </article>
    );
}

function CompetitionCard({
    title,
    subtitle,
    rows,
}: {
    title: string;
    subtitle: string;
    rows: string[][];
}) {
    return (
        <div className="rounded-2xl border border-white/[0.08] p-7 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10">
                <Trophy size={21} className="text-white/60" />
            </div>

            <h3 className="mt-7 text-3xl font-medium">{title}</h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/35">
                {subtitle}
            </p>

            <div className="mt-10">
                {rows.map(([year, result]) => (
                    <div
                        key={year}
                        className="flex items-center justify-between border-t border-white/[0.07] py-4"
                    >
                        <span className="font-mono text-sm text-white/30">
                            {year}
                        </span>

                        <span className="font-mono text-sm">{result}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}