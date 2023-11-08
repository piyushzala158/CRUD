import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './assets/Home.scss';
import {
  AiFillHeart,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineGlobal,
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlinePhone
} from 'react-icons/ai';
import Edit from './Edit';

function Home() {
  const [users, setUsers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [edit, setEdit] = useState([]);

  // Fetch users data
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      const res = response.data;
      res.map((obj) => {
        obj['toggler'] = false;
      });
      setUsers(res);
    });
  }, []);

  // handle like button

  const handleToggle = (e) => {
    users.map((user) => {
      if (user.id == e.id) {
        user.toggler = !user.toggler;
      }
    });
    const newData = [...users];
    setUsers(newData);
  };

  //open pop-up on edit button

  const handleShowPopup = (e) => {
    setEdit(e);
    setShowPopup(!showPopup);
  };

  //handle pop-up close button

  const handleClose = () => {
    setShowPopup(!showPopup);
  };

  //save edited data

  const handleSubmit = (e) => {
    setShowPopup(!showPopup);
    users.map((user) => {
      if (user.id == e.id) {
        user.name = e.name;
        user.email = e.email;
        user.phone = e.phone;
        user.website = e.website;
      }
    });
    const newData = [...users];
    setUsers(newData);
  };

  //handle delete button

  const handleDelete = (e) => {
    const newData = users.filter((user) => user.id !== e);
    setUsers(newData);
    console.log('delete', e);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {users.map((user, index) => (
          <div className="card col-12 col-lg-6 col-xl-3 " key={index}>
            <div className="text-center img-cover">
              <img
                className="card-img-top"
                src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happ`}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">
                <AiOutlineMail className="card-text-icons" />
                {user.email}
              </p>
              <p className="card-text">
                <AiOutlinePhone className="card-text-icons" />
                {user.phone}
              </p>
              <p className="card-text">
                <AiOutlineGlobal className="card-text-icons" />
                {user.website}
              </p>
            </div>
            <ul className="d-flex justify-content-around card-icons">
              <li className="card-icon-1">
                <button onClick={() => handleToggle(user)} className="heart-btn">
                  {user.toggler ? (
                    <AiFillHeart className="heart" />
                  ) : (
                    <AiOutlineHeart className="outline-heart" />
                  )}
                </button>
              </li>
              <li className="card-icon-2">
                <AiOutlineEdit onClick={() => handleShowPopup(user)} className="edit-icon" />
                {showPopup ? (
                  <Edit closePopup={handleClose} data={edit} handleSubmit={handleSubmit} />
                ) : null}
              </li>
              <li className="card-icon-3">
                <AiOutlineDelete onClick={() => handleDelete(user.id)} className="delete-icon" />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
