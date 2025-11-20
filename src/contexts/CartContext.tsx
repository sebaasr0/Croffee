import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '../types/product';
import { products } from '../data/products';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, coffeeTypeOrQuantity?: 'ground' | 'whole-grain' | number, quantity?: number) => void;
  removeFromCart: (productId: string, coffeeType?: 'ground' | 'whole-grain') => void;
  updateQuantity: (productId: string, quantity: number, coffeeType?: 'ground' | 'whole-grain') => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount and sync with latest product data
  useEffect(() => {
    const savedCart = localStorage.getItem('croffee-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // Sync cart items with the latest product data
        const syncedCart = parsedCart.map((item: CartItem) => {
          const latestProduct = products.find(p => p.id === item.product.id);
          if (latestProduct) {
            return {
              ...item,
              product: latestProduct
            };
          }
          return item;
        });
        setCartItems(syncedCart);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('croffee-cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded]);

  const addToCart = (product: Product, coffeeTypeOrQuantity?: 'ground' | 'whole-grain' | number, quantity: number = 1) => {
    // Determine if first param is coffeeType or quantity
    let coffeeType: 'ground' | 'whole-grain' | undefined;
    let actualQuantity = quantity;
    
    if (typeof coffeeTypeOrQuantity === 'string') {
      coffeeType = coffeeTypeOrQuantity;
    } else if (typeof coffeeTypeOrQuantity === 'number') {
      actualQuantity = coffeeTypeOrQuantity;
    }
    
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => 
        item.product.id === product.id && item.coffeeType === coffeeType
      );
      
      if (existingItem) {
        return currentItems.map(item =>
          item.product.id === product.id && item.coffeeType === coffeeType
            ? { ...item, quantity: item.quantity + actualQuantity }
            : item
        );
      }
      
      return [...currentItems, { product, quantity: actualQuantity, coffeeType }];
    });
  };

  const removeFromCart = (productId: string, coffeeType?: 'ground' | 'whole-grain') => {
    setCartItems(currentItems => currentItems.filter(item => 
      !(item.product.id === productId && item.coffeeType === coffeeType)
    ));
  };

  const updateQuantity = (productId: string, quantity: number, coffeeType?: 'ground' | 'whole-grain') => {
    if (quantity <= 0) {
      removeFromCart(productId, coffeeType);
      return;
    }
    
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.product.id === productId && item.coffeeType === coffeeType
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}