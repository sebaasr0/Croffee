import svgPaths from "../imports/svg-eldrm8gm6i";
import imgCostaRicaGround from "figma:asset/01584ce73a714c0acb2dcb77ff0a131020270387.png";
import imgColombiaGround from "figma:asset/7a52c77ddc2bc7ee0ce59e9c5e3d305602dcc01c.png";
import imgCostaRicaCrods from "figma:asset/1795c24672e8c19d34cba04fffe6cd531d309588.png";
import imgBrazilCrods from "figma:asset/af33db8e0e20cc6fec96258f550a104115119bb7.png";
import { Product } from '../types/product';

interface BestSellersPageProps {
  onProductClick: (productId: string) => void;
}

interface ProductCardProps {
  product: Product;
  imageSrc: string;
  imageStyles: React.CSSProperties;
  containerStyles: React.CSSProperties;
  textStyles: React.CSSProperties;
  ratingStyles: React.CSSProperties;
  onClick: () => void;
}

function StarRating({ rating, style }: { rating: number; style: React.CSSProperties }) {
  const fullStars = Math.floor(rating);
  
  return (
    <div className="absolute h-[13px] w-[65px]" style={style}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 13">
        <g id="Group 3">
          <path d={svgPaths.pc2017c0} fill={fullStars >= 1 ? "var(--fill-0, #F4D300)" : "var(--fill-0, #FBF5CE)"} id="Star 1" />
          <path d={svgPaths.p14098200} fill={fullStars >= 2 ? "var(--fill-0, #F4D300)" : "var(--fill-0, #FBF5CE)"} id="Star 2" />
          <path d={svgPaths.p2beed000} fill={fullStars >= 3 ? "var(--fill-0, #F4D300)" : "var(--fill-0, #FBF5CE)"} id="Star 3" />
          <path d={svgPaths.p27398400} fill={fullStars >= 4 ? "var(--fill-0, #F4D300)" : "var(--fill-0, #FBF5CE)"} id="Star 4" />
          <path d={svgPaths.p1958a970} fill={fullStars >= 5 ? "var(--fill-0, #F4D300)" : "var(--fill-0, #FBF5CE)"} id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function ProductCard({ product, imageSrc, imageStyles, containerStyles, textStyles, ratingStyles, onClick }: ProductCardProps) {
  return (
    <button 
      onClick={onClick}
      className="absolute contents cursor-pointer group hover:opacity-90 transition-opacity"
    >
      <div className="absolute" style={containerStyles}>
        <img alt={product.name} className="block max-w-none size-full" src={imageSrc} />
      </div>
      <div className="absolute contents">
        <div className="absolute font-['Actor:Regular',sans-serif] h-[114px] leading-[normal] not-italic text-[15px] text-black text-center w-[228px]" style={textStyles}>
          <p className="mb-0">{product.name.toUpperCase()}</p>
          <p className="mb-0">${product.price.toFixed(2)}</p>
          <p>&nbsp;</p>
        </div>
        <StarRating rating={product.rating} style={ratingStyles} />
      </div>
    </button>
  );
}

export function BestSellersPage({ onProductClick }: BestSellersPageProps) {
  // Best sellers: Costa Rica Coffee (id:4), Colombia Coffee (id:2), Costa Rica Crods (id:5), Brazil Crods (id:6)
  const bestSellers = [
    {
      id: '4',
      name: 'Costa Rica Coffee',
      price: 14.99,
      rating: 5,
      imageSrc: imgCostaRicaGround,
      imageStyles: { height: '278px', left: '150px', top: '325px', width: '211px' },
      containerStyles: { height: '278px', left: '150px', top: '325px', width: '211px' },
      textStyles: { left: '263px', top: '603px', transform: 'translateX(-50%)' },
      ratingStyles: { left: '230px', top: '647px' }
    },
    {
      id: '5',
      name: 'Costa Rica Crods',
      price: 7.99,
      rating: 5,
      imageSrc: imgCostaRicaCrods,
      imageStyles: { height: '100.12%', left: '1%', maxWidth: 'none', top: '-0.06%', width: '123.31%', position: 'absolute' as const },
      containerStyles: { height: '261px', left: '352px', top: '338px', width: '393px', overflow: 'hidden' },
      textStyles: { left: '575px', top: '603px', transform: 'translateX(-50%)' },
      ratingStyles: { left: '542px', top: '647px' }
    },
    {
      id: '6',
      name: 'Brazil Crods',
      price: 9.99,
      rating: 5,
      imageSrc: imgBrazilCrods,
      imageStyles: {},
      containerStyles: { height: '167px', left: '741px', top: '408px', width: '298px' },
      textStyles: { left: '871px', top: '603px', transform: 'translateX(-50%)' },
      ratingStyles: { left: '838px', top: '647px' }
    },
    {
      id: '2',
      name: 'Colombia Coffee',
      price: 14.99,
      rating: 5,
      imageSrc: imgColombiaGround,
      imageStyles: {},
      containerStyles: { height: '253px', left: '1027px', top: '342px', width: '248.5px' },
      textStyles: { left: '1177.5px', top: '595.08px', transform: 'translateX(-50%)' },
      ratingStyles: { left: '1144.5px', top: '639.08px' }
    }
  ];

  return (
    <div className="bg-white relative size-full min-h-screen pt-[89px]" data-name="SHOP NOW BEST SELLERS">
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[85px] leading-[normal] left-[531px] not-italic text-[48px] text-black top-[219px] w-[377px]">BEST SELLERS</p>
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[11px] leading-[normal] left-[19px] not-italic text-[10px] text-black top-[309px] w-[82px]">4 PRODUCTS</p>
      
      <div className="absolute left-0 right-0 top-[291px] h-[1px] bg-black" />
      
      {bestSellers.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          imageSrc={product.imageSrc}
          imageStyles={product.imageStyles}
          containerStyles={product.containerStyles}
          textStyles={product.textStyles}
          ratingStyles={product.ratingStyles}
          onClick={() => onProductClick(product.id)}
        />
      ))}
    </div>
  );
}