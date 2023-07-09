import React from "react";
import './AllCourses.css';
import CourseCard from "./CourseCard";

function AllCourses(props) {
    const courses = props.courses;
    let listOfAllCourses = [];
    //returns you a list of all courses received from the api response
    function getCourses() {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                listOfAllCourses.push(course);
            })
        })
        return listOfAllCourses;
    }
    return (
        <div className="courses-outer-box">
            {getCourses().map((course) => <CourseCard key={course.id} courseData = {course} />)}
        </div>
    )
}

export default AllCourses;