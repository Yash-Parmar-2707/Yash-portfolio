import "./globals.css";

export const metadata = {
  title: "Yash Parmar — Developer",
  description:
    "Portfolio of Yash Parmar, developer working with Flutter, the MERN stack, and AI-assisted development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
