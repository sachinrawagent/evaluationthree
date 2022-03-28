import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
export const Home = () => {
  const [books, setBooks] = useState([]);
  // get all books when user lands on the page
  // populate them as mentioned below
  useEffect(() => {
    axios.get("http://localhost:8080/books").then((response) => {
      setBooks([...response.data]);
    });
  }, []);

  const [order, setOrder] = useState("ASC");

  const handleSort = (col) => {
    if (order === "ASC") {
      const sorted = [...books].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setBooks(sorted);
      setOrder("DESC");
    }
    if (order === "DESC") {
      const sorted = [...books].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setBooks(sorted);
      setOrder("ASC");
    }
  };

  const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid black;
    width: 80%;
    gap: 20px;
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {books.map((el) => {
          return (
            <BookCard
              id={el.id}
              imageUrl={el.imageUrl}
              title={el.title}
              description={el.description}
              price={el.price}
            />
          );
        })}
      </Main>
    </div>
  );
};
