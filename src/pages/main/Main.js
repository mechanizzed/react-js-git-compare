import React from 'react';

import logo from '../../assets/images/logo.png';

const Main = () => (
  <div>
    <img src={logo} alt="Github Compare" />
    <form>
      <input type="text" placeholder="user/repository" />
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Main;
