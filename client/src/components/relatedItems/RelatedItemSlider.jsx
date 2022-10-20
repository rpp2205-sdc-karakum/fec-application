import React from "react";
import './Slider.scss';
import RelatedItemCard from './RelatedItemCard.jsx';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const RelatedItemSlider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft -=  50;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft +=  50;
  }
  return (
     
    <div id="main-slider-container">
      <MdChevronLeft size={38} className="slider-icon-left" onClick={slideLeft} />
      <div id='slider'>

        {props.products.map((item, index) => {
          if(item !== props.curProduct.id) {
          return (
                  <RelatedItemCard product={item} key={index} selectProduct={props.selectProduct} handleScrollToTop={props.handleScrollToTop} />
              )
          }
           })}

      </div>
      <MdChevronRight size={38} className="slider-icon-right" onClick={slideRight} />
    </div>
  )
}

export default RelatedItemSlider;