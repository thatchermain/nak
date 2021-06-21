import React,{useState} from 'react';
import './Gallery.css';
import {Carousel} from '3d-react-carousal';
// import galleryImages from '../data/galleryImages';
// import galleryImages from '../data/galleryImages';


const Gallery = () => {

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
        <div className='gallery'>
            <h1 className='gallery__title'>Galeria</h1>
            <Carousel slides={galleryImages} autoplay={true} interval={2000}/>

        </div>
    );
}

export default Gallery;
