import {BrowserRouter, Route, Routes } from "react-router-dom";
import Dizimista from '../Pages/Dizimista'

const RouterList = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/dizimista" element={<Dizimista />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouterList;