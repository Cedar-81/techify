import "./globals.css";
import Nav from "./Components/nav";
import Bottomnav from "./Components/bottomnav";

export const metadata = {
  title: "Techify",
  description: "Find and book tech events in a giffy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="2xl:max-w-6xl 2xl:mx-auto">
        <Nav />
        {children}
        <Bottomnav />
      </body>
    </html>
  );
}
