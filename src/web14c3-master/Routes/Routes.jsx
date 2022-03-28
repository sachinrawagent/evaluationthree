import { Routes, Route } from "react-router";
import { BookCard } from "../Components/BookCard/BookCard";
import { Home } from "../Components/Home/Home";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { Navbar } from "../Components/Navbar/Navbar";
import { Section } from "../Components/Section/Section";
import { NotFound } from "../Components/NotFound/NotFound";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="/section/:sec" element={<Section />} />

        <Route exact path="/detail/:id" element={<BookDetailsPage />} />

        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
      </Routes>
    </>
  );
};
