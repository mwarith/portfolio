import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Mohamed Warith — Software Engineer",
    description:
        "Portfolio of Mohamed Warith, a Software Engineer and Computer Science graduate focused on backend development, problem solving, and systems.",
    keywords: [
        "Mohamed Warith",
        "Software Engineer",
        "Backend Developer",
        "C++",
        "Python",
        "JavaScript",
        "ASP.NET Core",
        "Express.js",
        "FastAPI",
        "ACPC",
        "ECPC",
    ],
    authors: [
        {
            name: "Mohamed Warith",
        },
    ],
    openGraph: {
        title: "Mohamed Warith — Software Engineer",
        description:
            "Software Engineer focused on backend development, problem solving, and systems.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}