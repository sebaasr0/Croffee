import imgImage3 from "figma:asset/91c02f8b27af991163ce628a09396102ce826e16.png";
import imgAHighResolutionHomepageHeroIllustrationInAMatureRetroStyleInspiredByClassicMidCenturyTravelPostersAndVintageCoffeeAdsTheSceneIsSetInTheCoffeeHighlandsOfCostaRicaAtGoldenHour1 from "figma:asset/0fc37ac4f768bf7a283b7eb3ac46bb3be1f6cdc5.png";

function Group() {
  return (
    <div className="absolute contents left-[812px] top-[393px]">
      <div className="absolute bg-white h-[80px] left-[812px] rounded-[80px] top-[393px] w-[320.438px]" />
      <p className="absolute font-['Afacad:Regular',sans-serif] font-normal h-[37.531px] leading-[normal] left-[901px] text-[32px] text-black top-[414px] w-[156.908px]">SHOP NOW</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[30px] top-[27px]">
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[51px] leading-[normal] left-[30px] not-italic text-[48px] text-black top-[27px] w-[239px]">CROFFEE</p>
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[18px] leading-[normal] left-[428px] not-italic text-[15px] text-black top-[44px] w-[219px]">Ground and whole grain</p>
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[18px] leading-[normal] left-[811.5px] not-italic text-[15px] text-black text-center top-[44px] translate-x-[-50%] w-[157px]">Crods</p>
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[18px] leading-[normal] left-[1013px] not-italic text-[15px] text-black top-[44px] w-[85px]">About us</p>
      <div className="absolute h-[30px] left-[1399px] top-[34px] w-[32px]" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[158.08%] left-[-383.11%] max-w-none top-[-24.23%] w-[525.93%]" src={imgImage3} />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white relative size-full" data-name="HomePage">
      <div className="absolute h-[688px] left-0 top-[89px] w-[1445px]" data-name="A high-resolution homepage hero illustration in a mature retro style, inspired by classic mid-century travel posters and vintage coffee ads. The scene is set in the coffee highlands of Costa Rica, at golden hour.__ 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[108.86%] left-[-1.96%] max-w-none top-[-4.11%] w-[103.67%]" src={imgAHighResolutionHomepageHeroIllustrationInAMatureRetroStyleInspiredByClassicMidCenturyTravelPostersAndVintageCoffeeAdsTheSceneIsSetInTheCoffeeHighlandsOfCostaRicaAtGoldenHour1} />
        </div>
      </div>
      <Group />
      <Group1 />
      <div className="absolute h-0 left-0 top-[88.96px] w-[1440px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}