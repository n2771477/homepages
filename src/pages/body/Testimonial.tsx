import React from 'react';

export const Testimonial = (props: any) => {
  const niho = {};
  return (
    <section id="testimonial" className="testimonial-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="testimonial-left-content mt-45">
              <h6 className="sub-title">Testimonials</h6>
              <h4 className="title">
                What Clients Says <br></br> About Us
              </h4>
              <ul className="testimonial-line">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p className="text">
                Duis et metus et massa tempus lacinia. className aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Maecenas ultricies, orci molestie blandit interdum.{' '}
                <br></br> <br></br> ipsum ante pellentesque nisl, eget mollis
                turpis quam nec eros. ultricies, orci molestie blandit interdum.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-right-content mt-50">
              <div className="quota">
                <i className="lni lni-quotation"></i>
              </div>
              <div className="testimonial-content-wrapper testimonial-active">
                <div className="single-testimonial">
                  <div className="testimonial-text">
                    <p className="text">
                      “Praesent scelerisque, odio eu fermentum malesuada, nisi
                      arcu volutpat nisl, sit amet convallis nunc turp.”
                    </p>
                  </div>
                  <div className="testimonial-author d-sm-flex justify-content-between">
                    <div className="author-info d-flex align-items-center">
                      <div className="author-image">
                        <img
                          src={require('../assets/images/author-1.jpg')}
                          alt="author"
                        />
                      </div>
                      <div className="author-name media-body">
                        <h5 className="name">Mr. Jems Bond</h5>
                        <span className="sub-title">CEO Mbuild Firm</span>
                      </div>
                    </div>
                    <div className="author-review">
                      <ul className="star">
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                      </ul>
                      <span className="review">( 7 Reviews )</span>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testimonial-text">
                    <p className="text">
                      “Praesent scelerisque, odio eu fermentum malesuada, nisi
                      arcu volutpat nisl, sit amet convallis nunc turp.”
                    </p>
                  </div>
                  <div className="testimonial-author d-sm-flex justify-content-between">
                    <div className="author-info d-flex align-items-center">
                      <div className="author-image">
                        <img
                          src={require('../assets/images/author-2.jpg')}
                          alt="author"
                        />
                      </div>
                      <div className="author-name media-body">
                        <h5 className="name">Mr. Jems Bond</h5>
                        <span className="sub-title">CEO Mbuild Firm</span>
                      </div>
                    </div>
                    <div className="author-review">
                      <ul className="star">
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                      </ul>
                      <span className="review">( 7 Reviews )</span>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="testimonial-text">
                    <p className="text">
                      “Praesent scelerisque, odio eu fermentum malesuada, nisi
                      arcu volutpat nisl, sit amet convallis nunc turp.”
                    </p>
                  </div>
                  <div className="testimonial-author d-sm-flex justify-content-between">
                    <div className="author-info d-flex align-items-center">
                      <div className="author-image">
                        <img
                          src={require('../assets/images/author-3.jpg')}
                          alt="author"
                        />
                      </div>
                      <div className="author-name media-body">
                        <h5 className="name">Mr. Jems Bond</h5>
                        <span className="sub-title">CEO Mbuild Firm</span>
                      </div>
                    </div>
                    <div className="author-review">
                      <ul className="star">
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                        <li>
                          <i className="lni lni-star-filled"></i>
                        </li>
                      </ul>
                      <span className="review">( 7 Reviews )</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
