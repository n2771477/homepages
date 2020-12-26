import React from 'react';
import { Link } from 'umi';
interface Person {
  titel: string;
  text: string;
  rows: Array<string>;
  control: Array<string>;
}
export const Portfolio: React.FC<Person> = ({ titel, text, rows, control }) => {
  return (
    <section id="portfolio" className="portfolio-area portfolio-four pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center pb-10">
              <h3 className="title">{titel}</h3>
              <p className="text">{text}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="portfolio-menu text-center mt-50">
              <ul>
                <li data-filter="*" className="active">
                  ALL WORK
                </li>
                {control.map((data) => {
                  return <li data-filter={`.${data}-4`}>{data}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="row no-gutters grid mt-50">
              {rows.map((data, index) => {
                return (
                  <div className={`col-lg-4 col-sm-6 ${data}`}>
                    <div className="single-portfolio">
                      <div className="portfolio-image">
                        <img
                          src={require(`../assets/images/portfolio/${
                            index + 1
                          }.png`)}
                          alt=""
                        />
                        <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                          <div className="portfolio-content">
                            <div className="portfolio-icon">
                              <Link
                                className="image-popup"
                                to={`assets/images/portfolio/${index + 1}.png`}
                              >
                                <i className="lni lni-zoom-in"></i>
                              </Link>
                              <img
                                src={require('../assets/images/portfolio/shape.svg')}
                                alt="shape"
                                className="shape"
                              />
                            </div>
                            <div className="portfolio-icon">
                              <Link to="#">
                                <i className="lni lni-Link"></i>
                              </Link>
                              <img
                                src={require('../assets/images/portfolio/shape.svg')}
                                alt="shape"
                                className="shape"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
