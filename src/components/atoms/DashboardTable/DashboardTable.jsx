import React from 'react'
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import './DashboardTable.scss'

const DashboardTable = ({ blogList }) => {
  const navigate = useNavigate()
  const displayColumns = ['title', 'service', 'date', 'status', 'Edit', 'View']
  const tableCellData = (cellValue, col, row) => {
    if (col === 'Edit') {
      return (
        <Button onClick={() => navigate(`/edit-blog/${row.id}`)}>Edit</Button>
      )
    }
    if (col === 'View') {
      return (
        <Button
          onClick={() =>
            window.open(`/blog/${row.url}`, '', 'noopener, noreferrer')
          }
        >
          View
        </Button>
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
  blogList: PropTypes.arrayOf(PropTypes.shape())
}

DashboardTable.defaultProps = {
  blogList: [{}]
}

export default DashboardTable
