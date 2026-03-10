import NamePronunciation from "@/components/name-pronunciation"
import HeroSection from "@/components/hero-section"
import InProductionSection from "@/components/in-production-section"
import ProjectsHall from "@/components/projects-hall"
import CaseStudiesSection from "@/components/case-studies-section"
import DeploymentRoadmap from "@/components/deployment-roadmap"
import CommunitySection from "@/components/community-section"
import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative" style={{ backgroundColor: "#111112" }}>
      <NamePronunciation />
      <HeroSection />
      <InProductionSection />
      <ProjectsHall />
      <CaseStudiesSection />
      <DeploymentRoadmap />
      <CommunitySection />
      <SocialSection />
      <Footer />
    </main>
  )
}
