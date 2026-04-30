import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TAG CLTHNG",
  description: "Built For Those Who Always Knew",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;700&display=swap" rel="stylesheet"/>
      </head>
      <body style={{margin:0,padding:0,background:"#0D0D0F"}}>
        {children}
      </body>
    </html>
  );
}
