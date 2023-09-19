import { PageTemplate } from './components/defaultTemplate/index';
import { AboutSection } from './components/mainContent/aboutSection';
import { BannerSection } from './components/mainContent/bannerSection';
import { TechsSection } from './components/mainContent/techSection';

function App() {

  return (
    <>
      <PageTemplate>
        <BannerSection />
        <AboutSection />
        <TechsSection />
      </PageTemplate>
    </>
  )
}

export default App