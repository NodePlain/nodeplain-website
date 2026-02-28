export const metadata = {
  title: "Client Portal — NodePlain",
  robots: "noindex, nofollow",
};

export default function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Standalone layout — no Navbar/Footer wrapping
  return <>{children}</>;
}
