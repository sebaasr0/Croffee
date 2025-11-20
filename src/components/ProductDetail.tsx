import { useState } from 'react';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: () => void;
}

export function ProductDetail({ product, onBack, onAddToCart }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onAddToCart();
  };

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 font-['Afacad:Regular',sans-serif] text-[18px] hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={20} />
          Back to Products
        </button>

        {/* Product Detail Grid */}
        <div className="grid grid-cols-2 gap-16">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-[#F5E6D3]">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div>
            <div className="mb-2">
              <span className="font-['Afacad:Regular',sans-serif] text-[16px] text-[#666]">
                {product.origin}
              </span>
            </div>
            <h1 className="font-['Aclonica:Regular',sans-serif] text-[48px] mb-4">
              {product.name}
            </h1>
            <p className="font-['Afacad:Regular',sans-serif] text-[24px] mb-8">
              ${product.price.toFixed(2)}
            </p>

            <div className="mb-8">
              <p className="font-['Afacad:Regular',sans-serif] text-[18px] text-[#444] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Details */}
            <div className="space-y-6 mb-8 p-6 bg-[#F5E6D3] rounded-lg">
              <div>
                <h3 className="font-['Aclonica:Regular',sans-serif] mb-3">Flavor Profile</h3>
                <div className="flex flex-wrap gap-2">
                  {product.flavorProfile.map((flavor, index) => (
                    <span
                      key={index}
                      className="font-['Afacad:Regular',sans-serif] bg-white px-4 py-2 rounded-full text-[14px]"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-['Aclonica:Regular',sans-serif] text-[14px] mb-1">Roast Level</h4>
                  <p className="font-['Afacad:Regular',sans-serif] text-[#666]">{product.roastLevel}</p>
                </div>
                <div>
                  <h4 className="font-['Aclonica:Regular',sans-serif] text-[14px] mb-1">Process</h4>
                  <p className="font-['Afacad:Regular',sans-serif] text-[#666]">{product.process}</p>
                </div>
                <div>
                  <h4 className="font-['Aclonica:Regular',sans-serif] text-[14px] mb-1">Altitude</h4>
                  <p className="font-['Afacad:Regular',sans-serif] text-[#666]">{product.altitude}</p>
                </div>
                <div>
                  <h4 className="font-['Aclonica:Regular',sans-serif] text-[14px] mb-1">Variety</h4>
                  <p className="font-['Afacad:Regular',sans-serif] text-[#666]">{product.variety}</p>
                </div>
              </div>

              <div>
                <h4 className="font-['Aclonica:Regular',sans-serif] text-[14px] mb-2">Tasting Notes</h4>
                <p className="font-['Afacad:Regular',sans-serif] text-[#666] leading-relaxed">
                  {product.notes}
                </p>
              </div>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 bg-[#F5E6D3] rounded-lg px-6 py-3">
                <button
                  onClick={decrementQuantity}
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Decrease quantity"
                >
                  <Minus size={20} />
                </button>
                <span className="font-['Aclonica:Regular',sans-serif] text-[20px] w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Increase quantity"
                >
                  <Plus size={20} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-4 rounded-lg font-['Afacad:Regular',sans-serif] text-[20px] hover:opacity-90 transition-opacity"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
