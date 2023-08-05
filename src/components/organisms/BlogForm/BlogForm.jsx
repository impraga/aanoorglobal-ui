/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useForm } from 'react-hook-form'

import './BlogForm.scss'
import RichTextEditor from '../../molecules/RichTextEditor/RichTextEditor'
import ServiceDropDown from '../../atoms/ServiceDropDown/ServiceDropDown'
import Chips, { Chip } from '../src'

const BlogForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
    // reset
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const RTEChange = (value) => {
    if (value) {
      setValue('rte', value, { shouldValidate: true })
    }
  }

  return (
    <div className="container bg-white bs br-1 p-4">
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
              {...register('image', { required: true })}
              className={errors.image?.type === 'required' ? 'error' : ' '}
              type="file"
              placeholder="Image"
            />
          </div>
          <div className="row">
            <div className="col-md-7">
              <input
                {...register('video', { required: true })}
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
            <div className={errors.rte?.type === 'required' ? 'error' : ' '}>
              <RichTextEditor editorValue={RTEChange} />
            </div>
            <input
              {...register('rte', { required: true })}
              type="text"
              hidden
            />
          </div>
          <div>
            <button type="submit">Publish</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BlogForm
