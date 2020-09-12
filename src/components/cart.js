import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';

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
        className="leading-none flex items-center snipcart-checkout"
      >
        <AiOutlineShopping className="w-6 h-6 ml-1 cursor-pointer" />
        <span className="bg-red-400 rounded-full p-1 text-white text-xs mb-4 -ml-2">
          {items}
        </span>
      </button>
    </div>
  );
};

export default Cart;
