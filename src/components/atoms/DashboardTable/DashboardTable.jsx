import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types'

import { useNavigate } from 'react-router-dom'

import './DashboardTable.scss'
import axios from 'axios'
import { apiUri, sessionKeys } from '../../../constants'
import { getSessionStorage } from '../../../utils/tools'

import editImage from '../../../../public/assets/icons/edit-button.png'
import viewImage from '../../../../public/assets/icons/view-button.png'
import deleteImage from '../../../../public/assets/icons/delete-button.png'

const DashboardTable = ({ blogListInput, updateBlog }) => {
  const navigate = useNavigate()
  const [blogList, setBlogList] = useState([])
  const displayColumns = ['title', 'service', 'date', 'status', 'options']

  // Updating Blog List in UseState
  useEffect(() => {
    setBlogList(blogListInput)
  }, [blogListInput])

  const tableCellData = (cellValue, col, row) => {
    if (col === 'options') {
      return (
        <>
          <button
            type="button"
            onClick={() => navigate(`/edit-blog/${row.id}`)}
          >
            <img src={editImage} alt="Edit Button" />
          </button>
          <button
            type="button"
            onClick={() =>
              window.open(`/blogView/${row.url}`, '', 'noopener, noreferrer')
            }
          >
            <img src={viewImage} className="view-btn" alt="View Button" />
          </button>
          <button type="button" onClick={() => deletePost(row.id)}>
            <img src={deleteImage} alt="Delete Button" />
          </button>
        </>
      )
    }

    if (col === 'status') {
      let res = ''
      if (cellValue === '1') res = 'Draft'
      if (cellValue === '2') res = 'Published'
      return <div className="status-cont">{res}</div>
    }
    return cellValue
  }

  const deletePost = (id) => {
    axios
      .post(`${apiUri}/deletePost`, JSON.stringify({ id }), {
        headers: {
          Authorization: getSessionStorage(sessionKeys.authorization)
        }
      })
      .then(({ data }) => {
        if (data.status === '200') {
          updateBlog(data.response)
        }
      })
  }

  // Updating Blog List on Search results
  const searchTable = (event) => {
    setBlogList(
      blogListInput.filter((obj) =>
        Object.values(obj).some((val) =>
          val
            ? val.toString().toLowerCase().includes(event.target.value)
            : false
        )
      )
    )
  }

  return (
    <div className="dashboard-table-cont mt-4 bg-white bs br-1 overflow-hidden">
      <div className="d-table-header-cont d-flex align-items-center justify-content-between">
        <div>
          <h2>Blogs</h2>
        </div>
        <div className="ag-form">
          <input
            type="text"
            placeholder="Search"
            className="mb-0 search-form"
            onChange={searchTable}
          />
        </div>
      </div>
      <div className="">
        <Table striped hover responsive>
          <thead>
            <tr>
              {displayColumns.map((col) => (
                <td key={col} className={col}>
                  {col}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {blogList &&
              blogList.map((row, rowIndex) => (
                <tr key={(row.id, rowIndex)}>
                  {displayColumns.map((col, colIndex) => (
                    <td
                      key={(row[col], colIndex)}
                      className={`${col} class${row[col]}`}
                    >
                      {tableCellData(row[col], col, row)}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

DashboardTable.propTypes = {
  blogListInput: PropTypes.arrayOf(PropTypes.shape()),
  updateBlog: PropTypes.func
}

DashboardTable.defaultProps = {
  blogListInput: [{}],
  updateBlog: () => {}
}

export default DashboardTable
