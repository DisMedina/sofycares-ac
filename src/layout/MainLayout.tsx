import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50">
      <header className="relative z-40">
        <Header />
      </header>

      <main className="flex-1 ">
        <Outlet />
      </main>

      <footer className="z-40">{<Footer />}</footer>
    </div>
  );
};
export default MainLayout;
