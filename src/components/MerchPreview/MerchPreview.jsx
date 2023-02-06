import hyphenatedWords from "../../utilities/hyphenatedWords";
import { Link } from "react-router-dom";
import { merch } from "../../data/merch";


const MerchPreview = (props) => {
  const path = hyphenatedWords(props.article)
  return ( 
    <>

    <Link to={path}>
      <div>
        <h1>{props.article}</h1>
        <h2>{props.price} </h2>
        <img 
          src={props.image} 
          alt={props.article}
        />
      </div>

    </Link>

    </>
  );
}

export default MerchPreview;