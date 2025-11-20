import { Check, Home } from 'lucide-react';

interface OrderConfirmationProps {
  onReturnHome: () => void;
}

export function OrderConfirmation({ onReturnHome }: OrderConfirmationProps) {
  const orderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-[600px] text-center px-8">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <Check size={48} className="text-white" />
        </div>

        {/* Success Message */}
        <h1 className="font-['Aclonica:Regular',sans-serif] text-[48px] mb-4">
          Order Confirmed!
        </h1>
        <p className="font-['Afacad:Regular',sans-serif] text-[24px] text-[#666] mb-8">
          Thank you for your order. Your coffee is on its way!
        </p>

        {/* Order Details */}
        <div className="bg-[#F5E6D3] rounded-lg p-8 mb-8">
          <p className="font-['Afacad:Regular',sans-serif] text-[16px] text-[#666] mb-2">
            Order Number
          </p>
          <p className="font-['Aclonica:Regular',sans-serif] text-[32px] mb-6">
            #{orderNumber}
          </p>
          <p className="font-['Afacad:Regular',sans-serif] text-[16px] text-[#666]">
            A confirmation email has been sent to your email address with all the order details.
          </p>
        </div>

        {/* Return Button */}
        <button
          onClick={onReturnHome}
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-['Afacad:Regular',sans-serif] text-[18px] hover:opacity-90 transition-opacity"
        >
          <Home size={20} />
          Return to Home
        </button>
      </div>
    </div>
  );
}
