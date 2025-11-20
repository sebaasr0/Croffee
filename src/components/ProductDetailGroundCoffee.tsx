import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types/product';
import svgPaths from "../imports/svg-gskfa2xxtp";
import imgImage4 from "figma:asset/ca63f9575f7e0a5b40febd48fb4c88db2e8923a3.png";
import imgCostaRica from "figma:asset/86b9e1edc9beb777841ce46bad1477c55fc01f6d.png";
import imgEthiopia from "figma:asset/42c90152cbd21d0c2724a0cdbb739b825717261b.png";
import imgBrazil from "figma:asset/5754da874b0df32628e9c6e68278474fac2f2f2d.png";
import imgColombia from "figma:asset/1637bd23d5e57d7127dc1d0681f9760610c5fe6a.png";

interface ProductDetailGroundCoffeeProps {
  product: Product;
  onBack: () => void;
  onAddToCart?: () => void;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="absolute h-[27px] left-[732px] top-[calc(30%+9.9px)] w-[128px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 27">
        <g id="Group 3">
          {/* Star 1 - x=12.8 */}
          <path 
            d={svgPaths.p300ee600} 
            fill={fullStars >= 1 ? "var(--fill-0, #F4D300)" : "var(--fill-0, #FBF5CE)"} 
            id="Star 1" 
          />
          {/* Star 2 - x=38.4 */}
          <path 
            d={svgPaths.p279557e0} 
            fill={fullStars >= 2 ? "var(--fill-0, #F4D300)" : "var(--fill-0, #FBF5CE)"} 
            id="Star 2" 
          />
          {/* Star 3 - x=64 */}
          <path 
            d={svgPaths.p4618200} 
            fill={fullStars >= 3 ? "var(--fill-0, #F4D300)" : "var(--fill-0, #FBF5CE)"} 
            id="Star 3" 
          />
          {/* Star 4 - x=89.6 */}
          <path 
            d={svgPaths.p2c687500} 
            fill={fullStars >= 4 ? "var(--fill-0, #F4D300)" : "var(--fill-0, #FBF5CE)"} 
            id="Star 4" 
          />
          {/* Star 5 - x=115.2 */}
          <path 
            d={svgPaths.p29784a80} 
            fill={fullStars >= 5 ? "var(--fill-0, #F4D300)" : hasHalfStar && fullStars === 4 ? "var(--fill-0, #F4D300)" : "var(--fill-0, #FBF5CE)"} 
            id="Star 5" 
          />
        </g>
      </svg>
    </div>
  );
}

function CoffeeStrengthIndicator({ strength }: { strength: number }) {
  return (
    <>
      {Array.from({ length: strength }).map((_, index) => (
        <div 
          key={index}
          className="absolute h-[31px] rounded-[5px] top-[calc(40%+62.2px)] w-[24px]" 
          style={{ left: `${1107 + (index * 32)}px` }}
          data-name={`coffee-bean-${index + 1}`}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
            <img alt="" className="absolute h-[203.23%] left-[-83.33%] max-w-none top-[-51.61%] w-[262.5%]" src={imgImage4} />
          </div>
        </div>
      ))}
    </>
  );
}

export function ProductDetailGroundCoffee({ product, onBack, onAddToCart }: ProductDetailGroundCoffeeProps) {
  const [selectedType, setSelectedType] = useState<'ground' | 'whole-grain'>('ground');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedType);
    if (onAddToCart) {
      onAddToCart();
    }
  };

  // Map product IDs to their respective imported images
  const productImageMap: Record<string, string> = {
    '1': imgEthiopia,
    '2': imgColombia,
    '3': imgBrazil,
    '4': imgCostaRica,
  };

  // Use the mapped image based on product ID
  const productImageSrc = productImageMap[product.id] || product.image;

  return (
    <div className="bg-white relative size-full min-h-screen pt-[89px]" data-name="PRODUCT DETAIL">
      {/* Product Image */}
      <div className="absolute h-[650px] left-[50px] top-[calc(20%+91.6px)] w-[650px]" data-name="product-image">
        <img 
          alt="" 
          className="block object-contain size-full" 
          src={productImageSrc} 
        />
      </div>

      {/* Divider Line */}
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.0020833287853747606)+(var(--transform-inner-height)*0.9999978542327881)))] items-center justify-center left-0 top-[calc(10%+0.3px)] w-[calc(1px*((var(--transform-inner-height)*0.0020833287853747606)+(var(--transform-inner-width)*0.9999978542327881)))]" style={{ "--transform-inner-width": "1440", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.881deg]">
          <div className="h-0 relative w-[1440px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
                <line id="Line 3" stroke="var(--stroke-0, black)" x2="1440" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Product Title, Price, and Rating */}
      <div className="absolute contents left-[732px] top-[calc(10%+32.3px)]">
        <div className="absolute font-['Actor:Regular',sans-serif] h-[180px] leading-[normal] left-[734px] not-italic text-[0px] text-black top-[calc(10%+32.3px)] w-[462px]">
          <p className="mb-0 text-[48px]">{product.name.toUpperCase()}</p>
          <p className="mb-0 text-[24px]">&nbsp;</p>
          <p className="mb-0 text-[24px]">${product.price.toFixed(2)}</p>
          <p className="text-[15px]">&nbsp;</p>
        </div>
        <StarRating rating={product.rating || 5} />
      </div>

      {/* Type Selection */}
      <div className="absolute contents left-[720px] top-[calc(10%+32.3px)]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[37px] leading-[normal] left-[731px] not-italic text-[20px] text-black top-[calc(40%+2.2px)] w-[78px]">TYPE:</p>
        
        {/* Selected Type Display */}
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[820px] not-italic text-[20px] text-black top-[calc(40%+2.2px)]">
          {selectedType === 'ground' ? 'GROUND' : 'WHOLE GRAIN'}
        </p>
        
        {/* Ground Button */}
        <div className="absolute contents left-[720px] top-[calc(40%+59.2px)]">
          <button
            onClick={() => setSelectedType('ground')}
            className={`absolute h-[38px] left-[720px] rounded-[20px] top-[calc(40%+59.2px)] w-[140px] transition-colors ${
              selectedType === 'ground' ? 'bg-black' : 'bg-white'
            }`}
            data-name="ground-button"
          >
            <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
          </button>
          <p className={`absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[747px] not-italic text-[20px] text-nowrap top-[calc(40%+66.2px)] whitespace-pre pointer-events-none ${
            selectedType === 'ground' ? 'text-white' : 'text-black'
          }`}>
            GROUND
          </p>
        </div>

        {/* Whole Grain Button */}
        <div className="absolute contents left-[878px] top-[calc(40%+59.2px)]">
          <button
            onClick={() => setSelectedType('whole-grain')}
            className={`absolute h-[38px] left-[878px] rounded-[20px] top-[calc(40%+59.2px)] w-[190px] transition-colors ${
              selectedType === 'whole-grain' ? 'bg-black' : 'bg-white'
            }`}
            data-name="whole-grain-button"
          >
            <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
          </button>
          <p className={`absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[905px] not-italic text-[20px] text-nowrap top-[calc(40%+66.2px)] whitespace-pre pointer-events-none ${
            selectedType === 'whole-grain' ? 'text-white' : 'text-black'
          }`}>
            WHOLE GRAIN
          </p>
        </div>
      </div>

      {/* Coffee Strength Indicators */}
      <CoffeeStrengthIndicator strength={product.strength || 2} />

      {/* Product Description */}
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-auto leading-[normal] left-[720px] not-italic text-[16px] text-black top-[calc(60%+56.8px)] w-[536px]">
        {product.fullDescription?.split('\n\n').map((paragraph, index) => (
          <p key={index} className={index < (product.fullDescription?.split('\n\n').length || 0) - 1 ? 'mb-0' : ''}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Add to Cart Button */}
      <div className="absolute contents left-[720px] top-[calc(50%+51.5px)]">
        <button
          onClick={handleAddToCart}
          className="absolute bg-[#999eb6] h-[51px] left-[720px] rounded-[20px] top-[calc(50%+51.5px)] w-[473px] hover:bg-[#888da5] transition-colors cursor-pointer"
        />
        <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[20px] leading-[normal] left-[901px] not-italic text-[16px] text-black top-[calc(50%+67.5px)] w-[122px] pointer-events-none">
          ADD TO CART
        </p>
      </div>

      {/* Go Back Button */}
      <button
        onClick={onBack}
        className="absolute font-['Aclonica:Regular',sans-serif] h-[46px] leading-[normal] left-[28px] not-italic text-[16px] text-black top-[calc(10%+34.3px)] w-[146px] cursor-pointer hover:opacity-80 transition-opacity"
      >
        GO BACK
      </button>
    </div>
  );
}