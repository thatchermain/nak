import React,{useState} from 'react';
import {Carousel} from '3d-react-carousal';
import {GalleryContainer, GalleryWrapper, GalleryTitle} from './GalleryElements'; 


const GalleryCarousel = () => {

    let galleryImages = [
        <img src='https://picsum.photos/1000/600/?random'/>,
        <img src='https://picsum.photos/1000/601/?random'/>,
        <img src='https://picsum.photos/1000/602/?random'/>,
        <img src='https://picsum.photos/1000/603/?random'/>,
        <img src='https://picsum.photos/1000/604/?random'/>,
        <img src='https://picsum.photos/1000/605/?random'/>,
        <img src='https://picsum.photos/1000/606/?random'/>,
            

]

    return (
        <>
            <GalleryContainer>
                <GalleryWrapper>
                    <Carousel slides={galleryImages} autoplay={true} interval={2000}/>     
                </GalleryWrapper>
            </GalleryContainer>



        </>
    );
}

export default GalleryCarousel;
