import { products } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  onProductClick: (productId: string) => void;
}

export function ProductGrid({ onProductClick }: ProductGridProps) {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-16">
      <div className="mb-12 text-center">
        <h2 className="font-['Aclonica:Regular',sans-serif] text-[42px] mb-4">Our Coffee Selection</h2>
        <p className="font-['Afacad:Regular',sans-serif] text-[20px] text-[#666] max-w-2xl mx-auto">
          Discover our carefully curated collection of single-origin coffees from around the world
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
}
