import React from 'react';
import { Link } from 'umi';

export const Pricing = (props: any) => {
  const niho = {};
  return (
    <section id="pricing" className="pricing-area ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center pb-25">
              <h3 className="title">Pricing Plans</h3>
              <p className="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="pricing-style mt-30">
              <div className="pricing-icon text-center">
                <img src={require('../assets/images/basic.svg')} alt="" />
              </div>
              <div className="pricing-header text-center">
                <h5 className="sub-title">Basic</h5>
                <p className="month">
                  <span className="price">$ 199</span>/month
                </p>
              </div>
              <div className="pricing-list">
                <ul>
                  <li>
                    <i className="lni lni-check-mark-circle"></i> Carefully
                    crafted components
                  </li>
                  <li>
                    <i className="lni lni-check-mark-circle"></i> Amazing page
                    examples
                  </li>
                </ul>
              </div>
              <div className="pricing-btn rounded-buttons text-center">
                <Link className="main-btn rounded-one" to="#">
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="pricing-style mt-30">
              <div className="pricing-icon text-center">
                <img src={require('../assets/images/pro.svg')} alt="" />
              </div>
              <div className="pricing-header text-center">
                <h5 className="sub-title">Pro</h5>
                <p className="month">
                  <span className="price">$ 399</span>/month
                </p>
              </div>
              <div className="pricing-list">
                <ul>
                  <li>
                    <i className="lni lni-check-mark-circle"></i> Carefully
                    crafted components
                  </li>
                  <li>
                    <i className="lni lni-check-mark-circle"></i> Amazing page
                    examples
                  </li>
                </ul>
              </div>
              <div className="pricing-btn rounded-buttons text-center">
                <Link className="main-btn rounded-one" to="#">
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="pricing-style mt-30">
              <div className="pricing-icon text-center">
                <img src={require('../assets/images/enterprise.svg')} alt="" />
              </div>
              <div className="pricing-header text-center">
                <h5 className="sub-title">Enterprise</h5>
                <p className="month">
                  <span className="price">$ 699</span>/month
                </p>
              </div>
              <div className="pricing-list">
                <ul>
                  <li>
                    <i className="lni lni-check-mark-circle"></i> Carefully
                    crafted components
                  </li>
                  <li>
                    <i className="lni lni-check-mark-circle"></i> Amazing page
                    examples
                  </li>
                </ul>
              </div>
              <div className="pricing-btn rounded-buttons text-center">
                <Link className="main-btn rounded-one" to="#">
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
