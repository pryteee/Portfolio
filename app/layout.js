// import './globals.css';

// export const metadata = {
//   title: 'Your Name - Portfolio',
//   description: 'My awesome portfolio',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }


import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
