import React from 'react';
import { Link } from 'umi';

export const Team = (props: any) => {
  const niho = {};
  return (
    <section id="team" className="team-area pt-120 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center pb-30">
              <h3 className="title">Meet The Team</h3>
              <p className="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div
              className="team-style-eleven text-center mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              <div className="team-image">
                <img src={require('../assets/images/team-1.jpg')} alt="Team" />
              </div>
              <div className="team-content">
                <div className="team-social">
                  <ul className="social">
                    <li>
                      <Link to="#">
                        <i className="lni lni-facebook-filled"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-twitter-original"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-Linkedin-original"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4 className="team-name">
                  <Link to="#">Jeffery Riley</Link>
                </h4>
                <span className="sub-title">Art Director</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="team-style-eleven text-center mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              <div className="team-image">
                <img src={require('../assets/images/team-2.jpg')} alt="Team" />
              </div>
              <div className="team-content">
                <div className="team-social">
                  <ul className="social">
                    <li>
                      <Link to="#">
                        <i className="lni lni-facebook-filled"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-twitter-original"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-Linkedin-original"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4 className="team-name">
                  <Link to="#">Riley Beata</Link>
                </h4>
                <span className="sub-title">Web Developer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="team-style-eleven text-center mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              <div className="team-image">
                <img src={require('../assets/images/team-3.jpg')} alt="Team" />
              </div>
              <div className="team-content">
                <div className="team-social">
                  <ul className="social">
                    <li>
                      <Link to="#">
                        <i className="lni lni-facebook-filled"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-twitter-original"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-Linkedin-original"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4 className="team-name">
                  <Link to="#">Mark A. Parker</Link>
                </h4>
                <span className="sub-title">UX Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
