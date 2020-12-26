import React from 'react';
import { Link } from 'umi';
import { LeaveWord } from './LeaveWord';
export const Contact = (props: any) => {
  const niho = {};
  return (
    <section id="contact" className="contact-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center pb-30">
              <h3 className="title">Contact</h3>
              <p className="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-map mt-30">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="contact-info pt-30">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-contact-info contact-color-1 mt-30 d-flex ">
                <div className="contact-info-icon">
                  <i className="lni lni-map-marker"></i>
                </div>
                <div className="contact-info-content media-body">
                  <p className="text">
                    {' '}
                    Elizabeth St, Melbourne<br></br>1202 Australia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-contact-info contact-color-2 mt-30 d-flex ">
                <div className="contact-info-icon">
                  <i className="lni lni-envelope"></i>
                </div>
                <div className="contact-info-content media-body">
                  <p className="text">hello@ayroui.com</p>
                  <p className="text">support@uideck.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-contact-info contact-color-3 mt-30 d-flex ">
                <div className="contact-info-icon">
                  <i className="lni lni-phone"></i>
                </div>
                <div className="contact-info-content media-body">
                  <p className="text">+333 789-321-654</p>
                  <p className="text">+333 985-458-609</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LeaveWord />
      </div>
    </section>
  );
};
