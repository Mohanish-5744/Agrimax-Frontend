import React, { useEffect } from "react";
import TopBar from "./topbar";
import Hero from "./Components/Hero";
import Footer from "./footer";
import './home.css'
import { toast } from 'react-toastify';

const Home = () => {
  useEffect(() => {
    const hasShownToast = localStorage.getItem('hasShownToast');

    if (!hasShownToast) {
      toast.success('Successfully logged in!');
      localStorage.setItem('hasShownToast', true);
    }
  }, []);

  return (
    <div>
      <nav>
        <TopBar />
      </nav>
      <main>
        <Hero />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
