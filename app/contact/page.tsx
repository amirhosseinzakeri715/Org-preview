import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ContactFormSection from "./components/ContactFormSection";
import CurveDivider from "./components/ui/CurveDivider";

export default function ContactPage() {
  return (
    <main className="">
      <HeroSection />
      <CurveDivider height={150} topColor="#f3f4f6" bottomColor="#fff7ed" />
      <ContactSection />
      <CurveDivider
        height={120}
        topColor="#fff7ed"
        bottomColor="#fff7ed"
        inverted
      />

      <div className="w-full  bg-gray-50 overflow-hidden">
        <div className="w-full  my-10  p-3 ">
          <div className="max-w-8xl mx-auto bg-white rounded-xl shadow-2xl border-2 border-blue-400/60 overflow-hidden">
            <ContactFormSection />
          </div>
        </div>
      </div>
    </main>
  );
}
