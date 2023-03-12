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
      <body>
        <Nav />
        {children}
        <Bottomnav />
      </body>
    </html>
  );
}
