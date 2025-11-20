export default function AboutUs() {
  return (
    <div className="bg-white relative size-full" data-name="About Us">
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[51px] leading-[normal] left-[600px] not-italic text-[48px] text-black top-[19px] w-[239px]">CROFFEE</p>
      <div className="absolute font-['Actor:Regular',sans-serif] h-[324px] leading-[normal] left-[725px] not-italic text-[24px] text-black text-center top-[219px] translate-x-[-50%] w-[1168px]">
        <p className="mb-0">At CROFFEE, we’re more than just a coffee shop, we’re a destination for discovering the richness of global coffee culture. Our name reflects who we are and where we come from: CR for Costa Rica, blended with our passion for coffee. The result is CROFFEE,</p>
        <p className="mb-0">{` a celebration of origin, flavor, and identity.`}</p>
        <p className="mb-0">We carefully source our beans from some of the world’s most exceptional coffee regions. Our primary pride is Costa Rica, known for its high-altitude plantations and award-winning farms. To complement it, we also offer outstanding coffees from Colombia, Brazil, and Ethiopia, each one carrying its own unique notes, traditions, and stories.</p>
        <p className="mb-0">Every cup we serve is crafted to help you explore the true character of these origins, their aroma, their flavor, and their heritage.</p>
        <p>We hope you’ll not only taste the quality but feel the journey behind every bean. Welcome to CROFFEE.</p>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.004820880480110645)+(var(--transform-inner-height)*0.9999883770942688)))] items-center justify-center left-[-13px] top-[80px] w-[calc(1px*((var(--transform-inner-height)*0.004820880480110645)+(var(--transform-inner-width)*0.9999883770942688)))]" style={{ "--transform-inner-width": "1453", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.724deg]">
          <div className="h-0 relative w-[1453.02px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1454 1">
                <line id="Line 2" stroke="var(--stroke-0, black)" x2="1453.02" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[50px] leading-[normal] left-[46.5px] not-italic text-[36px] text-black text-center top-[29px] translate-x-[-50%] w-[57px]">X</p>
      <div className="absolute h-[425px] left-[112px] top-[168px] w-[1225px]">
        <div aria-hidden="true" className="absolute border-[7px] border-black border-solid inset-[-7px] pointer-events-none" />
      </div>
    </div>
  );
}