import React from 'react';

export const LeaveWord = (props: any) => {
  const niho = {};
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="contact-wrapper form-style-two pt-115">
          <h4 className="contact-title pb-10">
            <i className="lni lni-envelope"></i> Leave <span>A Message.</span>
          </h4>

          <form id="contact-form" action="assets/contact.php" method="post">
            <div className="row">
              <div className="col-md-6">
                <div className="form-input mt-25">
                  <label>Name</label>
                  <div className="input-items default">
                    <input name="name" type="text" placeholder="Name" />
                    <i className="lni lni-user"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-input mt-25">
                  <label>Email</label>
                  <div className="input-items default">
                    <input type="email" name="email" placeholder="Email" />
                    <i className="lni lni-envelope"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-input mt-25">
                  <label>Massage</label>
                  <div className="input-items default">
                    <textarea name="massage" placeholder="Massage"></textarea>
                    <i className="lni lni-pencil-alt"></i>
                  </div>
                </div>
              </div>
              <p className="form-message"></p>
              <div className="col-md-12">
                <div className="form-input light-rounded-buttons mt-30">
                  <button className="main-btn light-rounded-two">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
