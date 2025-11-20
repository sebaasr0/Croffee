import { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { CheckoutFormData } from '../types/product';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgCostaRica from "figma:asset/86b9e1edc9beb777841ce46bad1477c55fc01f6d.png";
import imgEthiopia from "figma:asset/42c90152cbd21d0c2724a0cdbb739b825717261b.png";
import imgBrazil from "figma:asset/5754da874b0df32628e9c6e68278474fac2f2f2d.png";
import imgColombia from "figma:asset/1637bd23d5e57d7127dc1d0681f9760610c5fe6a.png";
// Crods product images
import imgCostaRicaCrods from "figma:asset/1795c24672e8c19d34cba04fffe6cd531d309588.png";
import imgBrazilCrods from "figma:asset/af33db8e0e20cc6fec96258f550a104115119bb7.png";
import imgEthiopiaCrods from "figma:asset/adc0ccafa1c7d9a8ff04fd97cef4816b365cfea3.png";
import imgColombiaCrods from "figma:asset/f0ec06544faab992d9401e89a556e70dbbcaa7ac.png";

interface CheckoutProps {
  onBack: () => void;
  onComplete: () => void;
}

export function Checkout({ onBack, onComplete }: CheckoutProps) {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  // Map product IDs to their respective imported images
  const productImageMap: Record<string, string> = {
    '1': imgEthiopia,
    '2': imgColombia,
    '3': imgBrazil,
    '4': imgCostaRica,
    // Crods products
    '5': imgCostaRicaCrods,
    '6': imgBrazilCrods,
    '7': imgEthiopiaCrods,
    '8': imgColombiaCrods,
  };

  const getProductImage = (productId: string) => {
    return productImageMap[productId] || '';
  };

  const updateFormData = (field: keyof CheckoutFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setCurrentStep(step => step + 1);
  };

  const handleBack = () => {
    setCurrentStep(step => step - 1);
  };

  const handleComplete = () => {
    clearCart();
    onComplete();
  };

  const shippingCost = 5.99;
  const total = getCartTotal() + shippingCost;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        {/* Header */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 font-['Afacad:Regular',sans-serif] text-[18px] hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={20} />
          Back to Cart
        </button>

        <h1 className="font-['Aclonica:Regular',sans-serif] text-[42px] mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map(step => (
              <div key={step} className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step ? <Check size={20} /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-24 h-1 ${currentStep > step ? 'bg-black' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="col-span-2">
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="font-['Aclonica:Regular',sans-serif] text-[28px] mb-6">
                  Contact Information
                </h2>
                <div>
                  <label className="block font-['Afacad:Regular',sans-serif] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Afacad:Regular',sans-serif] focus:border-black outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-['Afacad:Regular',sans-serif] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => updateFormData('phone', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Afacad:Regular',sans-serif] focus:border-black outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <button
                  onClick={handleNext}
                  className="w-full bg-black text-white py-4 rounded-lg font-['Afacad:Regular',sans-serif] text-[18px] hover:opacity-90 transition-opacity"
                >
                  Continue to Shipping
                </button>
              </div>
            )}

            {/* Step 2: Shipping Address */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="font-['Aclonica:Regular',sans-serif] text-[28px] mb-6">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['Afacad:Regular',sans-serif] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={e => updateFormData('firstName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Afacad:Regular',sans-serif] focus:border-black outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-['Afacad:Regular',sans-serif] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={e => updateFormData('lastName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Afacad:Regular',sans-serif] focus:border-black outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-['Afacad:Regular',sans-serif] mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={e => updateFormData('address', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Afacad:Regular',sans-serif] focus:border-black outline-none"
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block font-['Afacad:Regular',sans-serif] mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={e => updateFormData('city', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Afacad:Regular',sans-serif] focus:border-black outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-['Afacad:Regular',sans-serif] mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={e => updateFormData('state', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Afacad:Regular',sans-serif] focus:border-black outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-['Afacad:Regular',sans-serif] mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={e => updateFormData('zipCode', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Afacad:Regular',sans-serif] focus:border-black outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleBack}
                    className="flex-1 bg-white border-2 border-black py-4 rounded-lg font-['Afacad:Regular',sans-serif] text-[18px] hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 bg-black text-white py-4 rounded-lg font-['Afacad:Regular',sans-serif] text-[18px] hover:opacity-90 transition-opacity"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="font-['Aclonica:Regular',sans-serif] text-[28px] mb-6">
                  Payment Information
                </h2>
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-6">
                  <p className="font-['Afacad:Regular',sans-serif] text-[14px]">
                    <strong>Demo Mode:</strong> This is a prototype. No actual payment will be processed.
                  </p>
                </div>
                <div>
                  <label className="block font-['Afacad:Regular',sans-serif] mb-2">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={e => updateFormData('cardNumber', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Afacad:Regular',sans-serif] focus:border-black outline-none"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div>
                  <label className="block font-['Afacad:Regular',sans-serif] mb-2">
                    Cardholder Name *
                  </label>
                  <input
                    type="text"
                    value={formData.cardName}
                    onChange={e => updateFormData('cardName', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Afacad:Regular',sans-serif] focus:border-black outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['Afacad:Regular',sans-serif] mb-2">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      value={formData.expiryDate}
                      onChange={e => updateFormData('expiryDate', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Afacad:Regular',sans-serif] focus:border-black outline-none"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block font-['Afacad:Regular',sans-serif] mb-2">
                      CVV *
                    </label>
                    <input
                      type="text"
                      value={formData.cvv}
                      onChange={e => updateFormData('cvv', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-['Afacad:Regular',sans-serif] focus:border-black outline-none"
                      placeholder="123"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleBack}
                    className="flex-1 bg-white border-2 border-black py-4 rounded-lg font-['Afacad:Regular',sans-serif] text-[18px] hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleComplete}
                    className="flex-1 bg-black text-white py-4 rounded-lg font-['Afacad:Regular',sans-serif] text-[18px] hover:opacity-90 transition-opacity"
                  >
                    Complete Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="col-span-1">
            <div className="bg-[#F5E6D3] rounded-lg p-6 sticky top-8">
              <h2 className="font-['Aclonica:Regular',sans-serif] text-[20px] mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-4 max-h-[300px] overflow-y-auto">
                {cartItems.map(item => (
                  <div key={`${item.product.id}-${item.coffeeType || 'default'}`} className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-white flex-shrink-0">
                      <img
                        src={getProductImage(item.product.id)}
                        alt={item.product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-['Aclonica:Regular',sans-serif] text-[12px]">
                        {item.product.name}
                      </p>
                      {item.coffeeType && (
                        <p className="font-['Afacad:Regular',sans-serif] text-[11px] text-[#666]">
                          {item.coffeeType === 'ground' ? 'Ground' : 'Whole Grain'}
                        </p>
                      )}
                      <p className="font-['Afacad:Regular',sans-serif] text-[12px] text-[#666]">
                        Qty: {item.quantity}
                      </p>
                      <p className="font-['Afacad:Regular',sans-serif] text-[12px]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-400 pt-4 space-y-2">
                <div className="flex justify-between font-['Afacad:Regular',sans-serif] text-[14px]">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-['Afacad:Regular',sans-serif] text-[14px]">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-400 pt-2">
                  <div className="flex justify-between font-['Aclonica:Regular',sans-serif] text-[18px]">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}