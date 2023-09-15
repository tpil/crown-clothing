import { useNavigate } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  const navigate = useNavigate();
  const navigateToCategory = () => {
    console.log("clicked");
    navigate(`./shop/${title}`);
  };

  return (
    <div className="directory-item-container" onClick={navigateToCategory}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
