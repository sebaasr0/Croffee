export interface Product {
  id: string;
  name: string;
  origin: string;
  price: number;
  image: string;
  description: string;
  flavorProfile: string[];
  roastLevel: 'Light' | 'Medium' | 'Dark';
  process: string;
  altitude: string;
  variety: string;
  notes: string;
  category?: 'ground' | 'crods';
  strength?: number; // 1-5 for coffee bean indicator
  rating?: number; // 1-5 for star rating
  fullDescription?: string;
  productImage?: string; // Figma imported product image
}

export interface CartItem {
  product: Product;
  quantity: number;
  coffeeType?: 'ground' | 'whole-grain'; // For ground coffee products
}

export interface CheckoutFormData {
  // Step 1: Contact Info
  email: string;
  phone: string;
  
  // Step 2: Shipping
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  
  // Step 3: Payment (mock)
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}
