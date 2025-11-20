import { ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgCostaRica from "figma:asset/86b9e1edc9beb777841ce46bad1477c55fc01f6d.png";
import imgEthiopia from "figma:asset/42c90152cbd21d0c2724a0cdbb739b825717261b.png";
import imgBrazil from "figma:asset/5754da874b0df32628e9c6e68278474fac2f2f2d.png";
import imgColombia from "figma:asset/1637bd23d5e57d7127dc1d0681f9760610c5fe6a.png";
// Crods product images
import imgCostaRicaCrods from "figma:asset/1795c24672e8c19d34cba04fffe6cd531d309588.png";
import imgBrazilCrods from "figma:asset/af33db8e0e20cc6fec96258f550a104115119bb7.png";
import imgEthiopiaCrods from "figma:asset/adc0ccafa1c7d9a8ff04fd97cef4816b365cfea3.png";
import imgColombiaCrods from "figma:asset/f0ec06544faab992d9401e89a556e70dbbcaa7ac.png";

interface CartPageProps {
  onBack: () => void;
  onCheckout: () => void;
}

export function CartPage({ onBack, onCheckout }: CartPageProps) {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  // Map product IDs to their respective imported images
  const productImageMap: Record<string, string> = {
    '1': imgEthiopia,
    '2': imgColombia,
    '3': imgBrazil,
    '4': imgCostaRica,
    // Crods products
    '5': imgCostaRicaCrods,
    '6': imgBrazilCrods,
    '7': imgEthiopiaCrods,
    '8': imgColombiaCrods,
  };

  const getProductImage = (productId: string) => {
    return productImageMap[productId] || '';
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        {/* Header */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 font-['Afacad:Regular',sans-serif] text-[18px] hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={20} />
          Continue Shopping
        </button>

        <h1 className="font-['Aclonica:Regular',sans-serif] text-[42px] mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-['Afacad:Regular',sans-serif] text-[24px] text-[#666] mb-8">
              Your cart is empty
            </p>
            <button
              onClick={onBack}
              className="bg-black text-white px-8 py-4 rounded-lg font-['Afacad:Regular',sans-serif] text-[18px] hover:opacity-90 transition-opacity"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="col-span-2 space-y-6">
              {cartItems.map(item => (
                <div
                  key={`${item.product.id}-${item.coffeeType || 'default'}`}
                  className="flex gap-6 p-6 bg-[#F5E6D3] rounded-lg"
                >
                  <div className="w-32 h-32 rounded-lg overflow-hidden bg-white flex-shrink-0">
                    <img
                      src={getProductImage(item.product.id)}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-['Aclonica:Regular',sans-serif] text-[20px] mb-2">
                      {item.product.name}
                    </h3>
                    {item.coffeeType && (
                      <p className="font-['Afacad:Regular',sans-serif] text-[16px] text-[#666] mb-2">
                        Type: {item.coffeeType === 'ground' ? 'Ground' : 'Whole Grain'}
                      </p>
                    )}
                    <p className="font-['Afacad:Regular',sans-serif] text-[#666] mb-4">
                      {item.product.origin}
                    </p>
                    <p className="font-['Aclonica:Regular',sans-serif] text-[18px]">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.product.id, item.coffeeType)}
                      className="text-[#666] hover:text-black transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>

                    <div className="flex items-center gap-4 bg-white rounded-lg px-4 py-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.coffeeType)}
                        className="hover:opacity-70 transition-opacity"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="font-['Aclonica:Regular',sans-serif] w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.coffeeType)}
                        className="hover:opacity-70 transition-opacity"
                        aria-label="Increase quantity"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    <p className="font-['Aclonica:Regular',sans-serif] text-[20px]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="col-span-1">
              <div className="bg-[#F5E6D3] rounded-lg p-8 sticky top-8">
                <h2 className="font-['Aclonica:Regular',sans-serif] text-[24px] mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between font-['Afacad:Regular',sans-serif] text-[16px]">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-['Afacad:Regular',sans-serif] text-[16px]">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-400 pt-4">
                    <div className="flex justify-between font-['Aclonica:Regular',sans-serif] text-[20px]">
                      <span>Total</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full bg-black text-white py-4 rounded-lg font-['Afacad:Regular',sans-serif] text-[18px] hover:opacity-90 transition-opacity"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}