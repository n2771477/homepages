import React from 'react';
import { Link } from 'umi';
interface Person {
  name: string;
  money: number;
}
export const Pricing: React.FC<{
  titel: string;
  text: string;
  content: Array<Person>;
}> = ({ titel, text, content }) => {
  return (
    <section id="pricing" className="pricing-area ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center pb-25">
              <h3 className="title">{titel}</h3>
              <p className="text">{text}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {content.map(({ name, money }) => {
            return (
              <div className="col-lg-4 col-md-7 col-sm-9">
                <div className="pricing-style mt-30">
                  <div className="pricing-icon text-center">
                    <img src={require('../assets/images/basic.svg')} alt="" />
                  </div>
                  <div className="pricing-header text-center">
                    <h5 className="sub-title">name</h5>
                    <p className="month">
                      <span className="price">$ {money}</span>/month
                    </p>
                  </div>
                  <div className="pricing-list">
                    <ul>
                      <li>
                        <i className="lni lni-check-mark-circle"></i> Carefully
                        crafted components
                      </li>
                      <li>
                        <i className="lni lni-check-mark-circle"></i> Amazing
                        page examples
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
            );
          })}
          {/**/}
        </div>
      </div>
    </section>
  );
};
