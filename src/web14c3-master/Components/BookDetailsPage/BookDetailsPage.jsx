import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const navigate=useNavigate();
  const { id }=useParams();
  const [detail,setDetail]=useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8080/books/${id}`).then((response)=>{
      setDetail(response.data);
    }).catch(()=>{
       navigate("/error")
    })
  },[]);

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{detail.title}</h2>
        <img className="image" src={detail.imageUrl} alt="#" />
        <div className="author">{detail.author}</div>
        <div className="description">{detail.description}</div>
        <div className="price">{detail.price}</div>
        <div className="section">{detail.section}</div>
        <div className="isbnNumber">{detail.isbnNumber}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
        </ul>
      </div>
    </>
  );
};
