import { useParams } from "react-router-dom";


export const SweetDetails = () => {
  const { id } = useParams();
  const product = (id);
  return (
    <main>
      
          Product - {product.name} - {id}
       
    </main>
  );
};
