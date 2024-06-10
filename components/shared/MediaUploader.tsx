import React from 'react'
import { useToast } from '../ui/use-toast'
import {CldImage, CldUploadWidget } from 'next-cloudinary';


export const MediaUploader = () => {
  const {toast} = useToast();

  return (
    <CldUploadWidget uploadPreset="jsm_imaginify">
  {({ open }) => {
    return (
      <button onClick={() => open()}>
          Hi
      </button>
    );
  }}
</CldUploadWidget>
  )
}
