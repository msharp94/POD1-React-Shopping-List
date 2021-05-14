import './DisplayShoppingList.css';
import ProductItem from './ProductItem.jsx';

function DisplayShoppingList(props) {
  let shoppingList = props.shoppingList;

  return (
    <>
      {shoppingList.map((item) => (
        <ProductItem
          purchaseItem={props.purchaseItem}
          deleteItem={props.deleteItem}
          item={item}
        />
      ))}
    </>
  );
}

export default DisplayShoppingList;
