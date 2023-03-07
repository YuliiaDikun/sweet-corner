import { Link, useLocation, useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { MainBtn, Score, Price, AdditionalCandies } from "../../components";
import { StyledMain, ImgWrapper, DescrWrapper, StyledP } from "./Sweet.styled";
import { PriceWrapper } from "../../components/Product/Product.styled";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
const SweetDetails = () => {
  const [sweet, setSweet] = useState(null);
  const [addCandy, setAddCandy] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/sweets";
  const { id } = useParams();

  const docRef = doc(db, "sweets", id);
  useEffect(() => {
    getDoc(docRef)
      .then((sweet) => setSweet(sweet.data()))
      .catch((err) => alert(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sweet) {
      const q = query(
        collection(db, "sweets"),
        where("category", "==", sweet.category)
      );
      getDocs(q).then((sweets) => {
        const updateSweets = sweets.docs
          .map((candy) => ({
            id: candy.id,
            ...candy.data(),
          }))
          .filter((candy) => candy.id !== id);
        setAddCandy(updateSweets);
      });
    }
  }, [sweet, id]);

  if (!sweet) return null;

  return (
    <main>
      <Link to={backLinkHref}>
        Back to sweets <MdOutlineArrowBackIosNew size={20} />
      </Link>
      
      <StyledMain>
        <ImgWrapper>
          <img src={sweet.img} alt={sweet.name} />
        </ImgWrapper>
        <DescrWrapper>
          <h2>{sweet.name}</h2>
          {sweet.full.map((par, i) => (
            <StyledP key={i}>{par}</StyledP>
          ))}
          <PriceWrapper>
            <Price price={sweet.price} />
            <Score scored={sweet.scored} />
          </PriceWrapper>
          <MainBtn />
        </DescrWrapper>
      </StyledMain>
      <AdditionalCandies addCandy={addCandy} />
    </main>
  );
};

export default SweetDetails;
