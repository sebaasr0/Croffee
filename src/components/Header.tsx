import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import imgImage3 from "figma:asset/91c02f8b27af991163ce628a09396102ce826e16.png";

interface HeaderProps {
  onCartClick: () => void;
  onNavigate: (page: string) => void;
}

export function Header({ onCartClick, onNavigate }: HeaderProps) {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <div className="absolute contents left-[30px] top-[27px]">
      <button 
        onClick={() => onNavigate('home')}
        className="absolute font-['Aclonica:Regular',sans-serif] h-[51px] leading-[normal] left-[30px] not-italic text-[48px] text-black top-[27px] w-[239px] cursor-pointer hover:opacity-80 transition-opacity"
      >
        CROFFEE
      </button>
      <button
        onClick={() => onNavigate('ground-and-whole-grain')}
        className="absolute font-['Aclonica:Regular',sans-serif] h-[18px] leading-[normal] left-[428px] not-italic text-[15px] text-black top-[44px] w-[219px] cursor-pointer hover:opacity-80 transition-opacity"
      >
        Ground and whole grain
      </button>
      <button
        onClick={() => onNavigate('crods')}
        className="absolute font-['Aclonica:Regular',sans-serif] h-[18px] leading-[normal] left-[811.5px] not-italic text-[15px] text-black text-center top-[44px] translate-x-[-50%] w-[157px] cursor-pointer hover:opacity-80 transition-opacity"
      >
        Crods
      </button>
      <button
        onClick={() => onNavigate('about-us')}
        className="absolute font-['Aclonica:Regular',sans-serif] h-[18px] leading-[normal] left-[1013px] not-italic text-[15px] text-black top-[44px] w-[85px] cursor-pointer hover:opacity-80 transition-opacity"
      >
        About us
      </button>
      <button 
        onClick={onCartClick}
        className="absolute h-[30px] left-[1399px] top-[34px] w-[32px] cursor-pointer hover:opacity-80 transition-opacity group"
        data-name="image 3"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Shopping cart" className="absolute h-[158.08%] left-[-383.11%] max-w-none top-[-24.23%] w-[525.93%]" src={imgImage3} />
        </div>
        {cartCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-['Aclonica:Regular',sans-serif] pointer-events-none">
            {cartCount}
          </div>
        )}
      </button>
    </div>
  );
}