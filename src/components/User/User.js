import React from 'react';
import PropTypes from 'prop-types';
import style from './User.module.css'

function User({ phone, email, name, website }) {
  return (
    <div className={style.userDiv}>
      phone: {phone} | email: {email} | name: {name} | website: {website}
    </div>
  );
}

User.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  website: PropTypes.string
};

User.defaultProps = {
  phone: '098**********',
  email: 'sample@gmail.com',
  name: 'defaultName',
  website: 'defaultWebsite'
};

export default User;