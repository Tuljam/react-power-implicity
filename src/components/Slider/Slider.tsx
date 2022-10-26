//import './slider.scss';

export const Slider = () => {
  return (
    // <div className='slider'>
      <div className="slider__container">
        <h1 className="slider__title">The Power of Simplicity</h1>
        <p className="slider__subtitle">Instead of spending time searching for the right app, our AI will bring the right app to you.</p>
        {/* <div className="slider__btn--wrap"> */}
          <button className="slider__btn">Learn</button>
        {/* </div> */}

          <ul className="slider__dots">
            <li className="slider__dot"></li>
            <li className="slider__dot"></li>
            <li className="slider__dot slider__dot--active"></li>
            <li className="slider__dot"></li>
            <li className="slider__dot"></li>
          </ul>


        
      </div>
    // </div>
  )
}
