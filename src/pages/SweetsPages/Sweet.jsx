import { useLocation, useParams } from "react-router-dom";
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
import {
  MainBtn,
  Score,
  Price,
  AdditionalCandies,
  Loader,
} from "../../components";
import {
  PageWrapper,
  StyledMain,
  ImgWrapper,
  DescrWrapper,
  StyledP,
  GoBackLink,
  StyledProductTitle
} from "./Sweet.styled";
import { Container } from "../../components/SharedLayout/SharedLayout.styled";
import { PriceWrapper } from "../../components/Product/Product.styled";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SweetDetails = () => {
  const [sweet, setSweet] = useState(null);
  const [addCandy, setAddCandy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/sweets";

  const { id } = useParams();

  const docRef = doc(db, "sweets", id);
  useEffect(() => {
    getDoc(docRef)
      .then((sweet) => {
        const candy = sweet.data();
        candy.id = id;
        setSweet(candy);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (sweet) {
      const q = query(
        collection(db, "sweets"),
        where("category", "==", sweet.category)
      );
      getDocs(q)
        .then((sweets) => {
          const updateSweets = sweets.docs
            .map((candy) => ({
              id: candy.id,
              ...candy.data(),
            }))
            .filter((candy) => candy.id !== id);
          setAddCandy(updateSweets);
        })
        .catch((error) => {
          toast.error(error.message);
        })
        .finally(() => setIsLoading(false));
    }
  }, [sweet, id]);

  if (!sweet) return null;

  return (
    <PageWrapper>
      <Container>
        <GoBackLink to={backLinkHref}>
          <MdOutlineArrowBackIosNew size={20} /> Back to sweets
        </GoBackLink>
        {isLoading ? (
          <Loader />
        ) : (
          <StyledMain>
            <ImgWrapper>
              <img src={sweet.img} alt={sweet.name} />
            </ImgWrapper>
            <DescrWrapper>
              <StyledProductTitle>{sweet.name}</StyledProductTitle>
              <PriceWrapper>
                <Price price={sweet.price} />
                <Score scored={sweet.scored} />
              </PriceWrapper>
              {sweet.full.map((par, i) => (
                <StyledP key={i}>{par}</StyledP>
              ))}

              <MainBtn candy={sweet} />
            </DescrWrapper>
          </StyledMain>
        )}

        {isLoading ? <Loader /> : <AdditionalCandies addCandy={addCandy} />}
      </Container>
    </PageWrapper>
  );
};

export default SweetDetails;
