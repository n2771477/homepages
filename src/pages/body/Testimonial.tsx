import React from 'react';
interface Person {
  text: string;
  name: string;
  titel: string;
}
export const Testimonial: React.FC<{
  titel: string;
  text: string;
  describe: string;

  content: Array<Person>;
}> = ({ titel, text, describe, content }) => {
  const niho = {};
  return (
    <section id="testimonial" className="testimonial-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="testimonial-left-content mt-45">
              <h6 className="sub-title">{titel}</h6>
              <h4 className="title">{text}</h4>
              <ul className="testimonial-line">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p className="text">{describe}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-right-content mt-50">
              <div className="quota">
                <i className="lni lni-quotation"></i>
              </div>
              <div className="testimonial-content-wrapper testimonial-active">
                {content.map(({ text, name, titel }, index) => {
                  return (
                    <div className="single-testimonial">
                      <div className="testimonial-text">
                        <p className="text">{text}</p>
                      </div>
                      <div className="testimonial-author d-sm-flex justify-content-between">
                        <div className="author-info d-flex align-items-center">
                          <div className="author-image">
                            <img
                              src={require(`../assets/images/author-${
                                index + 1
                              }.jpg`)}
                              alt="author"
                            />
                          </div>
                          <div className="author-name media-body">
                            <h5 className="name">{name}</h5>
                            <span className="sub-title">{titel}</span>
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
