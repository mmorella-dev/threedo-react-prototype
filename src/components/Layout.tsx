import React from 'react';
import { Outlet } from 'react-router-dom';
import Brand from './Brand/Brand';
import Navbar from './Navbar/Navbar';
import icon from '../../assets/robot_face.png';
import './Layout.css';

const Layout = () => (
  <>
    <aside id="sidebar">
      <Brand logo={icon} title="ThreeDo" subtitle="3D Print Manager Robot" />
      <Navbar />
    </aside>
    <main id="main">
      <Outlet />
    </main>
    <div id="bottomleft">Hello world!</div>
    <div id="bottom">Progress</div>
  </>
);

export default Layout;
