import React from 'react';
import { Link } from 'umi';
interface Person {
  titel: string;
  text: string;
}
export const Features: React.FC<{
  title: string;
  text: string;
  content: Array<Person>;
}> = ({ title, text, content }) => {
  const niho = {};
  return (
    <section id="services" className="features-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center pb-10">
              <h3 className="title">{title}</h3>
              <p className="text">{text}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {content.map(({ titel, text }) => {
            return (
              <div className="col-lg-4 col-md-7 col-sm-9">
                <div className="single-features mt-40">
                  <div className="features-title-icon d-flex justify-content-between">
                    <h4 className="features-title">
                      <Link to="#">{titel}</Link>
                    </h4>
                    <div className="features-icon">
                      <i className="lni lni-brush"></i>
                      <img
                        className="shape"
                        src={require('../assets/images/f-shape-1.svg')}
                        alt="Shape"
                      />
                    </div>
                  </div>
                  <div className="features-content">
                    <p className="text">
                      {text}
                      {text}
                    </p>
                    <Link className="features-btn" to="#">
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="single-features mt-40">
              <div className="features-title-icon d-flex justify-content-between">
                <h4 className="features-title">
                  <Link to="#">Graphics Design</Link>
                </h4>
                <div className="features-icon">
                  <i className="lni lni-brush"></i>
                  <img
                    className="shape"
                    src={require('../assets/images/f-shape-1.svg')}
                    alt="Shape"
                  />
                </div>
              </div>
              <div className="features-content">
                <p className="text">
                  Short description for the ones who look for something new.
                  Short description for the ones who look for something new.
                </p>
                <Link className="features-btn" to="#">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="single-features mt-40">
              <div className="features-title-icon d-flex justify-content-between">
                <h4 className="features-title">
                  <Link to="#">Website Design</Link>
                </h4>
                <div className="features-icon">
                  <i className="lni lni-layout"></i>
                  <img
                    className="shape"
                    src={require('../assets/images/f-shape-1.svg')}
                    alt="Shape"
                  />
                </div>
              </div>
              <div className="features-content">
                <p className="text">
                  Short description for the ones who look for something new.
                  Short description for the ones who look for something new.
                </p>
                <Link className="features-btn" to="#">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="single-features mt-40">
              <div className="features-title-icon d-flex justify-content-between">
                <h4 className="features-title">
                  <Link to="#">Digital Marketing</Link>
                </h4>
                <div className="features-icon">
                  <i className="lni lni-bolt"></i>
                  <img
                    className="shape"
                    src={require('../assets/images/f-shape-1.svg')}
                    alt="Shape"
                  />
                </div>
              </div>
              <div className="features-content">
                <p className="text">
                  Short description for the ones who look for something new.
                  Short description for the ones who look for something new.
                </p>
                <Link className="features-btn" to="#">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
