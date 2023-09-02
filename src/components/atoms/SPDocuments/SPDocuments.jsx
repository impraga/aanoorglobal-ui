import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'

import folderIcon from '../../../../public/assets/icons/folder.png'
import clip from '../../../../public/assets/icons/clip-icon.svg'
import documentRegistration from '../../../../public/assets/icons/Document abstract.svg'
import documentCertificate from '../../../../public/assets/icons/Document abstract2.svg'
import documentCompliance from '../../../../public/assets/icons/Document abstract3.svg'
import circleGreen from '../../../../public/assets/icons/circle-green.svg'

import './SPDocuments.scss'

const SPDocuments = ({ data }) => {
  const { category } = useParams()
  const [isImage, setIsImage] = useState(false)
  const [documentPath, setDocumentPath] = useState('')

  useEffect(() => {
    if (category === 'registration') {
      setIsImage(true)
      setDocumentPath(documentRegistration)
    } else if (category === 'certification') {
      setIsImage(true)
      setDocumentPath(documentCertificate)
    } else if (category === 'statuary-compliance') {
      setIsImage(true)
      setDocumentPath(documentCompliance)
    } else {
      setIsImage(false)
    }
  }, [])

  return (
    <div
      className={`row 
      ${category === 'registration' ? 'bg-gray bs br-1 mb-5' : ''}
      ${category === 'certification' ? 'mb-4' : ''}`}
    >
      <div
        className={`container ${
          category === 'registration' ||
          category === 'certification' ||
          category === 'statuary-compliance'
            ? 'mt-5 mt-md-0 mb-3'
            : ''
        }`}
      >
        <div
          className={`${
            category === 'registration' ||
            category === 'certification' ||
            category === 'statuary-compliance'
              ? 'row'
              : ''
          }`}
        >
          {isImage && (
            <div className="doc-main-img-cont overflow-hidden col-md-4 d-flex align-items-center justify-content-center position-relative">
              <div
                className="main-img-cont"
                data-aos="fade-top"
                data-aos-delay="0"
              >
                <img
                  src={documentPath}
                  alt="decorative"
                  data-aos="zoom-in-up"
                  data-aos-delay="50"
                />
              </div>
              <div
                className="glass"
                data-aos="fade-right"
                data-aos-delay="100"
              />
              <div className="ring-img-cont">
                <img
                  src={circleGreen}
                  alt="decorative"
                  data-aos="fade-left"
                  data-aos-delay="150"
                />
              </div>
            </div>
          )}
          <div
            className={`mb-4 p-3 bg-gray br-1 position-relative document-cont ${
              isImage ? 'col-md-8' : ''
            }`}
            id={data.id}
          >
            <div
              className="position-relative title-cont d-flex align-item-center mb-4"
              data-aos="fade-left"
            >
              <div className="img-cont bg-db br-1">
                <img src={folderIcon} alt="" />
              </div>
              <div className="title d-flex align-items-center">
                <h3 className="mb-0 text-left">{data.header}</h3>
              </div>
            </div>
            <div className="position-relative file-cont">
              <ol>
                {data.value &&
                  data.value.map((list, index) => (
                    <div
                      key={list}
                      data-aos="fade-left"
                      data-aos-delay={index * 50 + 50}
                    >
                      <li>{list}</li>
                      <hr className="" />
                    </div>
                  ))}
              </ol>
            </div>
            <div className="bg-gray-dark-cont bg-gray-dark" />
            <div className="clip-blocker bg-gray" />
            <div className="clip-img ">
              <img src={clip} alt="Clip icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SPDocuments.propTypes = {
  data: PropTypes.PropTypes.shape()
}

SPDocuments.defaultProps = {
  data: {}
}

export default SPDocuments
