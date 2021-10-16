import React from 'react';
import ContactSection from './ContactSection';
import CoursesSection from './CoursesSection';
import Faculty from './Faculty';
import FeatureSection from './FeatureSection';
import Footer1 from './Footer1';
import FooterSection from './FooterSection';
import HomeSection from './HomeSection';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <FeatureSection />
      <Faculty />
      <CoursesSection />
      <ContactSection />
      <Footer1 />
      <FooterSection />
    </>
  );
}

export default App;
