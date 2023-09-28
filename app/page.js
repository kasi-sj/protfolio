import HeroSection from '@/components/HeroSection'
import NavBar from '@/components/NavBar'
import AboutSection from '@/components/AboutSection'
import ProjectSection from '@/components/ProjectSection'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <NavBar/>
      <div className='container mx-auto py-4 px-12 mt-24'>
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
      </div>
    </main>
  )
}
