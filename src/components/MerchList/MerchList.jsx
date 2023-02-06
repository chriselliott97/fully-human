import MerchPreview from "../MerchPreview/MerchPreview";

const MerchList = (props) => {
  return ( 
    <>
    <div>
      {props.merch.map((merch, i) =>
        
        <MerchPreview article={merch.article} key={i} image={merch.image}
        price={merch.price}/>
      

      )}
    </div>
    </>
  );
}

export default MerchList;