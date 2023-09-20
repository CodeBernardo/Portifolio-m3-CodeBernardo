import { PageTemplate } from './components/defaultTemplate/index';
import { AboutSection } from './components/mainContent/aboutSection';
import { BannerSection } from './components/mainContent/bannerSection';
import { ProjectsSection } from './components/mainContent/projectsSection';
import { TechsSection } from './components/mainContent/techSection';
import "./styles/index.css"

function App() {

  return (
    <>
      <PageTemplate>
        <BannerSection />
        <AboutSection />
        <TechsSection />
        <ProjectsSection />
      </PageTemplate>
    </>
  )
}

export default App 