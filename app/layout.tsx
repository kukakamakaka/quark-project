import type { Metadata, Viewport } from "next"; // Viewport қосылды
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["400", "500", "600", "700", "900"],
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "600"],
    display: "swap",
});

export const viewport: Viewport = {
    themeColor: "#020202",
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: "Quark — AI Intelligence Layer",
    description: "Building the decentralized intelligence layer for the future of Web3 and AI ecosystem.",
    keywords: ["AI", "Blockchain", "Decentralized", "Web3", "Quark"],
    authors: [{ name: "Quark Foundation" }],
    openGraph: {
        title: "Quark — AI Intelligence Layer",
        description: "Building the decentralized intelligence layer for the future.",
        url: "https://quark-project-nb5f.vercel.app/",
        siteName: "Quark Ecosystem",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Quark AI Ecosystem Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Quark — AI Intelligence Layer",
        description: "Decentralized intelligence layer for the future.",
        images: ["/og-image.png"],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
        <body className="antialiased bg-[#020202] text-white selection:bg-[#FF3BFF]/30 overflow-x-hidden">
        <main className="min-h-screen flex flex-col relative">
            {children}
        </main>
        </body>
        </html>
    );
}
