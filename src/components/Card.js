import React, { useState } from "react";
// import { GrFavorite } from "react-icons/gr";

import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let allcourse = props.courses;
  // console.log(allcourse);
  let des = allcourse.description.slice(0, 100);
  // console.log(des);
  let likedCourses = props.liked;
  let setLikedCourses = props.setLiked;

  // const [des, setDes] = useState('');
  //   function printObject() {
  //     console.log(`HAHA alo a meee ${allcourse.title}`);
  //   }
  //   printObject();

  //like Unlike Habdler

  function clickHandler() {
    // console.log("all course id ", allcourse.id);
    if (likedCourses.includes(allcourse.id)) {
      setLikedCourses((prev) =>
        prev.filter((cid) => {
          return cid !== allcourse.id;
        })
      );
      toast.warning("liked Removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses(allcourse.id);
      } else {
        setLikedCourses((prev) => [...prev, allcourse.id]);
        // console.log(likedCourses);
      }
      toast.success("liked SuccessFully");
    }
  }

  return (
    <div className="bg bg-slate-600 rounded overflow-hidden shadow-2xl hover:border-2">
      <div className="img-container">
        <img className="img" src={allcourse.image.url} alt=""></img>
        <div className="btn">
          <button className="original-btn" onClick={clickHandler}>
            {likedCourses.includes(allcourse.id) ? (
              <FcLike></FcLike>
            ) : (
              <FcLikePlaceholder></FcLikePlaceholder>
            )}
          </button>
        </div>
      </div>

      <div className="title">{allcourse.title}</div>
      <div className="text-sm my-10px text-white text-center  p-2 ">
        {des}...
      </div>
    </div>
  );
}

export default Card;
