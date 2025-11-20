import { X, ShoppingBag } from 'lucide-react';
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

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
  onViewCart: () => void;
  onCheckout: () => void;
}

export function MiniCart({ isOpen, onClose, onViewCart, onCheckout }: MiniCartProps) {
  const { cartItems, removeFromCart, getCartTotal, getCartCount } = useCart();

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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Mini Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-[450px] bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingBag size={24} />
            <h2 className="font-['Aclonica:Regular',sans-serif] text-[20px]">
              Shopping Cart ({getCartCount()})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={48} className="mx-auto mb-4 text-gray-300" />
              <p className="font-['Afacad:Regular',sans-serif] text-[18px] text-[#666]">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={`${item.product.id}-${item.coffeeType || 'default'}`} className="flex gap-4 pb-4 border-b border-gray-200">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#F5E6D3] flex-shrink-0">
                    <img
                      src={getProductImage(item.product.id)}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Aclonica:Regular',sans-serif] text-[14px] mb-1">
                      {item.product.name}
                    </h3>
                    {item.coffeeType && (
                      <p className="font-['Afacad:Regular',sans-serif] text-[12px] text-[#666] mb-1">
                        {item.coffeeType === 'ground' ? 'Ground' : 'Whole Grain'}
                      </p>
                    )}
                    <p className="font-['Afacad:Regular',sans-serif] text-[12px] text-[#666] mb-2">
                      Qty: {item.quantity}
                    </p>
                    <p className="font-['Aclonica:Regular',sans-serif]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id, item.coffeeType)}
                    className="text-[#666] hover:text-black transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-['Aclonica:Regular',sans-serif] text-[18px]">Subtotal</span>
              <span className="font-['Aclonica:Regular',sans-serif] text-[24px]">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-black text-white py-4 rounded-lg font-['Afacad:Regular',sans-serif] text-[18px] hover:opacity-90 transition-opacity"
            >
              Checkout
            </button>
            <button
              onClick={onViewCart}
              className="w-full bg-white border-2 border-black py-4 rounded-lg font-['Afacad:Regular',sans-serif] text-[18px] hover:bg-gray-50 transition-colors"
            >
              View Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}