import { PageTemplate } from './components/defaultTemplate/index';
import { AboutSection } from './components/mainContent/aboutSection';
import { BannerSection } from './components/mainContent/bannerSection';

function App() {

  return (
    <>
      <PageTemplate>
        <BannerSection />
        <AboutSection />
      </PageTemplate>
    </>
  )
}

export default App