import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const spaceMono = localFont({
    src: "./fonts/SpaceMono-Regular.ttf",
    variable: "--font-space-mono",
    weight: "100 900",
})

export const metadata = {
    title: "Derrick Korir",
    description: "Portfolio Website",
};

import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable}  ${spaceMono.variable} antialiased`}
            >
                <Navbar />
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
