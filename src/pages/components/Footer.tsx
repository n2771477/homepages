import React from 'react';
import { Link } from 'umi';

export const Footer: React.FC<{ email: string; phone: string }> = ({
  email,
  phone,
}) => {
  const niho = {};
  return (
    <>
      <section className="footer-area footer-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="footer-logo text-center">
                <Link className="mt-30" to="index.html">
                  <img src={require('../assets/images/logo.svg')} alt="Logo" />
                </Link>
              </div>
              <ul className="social text-center mt-60">
                <li>
                  <Link to="https://facebook.com/uideckHQ">
                    <i className="lni lni-facebook-filled"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/uideckHQ">
                    <i className="lni lni-twitter-original"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://instagram.com/uideckHQ">
                    <i className="lni lni-instagram-original"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="lni lni-Linkedin-original"></i>
                  </Link>
                </li>
              </ul>
              <div className="footer-support text-center">
                <span className="number">{phone}</span>
                <span className="mail">{email}</span>
              </div>
              <div className="copyright text-center mt-35">
                <p className="text">
                  Designed by{' '}
                  <Link to="https://uideck.com" rel="nofollow">
                    UIdeck
                  </Link>{' '}
                  and Built-with{' '}
                  <Link rel="nofollow" to="https://Linkyroui.com">
                    Ayro UI
                  </Link>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link to="#" className="back-to-top">
        <i className="lni lni-chevron-up"></i>
      </Link>
    </>
  );
};
