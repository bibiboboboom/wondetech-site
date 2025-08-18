import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";
import Hero1 from "@/components/home/Hero1";
import Hero2 from "@/components/home/Hero2";
import CoreCapabilities from "@/components/home/CoreCapabilities";
import UseCases from "@/components/home/UseCases";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero1 />
      <Hero2 />
      <CoreCapabilities />
      <UseCases />
      <WhyChooseUs />
      <ContactForm />
    </div>
  );
}
