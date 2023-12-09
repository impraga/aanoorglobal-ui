import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import ReactQuill from 'react-quill'

import './RichTextEditor.scss'

const RichTextEditor = ({ editorValue, updateValue }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    editorValue(value)
  }, [value])

  useEffect(() => {
    if (updateValue) {
      setValue(updateValue)
    }
  }, [updateValue])

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [
      {
        color: [
          '#89bb14',
          '#8fc60e',
          '#001b29',
          '#0a527a',
          '#0090ba',
          '#fff',
          '#e20000',
          '#7300ba',
          '#f89500',
          '#eeeeee'
        ]
      },
      {
        background: [
          '#89bb14',
          '#8fc60e',
          '#001b29',
          '#0a527a',
          '#0090ba',
          '#fff',
          '#e20000',
          '#7300ba',
          '#f89500',
          '#eeeeee'
        ]
      }
    ], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ['link'],
    ['clean'] // remove formatting button
  ]

  const modules = {
    toolbar: toolbarOptions
  }

  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      value={value}
      onChange={setValue}
    />
  )
}

RichTextEditor.propTypes = {
  editorValue: PropTypes.func,
  updateValue: PropTypes.string
}

RichTextEditor.defaultProps = {
  editorValue: () => {},
  updateValue: ''
}

export default RichTextEditor
