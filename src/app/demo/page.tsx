import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { Header } from "@/components/ui/header-1";
import AboutSection2 from "@/components/ui/about-section-2";

export default function DemoOne() {
    return (
        <div className="flex w-full flex-col bg-black">
            {/* Hero and Logos Section with Background */}
            <div className="relative flex min-h-screen w-full flex-col overflow-hidden" >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 z-0 h-full w-full object-cover opacity-80"
                >
                    <source src="/hero-video-new.mp4" type="video/mp4" />
                </video>

                <div className="relative z-10 flex w-full flex-col grow">
                    <Header />
                    <main className="grow flex flex-col justify-center" >
                        <HeroSection />
                        <LogosSection />
                    </main>
                </div>
            </div>

            {/* About Section (No Background) */}
            <div className="bg-black relative z-20">
                <AboutSection2 />
            </div>
        </div>
    );
}
