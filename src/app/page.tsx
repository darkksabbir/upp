import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { Header } from "@/components/ui/header-1";
import AboutSection2 from "@/components/ui/about-section-2";
import { Footer } from "@/components/ui/footer-section";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import ServicesSection from "@/components/ui/services-section";
import StatsSection from "@/components/ui/stats-section";
import ProcessSection from "@/components/ui/process-section";
import WorkSection from "@/components/ui/work-section";
import CtaSection from "@/components/ui/cta-section";
import Preloader from "@/components/ui/preloader";

const testimonials = [
  {
    author: {
      name: "Sarah Chen",
      handle: "CMO at Visionary Flows",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "UPPEARANCE didn't just redesign our brand; they completely re-engineered our digital presence. Their disruptive approach actually works.",
  },
  {
    author: {
      name: "Marcus Thorne",
      handle: "Founder of AeroTech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finding an agency that understands both the creative vision and the scaling metrics is rare. UPPEARANCE is that hybrid partner we needed.",
  },
  {
    author: {
      name: "Elena Rodriguez",
      handle: "Brand Manager at Pulse Interactive",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "The speed at which they deliver high-performance creative is unparalleled. They challenge the status quo and it shows in our growth metrics.",
  },
  {
    author: {
      name: "James Okafor",
      handle: "CEO at Vanta Studio",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Six months in, and our brand is unrecognizable — in the best way. UPPEARANCE turned our story into a movement.",
  },
  {
    author: {
      name: "Priya Nair",
      handle: "Co-founder, Lumen Labs",
      avatar: "https://images.unsplash.com/photo-1507101105822-7472b28602ef?w=150&h=150&fit=crop&crop=face"
    },
    text: "Everyone said to 'just run more ads'. UPPEARANCE asked better questions and built us a brand worth following.",
  }
];

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      <div className="flex w-full flex-col bg-black">
        {/* Hero and Logos Section with Background */}
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden" >
          <div
            className="absolute inset-0 z-0 h-full w-full"
            dangerouslySetInnerHTML={{
              __html: `
                <video 
                  autoplay 
                  loop 
                  muted 
                  playsinline 
                  class="object-cover h-full w-full"
                >
                  <source src="/hero-video-new.mp4" type="video/mp4" />
                </video>
              `
            }}
          />

          <div className="relative z-10 flex w-full flex-col grow">
            <Header />
            <main className="grow flex flex-col justify-center" >
              <HeroSection />
              <LogosSection />
            </main>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-black relative z-20">
          <AboutSection2 />
        </div>

        {/* Stats Section */}
        <StatsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* How We Work Section */}
        <ProcessSection />

        {/* Selected Work Section */}
        <WorkSection />

        {/* Testimonials Section */}
        <TestimonialsSection
          title="Trusted by visionaries"
          description="We help the world's most ambitious brands scale their reach through disruptive creative marketing."
          testimonials={testimonials}
        />

        {/* CTA Section */}
        <CtaSection />

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}
