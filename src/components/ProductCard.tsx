import { Product } from '../types/product';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onProductClick: (productId: string) => void;
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  return (
    <div
      onClick={() => onProductClick(product.id)}
      className="bg-[#F5E6D3] rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
    >
      <div className="aspect-square overflow-hidden bg-white">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-['Aclonica:Regular',sans-serif] mb-2">{product.name}</h3>
        <p className="font-['Afacad:Regular',sans-serif] text-[#666] mb-3">{product.origin}</p>
        <div className="flex items-center justify-between">
          <span className="font-['Aclonica:Regular',sans-serif] text-[20px]">${product.price.toFixed(2)}</span>
          <span className="font-['Afacad:Regular',sans-serif] text-[14px] bg-white px-3 py-1 rounded-full">
            {product.roastLevel}
          </span>
        </div>
      </div>
    </div>
  );
}
