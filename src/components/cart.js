import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

const Cart = () => {
  const [items, setItems] = React.useState(0);

  const updateItemTotal = quantity => setItems(quantity);
  const updateCount = () => {
    const count = window.Snipcart.api.items.count();
    updateItemTotal(count);
  };
  const cleanup = () => {
    window.Snipcart.unsubscribe('cart.closed');
    window.Snipcart.unsubscribe('cart.ready');
  };

  React.useEffect(() => {
    if (window.Snipcart) {
      // on pages change
      updateCount();

      // add or change items
      window.Snipcart.subscribe('cart.closed', () => updateCount());

      // on page refresh
      window.Snipcart.subscribe('cart.ready', () => updateCount());
    }

    return cleanup;
  });

  return (
    <div className="snipcart-summary">
      <button
        type="button"
        className="bg-red-400 text-white p-2 rounded leading-none flex items-center snipcart-checkout"
      >
        <FiShoppingBag className="w-4 h-4 ml-1 cursor-pointer" />
        <span className="bg-white p-1 rounded text-red-600 text-xs ml-2">
          {items}
        </span>
      </button>
    </div>
  );
};

export default Cart;
