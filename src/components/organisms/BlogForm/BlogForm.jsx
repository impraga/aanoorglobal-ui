/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import './BlogForm.scss'
import RichTextEditor from '../../molecules/RichTextEditor/RichTextEditor'
import ServiceDropDown from '../../atoms/ServiceDropDown/ServiceDropDown'

const BlogForm = () => {
  const [displayNotification, setDisplayNotification] = useState({})
  const [resetRTE, setResetRTE] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset
  } = useForm()

  const onSubmit = (data, e) => {
    const saveorPublish = e.nativeEvent.submitter.name
    const formData = new FormData()
    formData.append('file', data.thumbImg[0])
    const dd = {
      ...data,
      published: saveorPublish === 'save' ? 1 : 2
    }
    formData.append('postData', JSON.stringify(dd))

    const url = 'http://localhost/Aanoor/aanoor-server/api/createPost'
    axios
      .post(url, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then((res) => {
        if (res.data.status === '200' && res.data.message === 'Blog Added') {
          reset()
          setResetRTE(true)
          showBlogNotification(
            'success',
            `Blog Added and ${saveorPublish === 'save' ? 'saved' : 'published'}`
          )
        } else {
          showBlogNotification('danger', 'Error while adding blog')
        }
      })
  }

  const showBlogNotification = (type, msg) => {
    setDisplayNotification({
      type,
      msg
    })
    setTimeout(() => {
      setDisplayNotification({})
    }, 5000)
  }

  const RTEChange = (value) => {
    if (value) {
      setValue('content', value, { shouldValidate: true })
    }
  }

  return (
    <div className="container bg-white bs br-1 p-4">
      {displayNotification && Object.keys(displayNotification).length > 0 && (
        <div className={`alert alert-${displayNotification.type}`} role="alert">
          {displayNotification.msg}
        </div>
      )}
      <div className="ag-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-8">
              <input
                {...register('title', { required: true })}
                className={`w-100 ${
                  errors.title?.type === 'required' ? 'error' : ' '
                }`}
                type="text"
                placeholder="Title"
              />
            </div>
            <div className="col-md-4">
              <ServiceDropDown errors={errors} register={register} />
            </div>
          </div>
          <div>
            <input
              {...register('thumbImg', { required: true })}
              className={errors.thumbImg?.type === 'required' ? 'error' : ' '}
              type="file"
              placeholder="Thumbnail Image"
            />
          </div>
          <div>
            <input
              {...register('tags', { required: true })}
              className={errors.tags?.type === 'required' ? 'error' : ' '}
              type="text"
              placeholder="Add tags in semicolon separated."
            />
          </div>
          <div className="row">
            <div className="col-md-7">
              <input
                {...register('video', { required: false })}
                className={`w-100 ${
                  errors.video?.type === 'required' ? 'error' : ' '
                }`}
                type="text"
                placeholder="Youtube Url"
              />
            </div>
            <div className="col-md-3">
              <input
                {...register('date', { required: true })}
                className={`w-100 ${
                  errors.date?.type === 'required' ? 'error' : ' '
                }`}
                type="date"
                defaultValue={new Date().toISOString().substring(0, 10)}
              />
            </div>
            <div className="col-md-2">
              <input
                {...register('readTime', { required: true })}
                className={`w-100 ${
                  errors.readTime?.type === 'required' ? 'error' : ' '
                }`}
                type="number"
                placeholder="Read Time in Min"
              />
            </div>
          </div>
          <div>
            <div
              className={errors.content?.type === 'required' ? 'error' : ' '}
            >
              <RichTextEditor editorValue={RTEChange} reset={resetRTE} />
            </div>
            <input
              {...register('content', { required: true })}
              type="text"
              hidden
            />
            {/* <input type="hidden" {...register('published')} value={published} /> */}
          </div>
          <div>
            <button name="save" type="submit">
              Save
            </button>
            <button name="publish" type="submit">
              Save & Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BlogForm
