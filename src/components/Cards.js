import { useState } from "react";
import Card from "./Card";

function Cards({ courses, category }) {
  const [liked, setLiked] = useState([]);
  console.log("courses are ", courses);
  function getCourses() {
    if (category === "All") {
      let getAllCourses = [];

      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((value) => {
          getAllCourses.push(value);
        });
      });
      return getAllCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="cards">
      {getCourses().map((maper) => {
        return (
          <Card
            key={maper.id}
            courses={maper}
            liked={liked}
            setLiked={setLiked}
          ></Card>
        );
      })}
    </div>
  );
}

export default Cards;
