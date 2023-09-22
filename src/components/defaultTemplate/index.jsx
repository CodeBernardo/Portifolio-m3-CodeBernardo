import { Footer } from '../footer';
import { Header } from '../header';

export const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
