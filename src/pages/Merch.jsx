import MerchList from "../components/MerchList/MerchList";
import { merch } from "../data/merch";

const Merch = () => {
  return ( 
  <>
    <h1>Merch</h1>
    <MerchList merch={merch}/>
  </>
  );
}

export default Merch;