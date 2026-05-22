"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Reviews", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Stacks Heating and Air"
            button={{ text: "Book Now", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitKpi
            background={{ variant: "radial-gradient" }}
            title="Fast. Clean. Done Right the First Time."
            description="Premium furnace, AC, and water heating services for your home. Same-day & next-day availability with 8+ years of expert care."
            kpis={[
              { value: "4.8 ★", label: "Google Rating" },
              { value: "8+", label: "Years in Business" },
              { value: "137+", label: "Happy Clients" },
            ]}
            enableKpiAnimation={true}
            buttons={[{ text: "Book a Service Call", href: "#contact" }, { text: "Get a Free Quote", href: "#contact" }]}
            imageSrc="http://img.b2bpic.net/free-photo/man-electrical-technician-working-switchboard-with-fuses-uses-tablet_169016-23926.jpg"
            mediaAnimation="slide-up"
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/electrical-technician-looking-focused-while-working-switchboard-with-fuses_169016-23718.jpg", alt: "Technician 1" },
              { src: "http://img.b2bpic.net/free-photo/service-man-adjusting-house-heating-system_1303-26529.jpg", alt: "Technician 2" },
              { src: "http://img.b2bpic.net/free-photo/service-man-instelling-house-heating-system-floor_1303-26533.jpg", alt: "Technician 3" },
              { src: "http://img.b2bpic.net/free-photo/seasoned-mechanic-using-soft-dusting-brush-sweep-away-built-up-layer-dirt-debris-from-hvac-system-coil-while-adept-repairman-refills-air-conditioner-cooling-system-refrigerant-tank_482257-63969.jpg", alt: "Technician 4" },
              { src: "http://img.b2bpic.net/free-photo/young-man-shirt-vest-standing-with-crossed-arms-looking-confident_176474-30879.jpg", alt: "Technician 5" }
            ]}
            marqueeItems={[
              { type: "text", text: "Same-Day Service" },
              { type: "text", text: "Licensed & Insured" },
              { type: "text", text: "Transparent Pricing" },
              { type: "text", text: "Expert Maintenance" },
              { type: "text", text: "100% Satisfaction" }
            ]}
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardSeven
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            metrics={[
              { id: "m1", value: "Same-Day", title: "Service Speed", items: ["Emergency response", "Fast diagnostics", "Quick resolution"] },
              { id: "m2", value: "Licensed", title: "Fully Certified", items: ["Expert training", "Insured workmanship", "Code compliant"] },
              { id: "m3", value: "Upfront", title: "Transparent Cost", items: ["No hidden fees", "Fixed pricing", "Detailed invoices"] }
            ]}
            title="Built on Trust"
            description="Quality assurance that defines our reputation in your neighborhood."
          />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            textboxLayout="split"
            useInvertedBackground={true}
            title="Why Neighbors Trust Adam"
            description="Adam Carson isn't your average contractor. He shows up when he says he will, explains every detail of the repair, and leaves your workspace cleaner than he found it. No salesy runaround—just straight answers and solid, dependable HVAC work."
            bulletPoints={[
              { title: "Reliable Arrival", description: "Respecting your time with punctual service." },
              { title: "Total Transparency", description: "Full explanations before a wrench touches anything." },
              { title: "Professional Cleanliness", description: "Leaving your home as clean as we found it." }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/young-worker-holding-hands-pockets-uniform-looking-cheerful-front-view_176474-21697.jpg"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardThree
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            features={[
              { title: "Furnace Installation", description: "High-efficiency heating system replacements.", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-wearing-helmets_23-2149366666.jpg" },
              { title: "AC & Heat Pumps", description: "Expert central cooling installation and maintenance.", imageSrc: "http://img.b2bpic.net/free-photo/worker-repairing-water-heater_23-2149334225.jpg" },
              { title: "System Maintenance", description: "Annual diagnostics to prevent future breakdowns.", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-working-as-plumber_23-2150746421.jpg" }
            ]}
            title="Premium HVAC Services"
            description="Comprehensive climate solutions tailored for local homes."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFifteen
            useInvertedBackground={true}
            testimonial="Adam was at my place in less than 30 minutes in the middle of the night. Very polite, knowledgeable, and professional. My new heating & AC go-to guy."
            rating={5}
            author="Sarah J."
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/young-technician-standing-with-crossed-arms-grey-uniform-looking-confident_176474-35548.jpg", alt: "Sarah J." },
              { src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-people-wearing-helmets_23-2149366669.jpg", alt: "Client 1" },
              { src: "http://img.b2bpic.net/free-photo/medium-shot-woman-wearing-helmet_23-2149366663.jpg", alt: "Client 2" },
              { src: "http://img.b2bpic.net/free-photo/building-construction-worker-site_23-2149124294.jpg", alt: "Client 3" },
              { src: "http://img.b2bpic.net/free-photo/man-overall-cap-smiling_23-2148073095.jpg", alt: "Client 4" }
            ]}
            ratingAnimation="slide-up"
            avatarsAnimation="blur-reveal"
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              { id: "f1", title: "Do you offer emergency services?", content: "Yes, we provide rapid response for emergency furnace and AC situations to keep your home comfortable." },
              { id: "f2", title: "Are your quotes upfront?", content: "Absolutely. We provide detailed pricing before starting any work—no surprises, just straight answers." },
              { id: "f3", title: "How often should I get maintenance?", content: "Annual maintenance is recommended to extend the lifespan of your unit and prevent costly, unexpected breakdowns." }
            ]}
            title="Common Questions"
            description="Get clear, honest answers regarding your heating and cooling needs."
            faqsAnimation="blur-reveal"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            useInvertedBackground={true}
            background={{ variant: "sparkles-gradient" }}
            tag="Ready to fix your climate?"
            title="Furnace down? Don't wait."
            description="Call Adam Carson directly at 555-0123 or fill out the form below to get a call back for a quote."
            buttonText="Call Adam Now"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Stacks Heating and Air"
            columns={[
              { title: "Company", items: [{ label: "About", href: "#about" }, { label: "Services", href: "#services" }] },
              { title: "Support", items: [{ label: "Reviews", href: "#testimonials" }, { label: "Privacy Policy", href: "#" }] }
            ]}
            copyrightText="© 2024 Stacks Heating and Air. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}