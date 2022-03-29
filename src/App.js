import React from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    // In order to use the concept of Routing we wrap the components inside the BrowserRouter component, which we get from "react-router-dom" module. 
    // "basename" - is the default path for the application, if the basename is defined then the other pages will redirect to you to the content of the page thro basename tag in the url
    // menaing if you click on the about page then it will render the About page but the url will look something like this "domain/basename/about", similary if you click on Details page "domain/basename/details"
    <BrowserRouter basename="/">

      <div className="App">
        <Header />
      </div>

      {/* We don't use Anchor Tag in the concept of routing to take the user to another page and that is because if you do then the whole application will get re-rendered everytime you click on a page button. */}
      {/* Instead we use Link Tag, it does the same thing w/o the re-rendering of whole application.. */}

      <Routes>
        {/* Defining the individual Route for each page that is to be displayed.. */}
        <Route path="/" element={ <Home /> } />
        <Route path="details" element={ <Details /> } /> 
      </Routes>

    </BrowserRouter>
  );
}

export default App;