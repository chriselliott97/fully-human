import MerchPreview from "../MerchPreview/MerchPreview";
import styles from "./MerchList.module.css"

const MerchList = (props) => {
  return ( 
    <>
    <div className={styles.container}>
      {props.merch.map((merch, i) =>
        
        <MerchPreview 
          article={merch.article} 
          key={i} 
          image1={merch.image1} 
          image2={merch.image2} 
          image3={merch.image3}
          price={merch.price}/>
      

      )}
    </div>
    </>
  );
}

export default MerchList;