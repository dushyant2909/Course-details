import React, { useState } from "react";
import './CourseCard.css';
import { FcLike } from "react-icons/fc";

function CourseCard(props) {
    const [clickReadMore, setReadMore] = useState(false);
    const courseData = props.courseData;

    function clickHandler() {
        setReadMore(!clickReadMore);
    }

    const shortDescription = `${courseData.description.substring(0, 150)}..... `;

    return (
        <div className={`card text-light course-card ${clickReadMore ? "expanded" : ""}`}>
            <div className="card-img-top">
                <img className="course-image" src={courseData.image.url} alt={courseData.title} />
            </div>
            <div>
                <button className="btn like-btn"><FcLike fontSize="1.7rem" /></button>
            </div>
            <div className="card-body">

                <div className="card-title"><h5>{courseData.title}</h5></div>
                <p className="card-text">
                    {clickReadMore ? courseData.description : shortDescription}
                    <span className="read-more" onClick={clickHandler}>
                        {clickReadMore ? "Show Less" : "Read more"}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default CourseCard;
