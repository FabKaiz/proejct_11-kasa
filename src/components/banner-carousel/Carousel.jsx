import './carousel.scss'
import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [preloadBeforeIndex, setPreloadBeforeIndex] = useState(images.length - 1)
  const [preloadNextIndex, setPreloadNextIndex] = useState(1)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
    preloadIndex()
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
    preloadIndex()
  }

  const preloadIndex = () => {
    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex === images.length - 1;
    const newIndexPrev = isFirstSlide ? images.length - 2 : currentIndex - 2
    const newIndexNext = isLastSlide ? 1 : currentIndex + 2

    setPreloadBeforeIndex(newIndexPrev)
    setPreloadNextIndex(newIndexNext)
  }

  return (
    <section className='carousel__container'>
      {images &&
        <div className='carousel'>
          {/* Trick to preload prev/next images to have a smooth animation */}
          {images.length > 1 && (
            <>
              <div className='slide preload' style={{ backgroundImage: `url(${images[preloadBeforeIndex]})` }} />
              <div className='slide preload' style={{ backgroundImage: `url(${images[preloadNextIndex]})` }} />
            </>
          )}

          {/* Slide showing */}
          <div className='slide' style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>

          {/* Pagination & next / prev arrows*/}
          {images?.length > 1 && (
            <>
              <div className='button-prev' onClick={prevSlide}></div>
              <div className='button-next' onClick={nextSlide}></div>
              <div className='pagination'>
                <span className="pagination-current">{currentIndex + 1}</span> / <span
                className="pagination-total">{images.length}</span>
              </div>
            </>
          )}
        </div>
      }

    </section>
  )
    ;
};

export default Carousel;