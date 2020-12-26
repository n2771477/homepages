import React from 'react';
import { Link } from 'umi';

export const Nav: React.FC<{ nav: Array<string> }> = ({ nav }) => {
  return (
    <section className="navbar-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" to="#">
                <img src={require('../assets/images/logo.svg')} alt="Logo" />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTwo"
                aria-controls="navbarTwo"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarTwo"
              >
                <ul className="navbar-nav m-auto">
                  {nav.map((data, index) => {
                    return (
                      <li className={`nav-item ${index === 0 ? 'active' : ''}`}>
                        <a className="page-scroll" href={`#${data}`}>
                          {data}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="navbar-btn d-none d-sm-inline-block">
                <ul>
                  <li>
                    <Link className="solid" to="#">
                      Download
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
