import hyphenatedWords from "../../utilities/hyphenatedWords";
import { Link } from "react-router-dom";
import { merch } from "../../data/merch";
import styles from "./MerchPreview.module.css"


const MerchPreview = (props) => {
  const path = hyphenatedWords(props.article)
  return ( 
    <>
    <main className={styles.box}>
      <Link to={path}>
      <div className={styles.container}>
        <h1 className={styles.article}>{props.article}</h1>
          <img 
            className={styles.screenshot}
            src={props.image1} 
            alt={props.article}
          />
        </div>
      
      </Link>

    </main>

    

    </>
  );
}

export default MerchPreview;