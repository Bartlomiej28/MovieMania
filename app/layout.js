import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "MovieMania",
  description: "Watch movies from everywhre around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="background">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
