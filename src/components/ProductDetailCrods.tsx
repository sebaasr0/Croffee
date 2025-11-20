import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types/product';
import svgPaths from "../imports/svg-bry3wm821f";
import imgImage4 from "figma:asset/ca63f9575f7e0a5b40febd48fb4c88db2e8923a3.png";
import imgCostaRicaCrods from "figma:asset/1795c24672e8c19d34cba04fffe6cd531d309588.png";
import imgBrazilCrods from "figma:asset/af33db8e0e20cc6fec96258f550a104115119bb7.png";
import imgEthiopiaCrods from "figma:asset/adc0ccafa1c7d9a8ff04fd97cef4816b365cfea3.png";
import imgColombiaCrods from "figma:asset/f0ec06544faab992d9401e89a556e70dbbcaa7ac.png";

interface ProductDetailCrodsProps {
  product: Product;
  onBack: () => void;
  onAddToCart?: () => void;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Helper function to determine star fill
  const getStarFill = (starNumber: number) => {
    if (starNumber <= fullStars) {
      return "#F4D300"; // Full star
    } else if (starNumber === fullStars + 1 && hasHalfStar) {
      return "#F4D300"; // Half star (will use clipPath)
    } else {
      return "#FBF5CE"; // Empty star
    }
  };

  return (
    <div className="absolute h-[27px] left-[732px] top-[calc(30%+9.9px)] w-[128px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 27">
        <defs>
          {/* Clip path for half star - clips left half */}
          <clipPath id="halfStarClip">
            <rect x="77.4265" y="0" width="12.4" height="27" />
          </clipPath>
        </defs>
        <g id="Group 3">
          {/* Star 1 (leftmost - x=12.8) */}
          <path 
            d={svgPaths.p300ee600} 
            fill={getStarFill(1)} 
            id="Star 1" 
          />
          {/* Star 2 (x=38.4) */}
          <path 
            d={svgPaths.p279557e0} 
            fill={getStarFill(2)} 
            id="Star 2" 
          />
          {/* Star 3 (middle - x=64) */}
          <path 
            d={svgPaths.p4618200} 
            fill={getStarFill(3)} 
            id="Star 3" 
          />
          {/* Star 4 (x=89.6) */}
          {4 === fullStars + 1 && hasHalfStar ? (
            <>
              {/* Empty star background */}
              <path 
                d={svgPaths.p2c687500} 
                fill="#FBF5CE" 
                id="Star 4 Background" 
              />
              {/* Half filled star on top */}
              <path 
                d={svgPaths.p2c687500} 
                fill="#F4D300" 
                id="Star 4" 
                clipPath="url(#halfStarClip)"
              />
            </>
          ) : (
            <path 
              d={svgPaths.p2c687500} 
              fill={getStarFill(4)} 
              id="Star 4" 
            />
          )}
          {/* Star 5 (rightmost - x=115.2) */}
          {5 === fullStars + 1 && hasHalfStar ? (
            <>
              {/* Empty star background */}
              <path 
                d={svgPaths.p29784a80} 
                fill="#FBF5CE" 
                id="Star 5 Background" 
              />
              {/* Half filled star on top */}
              <path 
                d={svgPaths.p29784a80} 
                fill="#F4D300" 
                id="Star 5" 
                clipPath="url(#halfStarClip)"
              />
            </>
          ) : (
            <path 
              d={svgPaths.p29784a80} 
              fill={getStarFill(5)} 
              id="Star 5" 
            />
          )}
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
          style={{ left: `${733 + (index * 32)}px` }}
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

export function ProductDetailCrods({ product, onBack, onAddToCart }: ProductDetailCrodsProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1);
    if (onAddToCart) {
      onAddToCart();
    }
  };

  // Map product IDs to their respective imported pod images
  const productImageMap: Record<string, string> = {
    '5': imgCostaRicaCrods,  // Costa Rica Crods (Kenyan AA repurposed)
    '6': imgBrazilCrods,     // Brazil Crods (Sumatra repurposed)
    '7': imgEthiopiaCrods,   // Ethiopia Crods
    '8': imgColombiaCrods,   // Colombia Crods
  };

  // Use the mapped image based on product ID
  const productImageSrc = productImageMap[product.id] || product.image;

  return (
    <div className="bg-white relative size-full min-h-screen pt-[89px]" data-name="PRODUCT DETAIL CRODS">
      {/* Product Image */}
      <div className="absolute h-[387px] left-[50px] top-[calc(30%+98.9px)] w-[583px]" data-name="product-image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            alt={product.name} 
            className="absolute h-full left-0 max-w-none top-0 w-auto object-contain" 
            src={productImageSrc} 
          />
        </div>
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
          <p className="mb-0 text-[48px]">{product.name.toUpperCase()} CRODS</p>
          <p className="mb-0 text-[24px]">&nbsp;</p>
          <p className="mb-0 text-[24px]">${product.price.toFixed(2)}</p>
          <p className="text-[15px]">&nbsp;</p>
        </div>
        <StarRating rating={product.rating || 5} />
      </div>

      {/* Type Label and Value */}
      <div className="absolute contents left-[731px] top-[calc(10%+32.3px)]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[37px] leading-[normal] left-[731px] not-italic text-[20px] text-black top-[calc(40%+2.2px)] w-[78px]">
          <span className="font-['Actor:Regular',sans-serif]">TYPE</span>:
        </p>
        <p className="absolute font-['Actor:Regular',sans-serif] h-[30px] leading-[normal] left-[806px] not-italic text-[20px] text-black top-[calc(40%+2.2px)] w-[74px]">Pods</p>
      </div>

      {/* Coffee Strength Indicator */}
      <CoffeeStrengthIndicator strength={product.strength || 2} />

      {/* Description */}
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-auto leading-[normal] left-[720px] not-italic text-[16px] text-black top-[calc(60%+56.8px)] w-[536px]">
        {product.description || 'Premium coffee pods with exceptional flavor and convenience.'}
      </p>

      {/* Add to Cart Button */}
      <div className="absolute contents left-[720px] top-[calc(50%+51.5px)]">
        <button
          onClick={handleAddToCart}
          className="absolute bg-[#999eb6] h-[51px] left-[720px] rounded-[20px] top-[calc(50%+51.5px)] w-[473px] hover:opacity-90 transition-opacity"
        >
          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[16px] text-black">ADD TO CART</p>
        </button>
      </div>

      {/* Go Back Button */}
      <button
        onClick={onBack}
        className="absolute font-['Aclonica:Regular',sans-serif] h-[46px] leading-[normal] left-[28px] not-italic text-[16px] text-black top-[calc(10%+34.3px)] w-[146px] hover:opacity-70 transition-opacity"
      >
        GO BACK
      </button>
    </div>
  );
}