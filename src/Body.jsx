import React from 'react'
import ContactSection from './ContactSection';
import CoursesSection from './CoursesSection';
import Faculty from './Faculty';
import FeatureSection from './FeatureSection';
import HomeSection from './HomeSection';
function Body() {
    return (
        <>
    <HomeSection />
      <FeatureSection />
      <Faculty />
      <CoursesSection />
      <ContactSection />
        </>
    )
}

export default Body
