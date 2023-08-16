import React from 'react'
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import './DashboardTable.scss'
import axios from 'axios'
import { apiUri, sessionKeys } from '../../../constants'
import { getSessionStorage } from '../../../utils/tools'

const DashboardTable = ({ blogList, updateBlog }) => {
  const navigate = useNavigate()
  const displayColumns = ['title', 'service', 'date', 'status', 'Options']
  const tableCellData = (cellValue, col, row) => {
    if (col === 'Options') {
      return (
        <>
          <Button onClick={() => navigate(`/edit-blog/${row.id}`)}>Edit</Button>{' '}
          &nbsp;
          <Button
            onClick={() =>
              window.open(`/blog/${row.url}`, '', 'noopener, noreferrer')
            }
          >
            View
          </Button>
          &nbsp;
          <Button onClick={() => deletePost(row.id)}>Delete</Button>
        </>
      )
    }

    if (col === 'status') {
      let res = ''
      if (cellValue === '1') res = 'Draft'
      if (cellValue === '2') res = 'Published'
      return res
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

  return (
    <div className="mt-4 bg-white bs br-1 overflow-hidden">
      <div className="d-table-header-cont d-flex align-items-center justify-content-between">
        <div>
          <h2>Blogs</h2>
        </div>
        <div>Search</div>
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
            {blogList.map((row, rowIndex) => (
              <tr key={(row.id, rowIndex)}>
                {displayColumns.map((col, colIndex) => (
                  <td key={(row[col], colIndex)} className={col + row[col]}>
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
  blogList: PropTypes.arrayOf(PropTypes.shape()),
  updateBlog: PropTypes.func
}

DashboardTable.defaultProps = {
  blogList: [{}],
  updateBlog: () => {}
}

export default DashboardTable
