import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'

import folderIcon from '../../../../public/assets/icons/folder.png'
import clip from '../../../../public/assets/icons/clip-icon.svg'
import documentRegistration from '../../../../public/assets/icons/Document abstract.svg'
import documentCertificate from '../../../../public/assets/icons/Document abstract2.svg'

import './SPDocuments.scss'

const SPDocuments = ({ data }) => {
  const { category } = useParams()
  const [isImage, setIsImage] = useState(true)

  // eslint-disable-next-line react/no-unstable-nested-components
  const DocImage = () => {
    if (category === 'registration') {
      setIsImage(true)
      return <img src={documentRegistration} alt="decorative" />
    }
    if (category === 'certification') {
      setIsImage(true)
      return <img src={documentCertificate} alt="decorative" />
    }
    setIsImage(false)
    return null
  }
  return (
    <div
      className={`row 
      ${category === 'registration' ? 'bg-gray bs br-1 mb-5' : ''}
      ${category === 'certification' ? 'mb-4' : ''}`}
    >
      <div
        className={`container ${
          category === 'registration' || category === 'certification'
            ? 'mt-5 mt-md-0 mb-3'
            : ''
        }`}
      >
        <div
          className={`${
            category === 'registration' || category === 'certification'
              ? 'row'
              : ''
          }`}
        >
          {isImage && (
            <div className="doc-main-img-cont col-md-4 d-flex align-items-center justify-content-center">
              <DocImage />
            </div>
          )}
          <div
            className={`mb-4 p-3 bg-gray br-1 position-relative document-cont ${
              isImage ? 'col-md-8' : ''
            }`}
            id={data.id}
          >
            <div className="position-relative title-cont d-flex align-item-center mb-4">
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
                  data.value.map((list) => (
                    <div key={list}>
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
