import axios from "axios";
import { useEffect, useState } from "react";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components"
export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
  const [books,setBooks]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/books").then((response)=>{
      setBooks([...response.data]);
    })
  },[]);

  const [order,setOrder]=useState("ASC");
  const handlesort=(res)=>{
    if(order==="ASC"){
      const sorted=[...books].sort((a,b)=>(a[res]>b[res]?1:-1));
      setBooks(sorted);
      setOrder("DESC");
    }
    if(order==="DESC"){
      const sorted=[...books].sort((a,b)=>(a[res]<b[res]?1:-1));
      setBooks(sorted);
      setOrder("ASC");
    }
  }

  const Main = styled.div`
     display:grid;
     grid-template-columns:repeat(3,1fr);
     border:1px solid black;
     width:98%;
     gap:20px;
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          handlesort
        }
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {books.map((el)=>{
          return (
            <BookCard imageUrl={el.imageUrl} title={el.title} price={el.price} id={el.id}/>
          )
        })}
      </Main>
    </div>
  );
};
