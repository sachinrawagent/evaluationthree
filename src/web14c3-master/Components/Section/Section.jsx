import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
export const Section = () => {
  const [section, setSection] = useState([]);
  const {sec}=useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/books`).then((res) => {
      const data = res.data.filter((el) => {
        return el.section === sec;
      });
      console.log(data);
      setSection([...data]);
    });
  }, [sec]);
  const handleSort = (data) => {
    setSection([...data]);
  };
  const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  `;
  return (
    <>
      <h2 style={{ textAlign: "center" }}>{sec}</h2>
      <SortAndFilterButtons handleSort={handleSort} books={section} />
      <Main className="sectionContainer">
        {section.map((el) => (
          <BookCard
            key={el.id}
            id={el.id}
            imageUrl={el.image_url}
            title={el.title}
            price={el.price}
          />
        ))}
      </Main>
    </>
  );
};
