import { Footer } from "../footer"
import { Header } from "../header"
import "../../styles/text.css"


export const PageTemplate = ({children}) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}


