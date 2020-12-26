import React from 'react';
import { Link } from 'umi';

export const About = (props: any) => {
  const niho = {};
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="faq-content mt-45">
              <div className="about-title">
                <h6 className="sub-title">A Little More About Us</h6>
                <h4 className="title">
                  Frequently Asked Questions <br></br> About Our Site
                </h4>
              </div>
              <div className="about-accordion">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <Link
                        to="#"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Frequently Asked Question One
                      </Link>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p className="text">
                          Morbi vehicula arcu et pellentesque tincidunt. Nunc
                          ligula nulla, lobortis a elementum non, vulputate ut
                          arcu. Aliquam erat volutpat. Nullam lacinia felis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <Link
                        to="#"
                        className="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Frequently Asked Question Two
                      </Link>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p className="text">
                          Morbi vehicula arcu et pellentesque tincidunt. Nunc
                          ligula nulla, lobortis a elementum non, vulputate ut
                          arcu. Aliquam erat volutpat. Nullam lacinia felis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <Link
                        to="#"
                        className="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Frequently Asked Question Three
                      </Link>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p className="text">
                          Morbi vehicula arcu et pellentesque tincidunt. Nunc
                          ligula nulla, lobortis a elementum non, vulputate ut
                          arcu. Aliquam erat volutpat. Nullam lacinia felis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFore">
                      <Link
                        to="#"
                        className="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFore"
                        aria-expanded="false"
                        aria-controls="collapseFore"
                      >
                        Frequently Asked Question Four
                      </Link>
                    </div>
                    <div
                      id="collapseFore"
                      className="collapse"
                      aria-labelledby="headingFore"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p className="text">
                          Morbi vehicula arcu et pellentesque tincidunt. Nunc
                          ligula nulla, lobortis a elementum non, vulputate ut
                          arcu. Aliquam erat volutpat. Nullam lacinia felis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <Link
                        to="#"
                        className="collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Frequently Asked Question Five
                      </Link>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p className="text">
                          Morbi vehicula arcu et pellentesque tincidunt. Nunc
                          ligula nulla, lobortis a elementum non, vulputate ut
                          arcu. Aliquam erat volutpat. Nullam lacinia felis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-image mt-50">
              <img src={require('../assets/images/about.jpg')} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
