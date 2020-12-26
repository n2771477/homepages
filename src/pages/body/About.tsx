import React from 'react';
import { Link } from 'umi';
interface Person {
  question: string;
  text: string;
}
export const About: React.FC<{
  titel: string;
  text: string;
  content: Array<Person>;
}> = ({ titel, text, content }) => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="faq-content mt-45">
              <div className="about-title">
                <h6 className="sub-title">{titel}</h6>
                <h4 className="title">{text}</h4>
              </div>
              <div className="about-accordion">
                <div className="accordion" id="accordionExample">
                  {content.map(({ question, text }, index) => {
                    return (
                      <div className="card">
                        <div className="card-header" id={`heading${index}`}>
                          <a
                            href="#"
                            className="collapsed"
                            data-toggle="collapse"
                            data-target={`#collapse${index}`}
                            aria-expanded={index === 0 ? 'true' : 'false'}
                            aria-controls={`collapse${index}`}
                          >
                            {question}
                          </a>
                        </div>

                        <div
                          id={`collapse${index}`}
                          className="collapse"
                          aria-labelledby={`heading${index}`}
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p className="text">{text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
