import logo from "./logo.svg";
import "./App.css";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { filterData, apiUrl } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "./components/Loader";

function App() {
  const [courses, setCourse] = useState(null);
  const [loader, setLoader] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  console.log("first categorty id  ..", category);

  useEffect(() => {
    async function fetchData() {
      setLoader(true);
      try {
        const res = await fetch(apiUrl);
        const uData = await res.json();
        console.log(uData.data);
        setCourse(uData.data);
        setLoader(false);
      } catch (error) {
        toast.error("Somerthing went wrong");
      }
    }
    fetchData();
  }, []);
  const fdata = filterData;
  return (
    <div className=" bg-slate-400 h-screen">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-slate-400">
        <div>
          <Filter
            filterData={fdata}
            category={category}
            setCategory={setCategory}
          ></Filter>
        </div>
        <div>
          {loader ? (
            <Loader></Loader>
          ) : (
            <Cards courses={courses} category={category}></Cards>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
