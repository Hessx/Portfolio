import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Porfotlio - Vitor Hesse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfitFont.className} ${ovo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
