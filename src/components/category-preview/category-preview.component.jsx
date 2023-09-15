import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.components";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const navigateToCategory = () => {
    navigate(`./${title}`);
  };
  return (
    <div className="category-preview-container">
      <div className="title-link">
        <span className="title">{title}</span>
      </div>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <div className="show-more-btn-container">
        <Button type="button" onClick={navigateToCategory}>
          Show more...
        </Button>
      </div>
    </div>
  );
};

export default CategoryPreview;
