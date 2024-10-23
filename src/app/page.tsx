import Footer from "@/components/footer/Footer";
import LandingSection from "@/components/home/Home";
import HomePage from "@/components/home/HomePage";
import Navbar from "@/components/navbar/Navbar";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <HomePage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
