import { Nunito_Sans } from 'next/font/google'
const nunito = Nunito_Sans({ subsets: ['latin'] })
import Header from './Header';


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={`${nunito.className}`}>{children}</main>
    </>
  );
};

export default Layout;
