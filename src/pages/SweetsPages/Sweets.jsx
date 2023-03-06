import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { MainContent } from "./Sweet.styled";
import { ProductsList, Loader, Filter, Categories } from "../../components";
const SweetsPage = () => {
  const [sweets, setSweets] = useState([]);
  const [filter, setFiler] = useState("");
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const sweetsCollectionRef = collection(db, "sweets");
  useEffect(() => {
    getDocs(sweetsCollectionRef)
      .then((sweets) => {
        const updateSweets = sweets.docs.map((candy) => ({
          id: candy.id,
          ...candy.data(),
        }));
        setSweets(updateSweets);
      })

      .catch(alert)
      .finally(setIsLoading(false));
    // eslint-disable-next-line
  }, []);
  const onFilteredSweets = () => {
    const filteredSweets = [...sweets];
    if (!filter) return sweets;
    if (filter === "low-p") {
      filteredSweets.sort((a, b) => a.price - b.price);
    }
    if (filter === "hight-p") {
      filteredSweets.sort((a, b) => b.price - a.price);
    }
    if (filter === "low-r") {
      filteredSweets.sort((a, b) => a.scored - b.scored);
    }
    if (filter === "hight-r") {
      filteredSweets.sort((a, b) => b.scored - a.scored);
    }
    return filteredSweets;
  };
  const onCategoryOfSweets = (arr) => { 
    if (!category) return arr;
    return arr.filter(candy => candy.category === category)
  }
  const sorted = onFilteredSweets();
  const filtered = onCategoryOfSweets(sorted);
  return (
    <>
      {isLoading && <Loader />}
      <Filter updateFiler={setFiler} />
      <MainContent>
        <Categories setCategory={setCategory } />
        <ProductsList sweets={filtered} />
      </MainContent>
    </>
  );
};

export default SweetsPage;
