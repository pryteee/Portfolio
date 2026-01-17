import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: '#0f0f0f' }}>
      <body className="min-h-screen flex flex-col bg-black text-white" style={{ backgroundColor: '#0f0f0f' }}>
        {children}
      </body>
    </html>
  );
}
