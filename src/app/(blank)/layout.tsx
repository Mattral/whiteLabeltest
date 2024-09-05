import { ClerkProvider } from "@clerk/nextjs";

// ================================|| BLANK LAYOUT ||================================ //

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><ClerkProvider>{children}</ClerkProvider></>;
}
