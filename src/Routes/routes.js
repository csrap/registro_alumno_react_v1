import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pages from '../pages/pages';
import pdf from '../pages/pdf';
function RoutesPdf() {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" component={Pages} />
        <Route exact path="/pdf" component={pdf} />




      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPdf;