import { useNavigate } from "react-router-dom";
import {DirectoryItemContainer, DirectoryItemBodyContainer, BackgroundImage} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  const navigate = useNavigate();
  const navigateToCategory = () => {
    console.log("clicked");
    navigate(`./shop/${title}`);
  };

  return (
    <DirectoryItemContainer onClick={navigateToCategory}>
      <BackgroundImage
        imageUrlProp={imageUrl}
        style={{
          //backgroundImage: `url(${imageUrl})`,
        }}
      />
      <DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
