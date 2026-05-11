import Header from "@/components/header"
import NamePronunciation from "@/components/name-pronunciation"
import HeroSection from "@/components/hero-section"
import MissionStatement from "@/components/mission-statement"
import InProductionSection from "@/components/in-production-section"
import ProjectsHall from "@/components/projects-hall"
import CaseStudiesSection from "@/components/case-studies-section"
import DeploymentRoadmap from "@/components/deployment-roadmap"
import CommunitySection from "@/components/community-section"
import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"
import ScrollingAvatar3D from "@/components/scrolling-avatar-3d"

export default function Home() {
  return (
    <main className="relative" style={{ backgroundColor: "#111112" }}>
      <Header />
      <NamePronunciation />
      <HeroSection />
      <MissionStatement />
      <InProductionSection />
      <ProjectsHall />
      <CaseStudiesSection />
      <DeploymentRoadmap />
      <CommunitySection />
      <SocialSection />
      <Footer />
      <ScrollingAvatar3D />
    </main>
  )
}
