import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { MainContent,PageWrapper } from "./Sweet.styled";
import { ProductsList, Loader, Filter, Categories } from "../../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "react-router-dom";
import { Container } from "../../components/SharedLayout/SharedLayout.styled";
const SweetsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sweets, setSweets] = useState([]);
  const [filter, setFiler] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const category = searchParams.get("category") ?? "chocolate";
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

      .catch((err) => toast.error(err.message))
      .finally(setIsLoading(false));
    // eslint-disable-next-line
  }, []);

  const updateQueryString = (category) => {
    const nextParams = category !== "" ? { category } : {};
    setSearchParams(nextParams);
  };

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
    return arr.filter((candy) => candy.category === category);
  };

  const sorted = onFilteredSweets();
  const filtered = onCategoryOfSweets(sorted);
  return (
    <PageWrapper>
      <Container>
        {isLoading && <Loader />}
        <Filter updateFiler={setFiler} />
        <Categories setCategory={updateQueryString} urlParams={category} />
        <MainContent>          
          <ProductsList sweets={filtered} />
        </MainContent>
      </Container>
    </PageWrapper>
  );
};

export default SweetsPage;
