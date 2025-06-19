import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils.js/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="cart">
      <button
        className="clear-cart-button"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      <h1 className="cart-text">Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty, add some items!</h2>
      ) : (
        <div className="cart-file">
          {cartItems.map((item, index) => (
            <div
              key={item.id || index}
              className="cart-items"
            >
              <h3 className="cart-info">{item.name}</h3>
              <p>Price: ₹{(item.price || item.defaultPrice) / 100}</p>
              {item.description && <p>{item.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
