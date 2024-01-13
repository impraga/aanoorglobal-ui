/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { useNavigate } from 'react-router'
import RichTextEditor from '../../molecules/RichTextEditor/RichTextEditor'
import ServiceDropDown from '../../atoms/ServiceDropDown/ServiceDropDown'
import { getSessionStorage, removeSession } from '../../../utils/tools'
import { sessionKeys } from '../../../constants'

import getEnvUrl from '../../../constants/envUrl'
import CategoryDropDown from '../../atoms/CategoryDropDown/CategoryDropDown'

import './BlogForm.scss'

const BlogForm = ({ edit, blogDetails }) => {
  const [displayNotification, setDisplayNotification] = useState({})
  const [updateRTE, updateRTEVal] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const form = useForm()
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset
  } = form

  useEffect(() => {
    if (edit) {
      setValue('title', blogDetails.title)
      setValue('postUrl', blogDetails.post_url)
      setValue('thumbImg', blogDetails.image_name)
      setValue('tags', blogDetails.tags)
      setValue('category', blogDetails.category)
      setValue('services', blogDetails.service_type)
      setValue('youtubeUrl', blogDetails.youtube_url)
      setValue('postedDate', blogDetails.posted_date)
      setValue('readTime', blogDetails.read_time)
      updateRTEVal(blogDetails.content)
      setSelectedService(blogDetails.service_type)
      setSelectedCategory(blogDetails.category)
    }
  }, [blogDetails])

  const onSubmit = (data, e) => {
    try {
      const saveorPublish = e.nativeEvent.submitter.name
      const formData = new FormData()
      formData.append('file', data.thumbImg[0])
      let dd = {
        ...data,
        status: saveorPublish === 'save' ? 1 : 2,
        services: selectedService,
        category: selectedCategory
      }
      if (edit) {
        dd = { ...dd, id: blogDetails.id }
      }
      formData.append('postData', JSON.stringify(dd))

      const url = edit ? `${getEnvUrl}/updatePost` : `${getEnvUrl}/createPost`
      axios
        .post(url, formData, {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: getSessionStorage(sessionKeys.authorization)
          }
        })
        .then((res) => {
          if (res.data.status === '200') {
            if (
              res.data.message === 'Blog Updated' ||
              res.data.message === 'Blog Added'
            ) {
              reset()
              updateRTEVal(' ')
              showBlogNotification(
                'success',
                `Blog Added and ${
                  saveorPublish === 'save' ? 'saved' : 'published'
                }`
              )
              if (saveorPublish !== 'save') {
                navigate('/admin/dashboard')
              }
            }
          } else {
            showBlogNotification('danger', 'Error while adding blog')
          }
          window.scrollTo(0, 0)
        })
        .catch((err) => {
          showBlogNotification('danger', 'Error while adding blog')
          if (
            err.response.data.status === '400' &&
            err.response.data.message === 'Missing Token or Expired'
          ) {
            removeSession(sessionKeys.userLoggedStatus)
            removeSession(sessionKeys.authorization)
            navigate('/ar-admin/login')
          }
          window.scrollTo(0, 0)
        })
    } catch (err) {
      showBlogNotification('danger', 'Error while adding blog')
    }
  }

  const showBlogNotification = (type, msg) => {
    setDisplayNotification({
      type,
      msg
    })
    setTimeout(() => {
      setDisplayNotification({})
    }, 15000)
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
            <div className="col-md-12">
              <input
                {...register('title', { required: true })}
                className={`w-100 ${
                  errors.title?.type === 'required' ? 'error' : ' '
                }`}
                type="text"
                placeholder="Title"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input
                {...register('postUrl', { required: true })}
                className={errors.postUrl?.type === 'required' ? 'error' : ' '}
                type="text"
                placeholder="Blog URL"
              />
            </div>
            <div className="col-md-6">
              <input
                {...register('thumbImg', { required: false })}
                className={errors.thumbImg?.type === 'required' ? 'error' : ' '}
                type="file"
                placeholder="Thumbnail Image"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input
                {...register('tags', { required: false })}
                className={errors.tags?.type === 'required' ? 'error' : ' '}
                type="text"
                placeholder="Add tags in semicolon separated."
              />
            </div>
            <div className="col-md-3">
              <CategoryDropDown
                updateCategory={(val) => {
                  setSelectedCategory(val)
                }}
                selectedCategory={selectedCategory}
              />
            </div>

            <div className="col-md-3">
              <ServiceDropDown
                updateService={(val) => {
                  setSelectedService(val)
                }}
                selectedService={selectedService}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <input
                {...register('youtubeUrl', { required: false })}
                className={`w-100 ${
                  errors.youtubeUrl?.type === 'required' ? 'error' : ' '
                }`}
                type="text"
                placeholder="Youtube Url"
              />
            </div>
            <div className="col-md-3">
              <input
                {...register('postedDate', { required: true })}
                className={`w-100 ${
                  errors.postedDate?.type === 'required' ? 'error' : ' '
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
              className={
                errors.content?.type === 'required' ? 'editor-error' : ' '
              }
            >
              <RichTextEditor editorValue={RTEChange} updateValue={updateRTE} />
            </div>
            <input
              {...register('content', { required: true })}
              type="text"
              hidden
            />
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

BlogForm.propTypes = {
  edit: PropTypes.bool.isRequired,
  blogDetails: PropTypes.shape()
}
BlogForm.defaultProps = {
  blogDetails: {}
}

export default React.memo(BlogForm)
