import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { ProductsList, Loader, Filter } from "../../components";
const SweetsPage = () => {
  const [sweets, setSweets] = useState([]);
  const [filter, setFiler] = useState('');
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
    if (filter === 'low-r') { 
      filteredSweets.sort((a, b) => a.scored - b.scored);
    }
    if (filter === "hight-r") { 
      filteredSweets.sort((a, b) => b.scored - a.scored);
    }
    return filteredSweets
  }
  const filtered = onFilteredSweets();

  return (
    <>
      {isLoading && <Loader />}
      <Filter updateFiler={setFiler } />
      <ProductsList sweets={filtered} />
    </>
  );
};

export default SweetsPage;
