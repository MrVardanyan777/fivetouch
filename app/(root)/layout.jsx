import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({ children }) {
  return (
    <section className="flex h-screen flex-col bg-main-pattern bg-cover">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
}
