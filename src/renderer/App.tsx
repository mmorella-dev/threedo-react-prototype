import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import RouteItems from '../RouteItems';

import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {RouteItems.map((r) => (
            <Route
              index={r.index && true}
              key={r.route}
              path={r.route}
              element={r.element()}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}
