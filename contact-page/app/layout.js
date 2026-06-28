import "./globals.css";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
