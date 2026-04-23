import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import PopularDestinations from "@/components/PopularDestinations";
import FeaturedTours from "@/components/FeaturedTours";
import TopRatedHotels from "@/components/TopRatedHotels";
import AppDownload from "@/components/AppDownload";
import PaymentPartners from "@/components/PaymentPartners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <PopularDestinations />
      <FeaturedTours />
      <TopRatedHotels />
      <AppDownload />
      <PaymentPartners />
      <Footer />
    </main>
  );
}
