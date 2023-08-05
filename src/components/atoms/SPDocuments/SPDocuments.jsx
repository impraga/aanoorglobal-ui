import React from 'react'
import PropTypes from 'prop-types'

import folderIcon from '../../../../public/assets/icons/folder.png'
import clip from '../../../../public/assets/icons/clip-icon.svg'

import './SPDocuments.scss'

const SPDocuments = ({ data }) => (
  <div
    className="mb-4 p-3 bg-gray br-1 position-relative document-cont"
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
)

SPDocuments.propTypes = {
  data: PropTypes.PropTypes.shape()
}

SPDocuments.defaultProps = {
  data: {}
}

export default SPDocuments
