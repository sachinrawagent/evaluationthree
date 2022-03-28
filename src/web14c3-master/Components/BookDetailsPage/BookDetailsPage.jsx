import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setDetail(response.data);
      })
      .catch(() => {
        navigate("/notfound");
      });
  }, []);
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{detail.title}</h2>
        <img
          className="image"
          src={detail.imageUrl}
          alt="#"
          style={{ width: "20%" }}
        />
        <div className="author">{detail.author}</div>
        <div className="description">{detail.description}</div>
        <div className="price">{detail.price}</div>
        <div className="section">{detail.section}</div>
        <div className="isbnNumber">{detail.isbnNumber}</div>
        <ul className="reviews">
          <li>{detail.reviews + " "}</li>
        </ul>
      </div>
    </>
  );
};
