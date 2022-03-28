export const SortAndFilterButtons = ({ handleSort }) => {
  // get all books when user lands on the page
  // populate them as mentioned below

  return (
    <div className="sortButtons">
      <button className="sortByTitleAsc" onClick={() => handleSort("titleAsc")}>sortByTitleAsc</button>
      <button className="sortByTitleDesc" onClick={() => handleSort("titleDesc")}>sortByTitleDesc</button>
      <button className="sortByPriceAsc" onClick={() => handleSort("priceAsc")}>sortByPriceAsc</button>
      <button  className="sortByPriceDesc" onClick={() => handleSort("priceDesc")}>sortByPriceDesc</button>

      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}
    </div>
  );
};
