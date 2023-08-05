import React from 'react'
import Table from 'react-bootstrap/Table'
// import PropTypes from 'prop-types'

import blogList from '../../../../public/assets/json/blogList.json'

import './DashboardTable.scss'

const DashboardTable = () => {
  const displayColumns = ['title', 'category', 'date', 'status', 'Edit', 'View']
  const tableCellData = (cellValue, col) => {
    if (col === 'Edit') {
      return <>P</>
    }
    if (col === 'View') {
      return <>V</>
    }
    return cellValue
  }

  // After API call
  // displayColumns = [...Object.keys(blogList[0]), 'Edit', 'View']
  // displayColumns.shift()

  return (
    <div className="mt-4 bg-white bs br-1 overflow-hidden">
      <div className="d-table-header-cont d-flex align-items-center justify-content-between">
        <div>
          <h2>Blogs</h2>
        </div>
        <div>Searc</div>
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
                    {tableCellData(row[col], col)}
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
  // details: PropTypes.shape()
}

DashboardTable.defaultProps = {
  details: {}
}

export default DashboardTable
