import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

export const metadata = {
  title: "Converse com o Meta Llama 3.1 no Replicate",
  openGraph: {
    title: "Converse com o Meta Llama 3.1 no Replicate",
    description: "O Llama 3.1 é o mais recente modelo de linguagem da Meta.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Converse com o Meta Llama 3.1 no Replicate</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦙</text></svg>"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
