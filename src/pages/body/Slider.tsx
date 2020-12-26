import React from 'react';
import { Link } from 'umi';
interface Person {
  titel: string;
  text: string;
}
export const Slider: React.FC<{ sliter: Array<Person> }> = ({ sliter }) => {
  // console.log(nav);
  return (
    <section id="home" className="slider_area">
      <div id="carouselThree" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#carouselThree"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselThree" data-slide-to="1"></li>
          <li data-target="#carouselThree" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          {sliter.map(({ title, text }, index) => {
            return (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="slider-content">
                        <h1 className="title">{title}</h1>
                        <p className="text">{text}</p>
                        <ul className="slider-btn rounded-buttons">
                          <li>
                            <Link className="main-btn rounded-one" to="#">
                              GET STARTED
                            </Link>
                          </li>
                          <li>
                            <Link className="main-btn rounded-two" to="#">
                              DOWNLOAD
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-image-box d-none d-lg-flex align-items-end">
                  <div className="slider-image">
                    <img
                      src={require(`../assets/images/slider/${index + 1}.png`)}
                      alt="Hero"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselThree"
          role="button"
          data-slide="prev"
        >
          <i className="lni lni-arrow-left"></i>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselThree"
          role="button"
          data-slide="next"
        >
          <i className="lni lni-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};
