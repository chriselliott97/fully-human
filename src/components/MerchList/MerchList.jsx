import MerchPreview from "../MerchPreview/MerchPreview";

const MerchList = (props) => {
  return ( 
    <>
    <div>
      {props.merch.map((merch, i) =>
        
        <MerchPreview article={merch.article} key={i} image={merch.image}/>
      

      )}
    </div>
    </>
  );
}

export default MerchList;