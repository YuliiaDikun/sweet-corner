import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { MainBtn, Score, Price } from "../../components";
import { StyledMain,ImgWrapper, DescrWrapper, StyledP} from "./Sweet.styled";
import { PriceWrapper } from "../../components/Product/Product.styled";
const SweetDetails = () => {
  const [sweet, setSweet] = useState(null);
  const { id } = useParams();

  const docRef = doc(db, "sweets", id);
  useEffect(() => {
    getDoc(docRef)
      .then((sweet) => setSweet(sweet.data()))
      .catch((err) => alert(err));
  }, [docRef]);

  if (!sweet) return null;

  return (
    <StyledMain>
      <ImgWrapper>
        <img src={sweet.img} alt={sweet.name}/>
      </ImgWrapper>
      <DescrWrapper>
        <h2>{sweet.name}</h2>
        {sweet.full.map(par => (
          <StyledP>{ par}</StyledP>
        ))}
        <PriceWrapper>          
          <Price price={sweet.price} />
          <Score scored={sweet.scored} />
        </PriceWrapper>
        <MainBtn />
      </DescrWrapper>
    </StyledMain>
  );
};

export default SweetDetails;
