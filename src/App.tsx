import { useState, useEffect } from 'react';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProductDetail } from './components/ProductDetail';
import { ProductDetailGroundCoffee } from './components/ProductDetailGroundCoffee';
import { ProductDetailCrods } from './components/ProductDetailCrods';
import { MiniCart } from './components/MiniCart';
import { CartPage } from './components/CartPage';
import { Checkout } from './components/Checkout';
import { OrderConfirmation } from './components/OrderConfirmation';
import { GroundAndWholeGrainPage } from './components/GroundAndWholeGrainPage';
import { BestSellersPage } from './components/BestSellersPage';
import { CrodsPage } from './components/CrodsPage';
import { AboutUs } from './components/AboutUs';
import { products } from './data/products';

type Page = 'home' | 'ground-and-whole-grain' | 'best-sellers' | 'crods' | 'product-detail' | 'product-detail-ground' | 'product-detail-crods' | 'cart' | 'checkout' | 'order-confirmation' | 'about-us';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const [previousPage, setPreviousPage] = useState<Page>('home');

  const selectedProduct = selectedProductId 
    ? products.find(p => p.id === selectedProductId) 
    : null;

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    const product = products.find(p => p.id === productId);
    // Store the current page before navigating
    setPreviousPage(currentPage);
    // Check product category and navigate accordingly
    if (product?.category === 'ground') {
      setCurrentPage('product-detail-ground');
    } else if (product?.category === 'crods') {
      setCurrentPage('product-detail-crods');
    } else {
      setCurrentPage('product-detail');
    }
  };

  const handleShopNowClick = () => {
    // Navigate to Best Sellers page
    setCurrentPage('best-sellers');
  };

  const handleNavigate = (page: string) => {
    if (page === 'home') {
      setCurrentPage('home');
    } else if (page === 'ground-and-whole-grain') {
      setCurrentPage('ground-and-whole-grain');
    } else if (page === 'crods') {
      setCurrentPage('crods');
    } else if (page === 'about-us') {
      setCurrentPage('about-us');
    }
  };

  const handleAddToCart = () => {
    setIsMiniCartOpen(true);
  };

  const handleViewCart = () => {
    setIsMiniCartOpen(false);
    setCurrentPage('cart');
  };

  const handleCheckout = () => {
    setIsMiniCartOpen(false);
    setCurrentPage('checkout');
  };

  const handleCheckoutComplete = () => {
    setCurrentPage('order-confirmation');
  };

  const handleReturnHome = () => {
    setCurrentPage('home');
    setSelectedProductId(null);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        {/* Header - Fixed on all pages except order confirmation */}
        {currentPage !== 'order-confirmation' && (
          <div className="relative h-[89px] w-full bg-white">
            <Header 
              onCartClick={() => setIsMiniCartOpen(true)} 
              onNavigate={handleNavigate}
            />
            <div className="absolute h-0 left-0 top-[88.96px] w-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
                  <line id="Line 1" stroke="var(--stroke-0, black)" x2="1440" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Page Content */}
        <div className={currentPage !== 'order-confirmation' ? 'pt-0' : ''}>
          {currentPage === 'home' && (
            <HomePage 
              onShopNowClick={handleShopNowClick}
              onProductClick={handleProductClick}
            />
          )}

          {currentPage === 'ground-and-whole-grain' && (
            <GroundAndWholeGrainPage onProductClick={handleProductClick} />
          )}

          {currentPage === 'best-sellers' && (
            <BestSellersPage onProductClick={handleProductClick} />
          )}

          {currentPage === 'crods' && (
            <CrodsPage onProductClick={handleProductClick} />
          )}

          {currentPage === 'product-detail' && selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onBack={handleReturnHome}
              onAddToCart={handleAddToCart}
            />
          )}

          {currentPage === 'product-detail-ground' && selectedProduct && (
            <ProductDetailGroundCoffee
              product={selectedProduct}
              onBack={() => setCurrentPage(previousPage)}
              onAddToCart={handleAddToCart}
            />
          )}

          {currentPage === 'product-detail-crods' && selectedProduct && (
            <ProductDetailCrods
              product={selectedProduct}
              onBack={() => setCurrentPage(previousPage)}
              onAddToCart={handleAddToCart}
            />
          )}

          {currentPage === 'cart' && (
            <CartPage
              onBack={handleReturnHome}
              onCheckout={handleCheckout}
            />
          )}

          {currentPage === 'checkout' && (
            <Checkout
              onBack={() => setCurrentPage('cart')}
              onComplete={handleCheckoutComplete}
            />
          )}

          {currentPage === 'order-confirmation' && (
            <OrderConfirmation onReturnHome={handleReturnHome} />
          )}

          {currentPage === 'about-us' && (
            <AboutUs onClose={handleReturnHome} />
          )}
        </div>

        {/* Mini Cart */}
        <MiniCart
          isOpen={isMiniCartOpen}
          onClose={() => setIsMiniCartOpen(false)}
          onViewCart={handleViewCart}
          onCheckout={handleCheckout}
        />
      </div>
    </CartProvider>
  );
}