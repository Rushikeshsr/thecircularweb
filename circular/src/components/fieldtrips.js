import React from 'react'
import ImageGallery from 'react-image-gallery';
import { fieldGallery } from './fieldgallery';
import { fieldGallerybio } from './fieldgallerybio';
import { fieldGalleryid } from './fieldgalleryid';
import { fieldGallerypharma } from './fieldgallerypharma';

const Fieldtrips = () => {
  return (
    <>
    <div className='p-5'>
        <h2 className='main-heading'>FIELD TRIPS</h2>
        <p className='para'>
            Field trips, Events, and Conferences are a part of our ongoing experiential learning to make sure that our results are concrete. This allows us to evaluate the implementation and appropriately plan the activities. This enables us to directly experience the problems and develop effective solutions.
        </p>
        <div className='paragh text-center'>
            <video width="700px" height="420px" muted autoPlay={true} controls>
                <source src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1686033906/Circular%20website/fieldtrip%20gallery/train_vid_p8vqwg.mp4" type='video/mp4'/>
            </video> 
        </div>
        <p className='para text-center'>Journey through the Chambal valley</p>
        <h2 className='main-heading text-center mt-4' style={{fontSize:"20px", fontWeight:"bold"}}>Exploring the Nature</h2>
        <div className='para text-center'>
            <video width="700px" height="420px" muted autoPlay={true} controls>
                <source src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1686036480/Circular%20website/fieldtrip%20gallery/aranya_vid_xm2dx9.mp4" type='video/mp4'/>
            </video> 
            <p>Travelling amid the Teak Forest</p>
        </div>
        <div className="image-gallery-wrapper">
            <ImageGallery autoPlay={true} showThumbnails={false} items={fieldGallery} />
        </div>
        <h2 className='main-heading text-center mt-5' style={{fontSize:"25px", fontWeight:"bold"}}>Events and Conferences</h2>
        <div className='para text-center mb-5'>
            <video width="700px" height="420px" muted autoPlay={true} controls>
                <source src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1686041175/Circular%20website/fieldtrip%20gallery/events%20gallery/amtech_jhbigz.mp4" type='video/mp4'/>
            </video> 
            <p>Minister KTR addressing at AMTECH Conference and Expo</p>
        </div>

        <div className='para text-center mb-5'>
            <div className="image-gallery-wrapper">
                <ImageGallery autoPlay={true} showThumbnails={false} items={fieldGallerybio} />
            </div>
            <p className='mt-3'>At BioAsia 2023 Summit </p>
        </div>
        <div className='para text-center mb-5'>
            <div className="image-gallery-wrapper">
                <ImageGallery autoPlay={true} showThumbnails={false} items={fieldGalleryid} />
            </div>
            <p className='mt-3'>iDAC Conference and Expo 2022</p>
        </div>
        <div>

        </div>
        <div className='para text-center mb-5'>
            <div className="image-gallery-wrapper">
                <ImageGallery autoPlay={true} showThumbnails={false} items={fieldGallerypharma} />
            </div>
            <p className='mt-3'>At Pharmalytica Conferrence and Expo 2023</p>
        </div>

    
    </div>
    </>
  )
}

export default Fieldtrips;
