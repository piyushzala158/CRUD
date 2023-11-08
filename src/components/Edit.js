import React, { useState } from 'react';
import './assets/Edit.scss';

function Edit(props) {
  const user = props.data;
  const id = user.id;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);

  return (
    <div>
      <div className="popup">
        <div className="popup_inner">
          <div className="popup-header d-flex justify-content-between align-items-center">
            <h3 className="popup-title">Basic Modal</h3>
            <button className="popup-header-cancle" onClick={props.closePopup}>
              X
            </button>
          </div>
          <div className="popup-body">
            <form className="edit-form">
              <div className=" form-items">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-items">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-items">
                <label>Phone</label>
                <input
                  type="phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-items">
                <label>Website</label>
                <input
                  type="text"
                  className="form-control"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="popup-footer">
            <button className="btn popup-cancle" onClick={props.closePopup}>
              Close
            </button>
            <button
              type="submit"
              className="btn popup-submit"
              onClick={() => props.handleSubmit({ id, name, email, phone, website })}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
