import HeroSection from '@/components/HeroSection'
import NavBar from '@/components/NavBar'
import AboutSection from '@/components/AboutSection'
import ProjectSection from '@/components/ProjectSection'
import EmailSection from '@/components/EmailSection'
import Footer from '@/components/Footer'
import AchievementsSection from '@/components/AchievementsSection'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <NavBar/>
      <div className='container mx-auto py-4 px-12 mt-24'>
        <HeroSection/>
        <AchievementsSection />
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  )
}
