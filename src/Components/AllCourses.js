import React from "react";
import './AllCourses.css';
import CourseCard from "./CourseCard";

function AllCourses(props) {
    const courses = props.courses;
    const filterTitle = props.filterTitle;

    let listOfAllCourses = [];
    //returns you a list of all courses received from the api response
    function getCourses() {
        if (filterTitle === "All") {
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    listOfAllCourses.push(course);
                })
            })
        }
        else {
            return courses[filterTitle];
        }

        return listOfAllCourses;
    }
    return (
        <div className="courses-outer-box">
            {getCourses().map((course) => <CourseCard key={course.id} courseData={course} />)}
        </div>
    )
}

export default AllCourses;