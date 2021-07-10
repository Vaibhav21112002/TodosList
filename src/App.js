import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Todos from "./components/todos";

const App = () => {
  
  return (
    <div>
      <Header title="My Todays Work" />
      <div container>
        <Todos />
      </div>
      <Footer />
    </div>
  );
};

export default App;
