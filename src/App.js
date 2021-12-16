import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Home from "./Home";
import PhotoDetails from "./PhotoDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/photo/:id" element={<PhotoDetails />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
