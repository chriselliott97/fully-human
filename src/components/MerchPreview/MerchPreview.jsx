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
      </div>

    </Link>

    </>
  );
}

export default MerchPreview;