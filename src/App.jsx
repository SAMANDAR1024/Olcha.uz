import { Route, Routes } from "react-router";
// import Cards from "./Components/Cards/Cards";
import Header from "./Components/Header/Header";
import Main from "./Components/Maiin/Main";
import Navbar from "./Components/Navbar/Navbar";
import CardTitle from "./Components/Cards/CardTitle";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cardtitle/:alias" element={<CardTitle />} />
      </Routes>
   
    </>
  );
}

export default App;
