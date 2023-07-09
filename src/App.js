import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import AllCourses from "./Components/AllCourses";
import { apiUrl, filterData } from "./Components/Data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterData from "./Components/FilterData";
import './App.css';

function App() {
  const [courseData, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const fetchedData = await res.json();
        setdata(fetchedData.data);
      } catch (error) {
        toast("Something went wrong...");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header filterData={filterData} />
      <div className="page-outer">
        <FilterData filterData={filterData} />
        <AllCourses courses={courseData} />
      </div>
    </>
  );
}

export default App;
