import Footer from "@/components/footer/Footer";
import LandingSection from "@/components/home/Home";
import Navbar from "@/components/navbar/Navbar";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <LandingSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
