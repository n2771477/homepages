import React from 'react';
import { Link } from 'umi';
interface Person {
  name: string;
  titel: string;
}
export const Team: React.FC<{
  titel: string;
  text: string;

  content: Array<Person>;
}> = ({ titel, text, content }) => {
  return (
    <section id="team" className="team-area pt-120 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center pb-30">
              <h3 className="title">{titel}</h3>
              <p className="text">{text}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {content.map(({ name, titel }, index) => {
            return (
              <div className="col-lg-4 col-sm-6">
                <div
                  className="team-style-eleven text-center mt-30 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="team-image">
                    <img
                      src={require(`../assets/images/team-${index + 1}.jpg`)}
                      alt="Team"
                    />
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
                            <i className="lni lni-linkedin-original"></i>
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
                      <Link to="#">{name}</Link>
                    </h4>
                    <span className="sub-title">{titel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
