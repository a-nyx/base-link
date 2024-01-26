import type { Metadata } from "next";
import "./globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      style={{
        overflow: "hidden",
        height: "100%",
      }}>
      <body
        style={{
          overflow: "auto",
          height: "100%",
        }}>
        {children}
      </body>
    </html>
  );
};

export default Layout;

export const metadata: Metadata = {
  title: "Base Link",
  description: "Your link universe.",
};
