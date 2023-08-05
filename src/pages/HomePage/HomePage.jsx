import React from 'react'

import HomeLandingSection from '../../components/organisms/HomeLandingSection/HomeLandingSection'
import HomeServiceSection from '../../components/organisms/HomeServiceSection/HomeServiceSection'
import HomeWhyUsSection from '../../components/organisms/HomeWhyUsSection/HomeWhyUsSection'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'

const metaDetails = {
  title: 'Home | Aanoor Global',
  canonicalUrl: 'www.aanoorglobal.com/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const HomePage = () => (
  <div>
    <HelmetWrapper data={metaDetails} />
    <HomeLandingSection />
    <HomeServiceSection />
    <HomeWhyUsSection />
  </div>
)

export default HomePage
