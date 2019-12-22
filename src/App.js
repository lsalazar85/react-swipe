import React, { useCallback, useState, useEffect } from 'react';
import Swipe from './swipe.js';
import classNames from 'classnames';
import './App.css';

const App = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiperConfigured, setSwiperConfigured] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const ref = useCallback(node => {
    if (node !== null) {
      setSwiper(new Swipe(node));
    }
  }, []);

  useEffect(() => {
    if (swiper && !swiperConfigured) {
      swiper.onLeft(() => {
        setShowDeleteButton(true);
        return true;
      });
      swiper.onRight(() => {
        setShowDeleteButton(false);
        return true;
      });
      setSwiperConfigured(true);
    }
  });

  return (
    <div className="App">
      <section className="App-header">
      <div 
        className={classNames('slide', showDeleteButton && 'swipeProductOrder', !showDeleteButton && 'swipeProductOrderII')}
        ref={ref}
      >
        Item
      </div>
      </section>
    </div>
  );
}

export default App;