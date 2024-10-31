import { pirata } from "../public/fonts";
import "./globals.css";



export const metadata = {
  title: "Angus Treats",
  description: "At Angus Treats, every dish is crafted with care, and every flavor tells a story.",
  icons : {
    icon : ['/favicon.ico?v=4'],
    apple : ['/apple-touch-icon.png?=v4'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pirata} font-rambla`}
      >
        {children}
      </body>
    </html>
  );
}
