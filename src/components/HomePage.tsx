import imgAHighResolutionHomepageHeroIllustrationInAMatureRetroStyleInspiredByClassicMidCenturyTravelPostersAndVintageCoffeeAdsTheSceneIsSetInTheCoffeeHighlandsOfCostaRicaAtGoldenHour1 from "figma:asset/0fc37ac4f768bf7a283b7eb3ac46bb3be1f6cdc5.png";

interface HomePageProps {
  onShopNowClick: () => void;
  onProductClick?: (productId: string) => void;
}

function ShopNowButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute contents left-[812px] top-[393px]">
      <div className="absolute bg-white h-[80px] left-[812px] rounded-[80px] top-[393px] w-[320.438px]" />
      <button
        onClick={onClick}
        className="absolute font-['Afacad:Regular',sans-serif] font-normal h-[37.531px] leading-[normal] left-[901px] text-[32px] text-black top-[414px] w-[156.908px] cursor-pointer hover:opacity-80 transition-opacity"
      >
        SHOP NOW
      </button>
    </div>
  );
}

export function HomePage({ onShopNowClick }: HomePageProps) {
  return (
    <div className="bg-white w-full min-h-screen" data-name="HomePage">
      <div className="relative h-[688px] w-full" data-name="Hero Section">
        <div className="absolute h-[688px] left-0 top-0 w-full overflow-hidden">
          <img 
            alt="Coffee highlands" 
            className="absolute h-[108.86%] left-[-1.96%] max-w-none top-[-4.11%] w-[103.67%]" 
            src={imgAHighResolutionHomepageHeroIllustrationInAMatureRetroStyleInspiredByClassicMidCenturyTravelPostersAndVintageCoffeeAdsTheSceneIsSetInTheCoffeeHighlandsOfCostaRicaAtGoldenHour1} 
          />
        </div>
        <ShopNowButton onClick={onShopNowClick} />
      </div>
      
      {/* Footer Section */}
      <div className="bg-[#2D2D2D] text-white py-12 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-['Aclonica:Regular',sans-serif] text-[24px] mb-4">CROFFEE</h3>
              <p className="font-['Afacad:Regular',sans-serif] text-[#CCC]">
                Premium single-origin coffee from around the world, delivered to your door.
              </p>
            </div>
            <div>
              <h4 className="font-['Aclonica:Regular',sans-serif] mb-4">Quick Links</h4>
              <p className="font-['Afacad:Regular',sans-serif] text-[#CCC]">About Us</p>
              <p className="font-['Afacad:Regular',sans-serif] text-[#CCC] mt-2">Our Coffee</p>
              <p className="font-['Afacad:Regular',sans-serif] text-[#CCC] mt-2">Contact</p>
            </div>
            <div>
              <h4 className="font-['Aclonica:Regular',sans-serif] mb-4">Newsletter</h4>
              <p className="font-['Afacad:Regular',sans-serif] text-[#CCC]">
                Subscribe to get special offers and brewing tips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
