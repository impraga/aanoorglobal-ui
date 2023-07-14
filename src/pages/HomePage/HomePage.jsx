import React from 'react'

import LandingSection from '../../components/organisms/LandingSection/LandingSection'
import ServiceSection from '../../components/organisms/ServiceSection/ServiceSection'
import WhyUsSection from '../../components/organisms/WhyUsSection/WhyUsSection'
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
    <LandingSection />
    <ServiceSection />
    <WhyUsSection />
  </div>
)

export default HomePage
