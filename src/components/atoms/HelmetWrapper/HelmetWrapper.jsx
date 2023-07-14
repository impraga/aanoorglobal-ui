import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

const HelmetWrapper = ({ data }) => (
  <Helmet>
    {data.title && <title>{data.title}</title>}
    {data.canonicalUrl && <link rel="canonical" href={data.canonicalUrl} />}
    {data.metaDesc && <meta name="description" content={data.metaDesc} />}
    {data.keywords && <meta name="keywords" content={data.keywords} />}
  </Helmet>
)

HelmetWrapper.propTypes = {
  data: PropTypes.shape().isRequired
}

export default HelmetWrapper
