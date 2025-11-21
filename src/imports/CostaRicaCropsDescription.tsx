import svgPaths from "./svg-bry3wm821f";
import imgImage3 from "figma:asset/91c02f8b27af991163ce628a09396102ce826e16.png";
import imgImage4 from "figma:asset/ca63f9575f7e0a5b40febd48fb4c88db2e8923a3.png";
import imgAZqSrQcNc3FLaFk8Oj7GAZqSrQcNvxl78MGhfdJla2 from "figma:asset/1795c24672e8c19d34cba04fffe6cd531d309588.png";

function Group() {
  return (
    <div className="absolute contents left-[30px] top-[27px]">
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[51px] leading-[normal] left-[30px] not-italic text-[48px] text-black top-[27px] w-[239px]">CROFFEE</p>
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[18px] leading-[normal] left-[428px] not-italic text-[15px] text-black top-[44px] whitespace-nowrap">Ground and whole grain</p>
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[18px] leading-[normal] left-[811.5px] not-italic text-[15px] text-black text-center top-[44px] translate-x-[-50%] whitespace-nowrap">Crods</p>
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[18px] leading-[normal] left-[1013px] not-italic text-[15px] text-black top-[44px] w-[85px]">About us</p>
      <div className="absolute h-[30px] left-[1399px] top-[34px] w-[32px]" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[158.08%] left-[-383.11%] max-w-none top-[-24.23%] w-[525.93%]" src={imgImage3} />
        </div>
      </div>
    </div>
  );
}

export default function CostaRicaCropsDescription() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center" data-name="COSTA RICA CROPS DESCRIPTION">
      <Group />
      
      {/* Divider Line */}
      <div className="w-full border-t border-black mt-[calc(10%+0.3px)]" />
      
      {/* Main Content - Centered */}
      <div className="flex flex-col items-center justify-center w-full max-w-[1200px] px-8 py-12">
        {/* Go Back */}
        <p className="font-['Aclonica:Regular',sans-serif] self-start mb-8 text-[16px] text-black">GO BACK</p>
        
        {/* Product Image and Details Container */}
        <div className="flex items-center justify-center gap-12 w-full">
          {/* Product Image */}
          <div className="w-[583px] h-[387px]" data-name="AZqSrQcNC3fLa_-FK8Oj7g-AZqSrQcNvxl78m-GhfdJLA 2">
            <div className="w-full h-full overflow-hidden">
              <img alt="" className="w-full h-full object-contain" src={imgAZqSrQcNc3FLaFk8Oj7GAZqSrQcNvxl78MGhfdJla2} />
            </div>
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col items-center w-[536px]">
            {/* Title and Rating */}
            <div className="text-center mb-6">
              <p className="font-['Actor:Regular',sans-serif] text-[48px] mb-4">COSTA RICA CRODS</p>
              <div className="flex justify-center mb-4">
                <svg className="w-[128px] h-[27px]" fill="none" preserveAspectRatio="none" viewBox="0 0 128 27">
                  <g id="Group 3">
                    <path d={svgPaths.p300ee600} fill="var(--fill-0, #F4D300)" id="Star 1" />
                    <path d={svgPaths.p29784a80} fill="var(--fill-0, #F4D300)" id="Star 2" />
                    <path d={svgPaths.p2c687500} fill="var(--fill-0, #F4D300)" id="Star 3" />
                    <path d={svgPaths.p4618200} fill="var(--fill-0, #F4D300)" id="Star 4" />
                    <path d={svgPaths.p279557e0} fill="var(--fill-0, #F4D300)" id="Star 5" />
                  </g>
                </svg>
              </div>
              <p className="font-['Actor:Regular',sans-serif] text-[24px] mb-2">$7.99</p>
            </div>
            
            {/* Type Section */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <p className="font-['Actor:Regular',sans-serif] text-[20px]">TYPE:</p>
              <p className="font-['Actor:Regular',sans-serif] text-[20px]">Pods</p>
              <div className="flex gap-2 ml-2">
                <div className="h-[31px] w-[24px] rounded-[5px]" data-name="image 4">
                  <div className="w-full h-full overflow-hidden rounded-[5px]">
                    <img alt="" className="w-full h-full object-cover" src={imgImage4} />
                  </div>
                </div>
                <div className="h-[31px] w-[24px] rounded-[5px]" data-name="image 5">
                  <div className="w-full h-full overflow-hidden rounded-[5px]">
                    <img alt="" className="w-full h-full object-cover" src={imgImage4} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <div className="w-full mb-8">
              <div className="bg-[#999eb6] h-[51px] rounded-[20px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[16px] text-black">ADD TO CART</p>
              </div>
            </div>
            
            {/* Description */}
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black text-center">need to write description</p>
          </div>
        </div>
      </div>
    </div>
  );
}