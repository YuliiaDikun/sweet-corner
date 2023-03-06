import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { ProductsList, Loader } from "../../components";
const SweetsPage = () => {
  const [sweets, setSweets] = useState([]);
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

  return (
    <>
      {isLoading && <Loader />}
      <ProductsList sweets={sweets} />
    </>
  );
};

export default SweetsPage;
