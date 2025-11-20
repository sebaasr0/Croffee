import svgPaths from "../imports/svg-zrvi14mdfr";
import imgImage3 from "figma:asset/91c02f8b27af991163ce628a09396102ce826e16.png";
import imgAZqUppaHserxLfWe6N5PFaAZqUppah0KZkDiXFauZvW from "figma:asset/01584ce73a714c0acb2dcb77ff0a131020270387.png";
import imgAZqUOqy4Roo3ERyvDc1JNwAZqUOqy5UEkcTqjtiL8Ig from "figma:asset/7a52c77ddc2bc7ee0ce59e9c5e3d305602dcc01c.png";
import imgAZqUpeOxExlNvFefi7HTqAZqUpeOxtYuX9NAoZUfPaw from "figma:asset/b06587e18753502985447d5332700eef7aaee070.png";
import imgAZqUo2VoCdsA7HqyHrcdQaAZqUo2VoRqVvWgYhZmK72A from "figma:asset/ffbb627107d7709ff101377e4d4b40bf58468f8e.png";

interface GroundAndWholeGrainPageProps {
  onProductClick?: (productId: string) => void;
}

function Group1() {
  return (
    <div className="absolute h-[13px] left-[230px] top-[calc(80%+25.4px)] w-[65px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 13">
        <g id="Group 3">
          <path d={svgPaths.pc2017c0} fill="var(--fill-0, #F4D300)" id="Star 1" />
          <path d={svgPaths.p14098200} fill="var(--fill-0, #F4D300)" id="Star 2" />
          <path d={svgPaths.p2beed000} fill="var(--fill-0, #F4D300)" id="Star 3" />
          <path d={svgPaths.p27398400} fill="var(--fill-0, #F4D300)" id="Star 4" />
          <path d={svgPaths.p1958a970} fill="var(--fill-0, #F4D300)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[149px] top-[calc(70%+59.1px)]">
      <div className="absolute font-['Actor:Regular',sans-serif] h-[114px] leading-[normal] left-[263px] not-italic text-[15px] text-black text-center top-[calc(70%+59.1px)] translate-x-[-50%] w-[228px]">
        <p className="mb-0">COSTA RICA COFFEE</p>
        <p className="mb-0">$14.99</p>
        <p>&nbsp;</p>
      </div>
      <Group1 />
    </div>
  );
}

function CostaRica({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute contents left-[149px] top-[calc(40%+14.2px)] cursor-pointer group" 
      data-name="COSTA RICA"
    >
      <Group2 />
      <div className="absolute h-[278px] left-[150px] top-[calc(40%+14.2px)] w-[211px] group-hover:opacity-80 transition-opacity" data-name="AZqUPPAHserxLFWe6N5pFA-AZqUPPAH0kZKDiXFauZV-w">
        <img alt="Costa Rica Coffee" className="block max-w-none size-full" height="278" src={imgAZqUppaHserxLfWe6N5PFaAZqUppah0KZkDiXFauZvW} width="211" />
      </div>
    </button>
  );
}

function Group6() {
  return (
    <div className="absolute h-[13px] left-[1144.5px] top-[calc(80%+17.48px)] w-[65px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 13">
        <g id="Group 3">
          <path d={svgPaths.pc2017c0} fill="var(--fill-0, #F4D300)" id="Star 1" />
          <path d={svgPaths.p14098200} fill="var(--fill-0, #F4D300)" id="Star 2" />
          <path d={svgPaths.p2beed000} fill="var(--fill-0, #F4D300)" id="Star 3" />
          <path d={svgPaths.p27398400} fill="var(--fill-0, #F4D300)" id="Star 4" />
          <path d={svgPaths.p1958a970} fill="var(--fill-0, #F4D300)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[1063.5px] top-[calc(70%+51.18px)]">
      <div className="absolute font-['Actor:Regular',sans-serif] h-[114px] leading-[normal] left-[1177.5px] not-italic text-[15px] text-black text-center top-[calc(70%+51.18px)] translate-x-[-50%] w-[228px]">
        <p className="mb-0">COLOMBIA COFFEE</p>
        <p className="mb-0">$14.99</p>
        <p>&nbsp;</p>
      </div>
      <Group6 />
    </div>
  );
}

function Colombia({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute contents left-[1027px] top-[calc(40%+31.2px)] cursor-pointer group" 
      data-name="COLOMBIA"
    >
      <Group5 />
      <div className="absolute h-[253px] left-[1027px] top-[calc(40%+31.2px)] w-[248.5px] group-hover:opacity-80 transition-opacity" data-name="AZqUOqy4roo3eRYVDc1JNw-AZqUOqy5UEkcTqjtiL8-ig">
        <img alt="Colombia Coffee" className="block max-w-none size-full" height="253" src={imgAZqUOqy4Roo3ERyvDc1JNwAZqUOqy5UEkcTqjtiL8Ig} width="248.5" />
      </div>
    </button>
  );
}

function Group7() {
  return (
    <div className="absolute h-[13px] left-[838px] top-[calc(80%+25.4px)] w-[64.682px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 13">
        <g id="Group 3">
          <path d={svgPaths.pc2017c0} fill="var(--fill-0, #F4D300)" id="Star 1" />
          <path d={svgPaths.p1958a970} fill="var(--fill-0, #F4D300)" id="Star 2" />
          <path d={svgPaths.p27398400} fill="var(--fill-0, #F4D300)" id="Star 3" />
          <path d={svgPaths.p2beed000} fill="var(--fill-0, #F4D300)" id="Star 4" />
          <path d={svgPaths.p94bb3f2} fill="var(--fill-0, #F4D300)" id="Star 5 Left Half" />
          <path d={svgPaths.pc26dd80} fill="var(--fill-0, #FBF5CE)" id="Star 5 Right Half" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[757px] top-[calc(70%+59.1px)]">
      <div className="absolute font-['Actor:Regular',sans-serif] h-[114px] leading-[normal] left-[871px] not-italic text-[15px] text-black text-center top-[calc(70%+59.1px)] translate-x-[-50%] w-[228px]">
        <p className="mb-0">BRAZIL COFFEE</p>
        <p className="mb-0">$14.99</p>
        <p>&nbsp;</p>
      </div>
      <Group7 />
    </div>
  );
}

function Brasil({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute contents left-[757px] top-[calc(40%+24.2px)] cursor-pointer group" 
      data-name="BRASIL"
    >
      <Group4 />
      <div className="absolute h-[268px] left-[801px] top-[calc(40%+24.2px)] w-[135px] group-hover:opacity-80 transition-opacity" data-name="AZqUPEOxEXL_nvFefi7hTQ-AZqUPEOxtYuX9NAoZUfPaw">
        <img alt="Brazil Coffee" className="block max-w-none size-full" height="268" src={imgAZqUpeOxExlNvFefi7HTqAZqUpeOxtYuX9NAoZUfPaw} width="135" />
      </div>
    </button>
  );
}

function Group8() {
  return (
    <div className="absolute h-[13px] left-[542px] top-[calc(80%+25.4px)] w-[64.682px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 13">
        <g id="Group 3">
          <path d={svgPaths.pc2017c0} fill="var(--fill-0, #F4D300)" id="Star 1" />
          <path d={svgPaths.pc26dd80} fill="var(--fill-0, #FBF5CE)" id="Star 2" />
          <path d={svgPaths.p94bb3f2} fill="var(--fill-0, #FBF5CE)" id="Star 2_2" />
          <path d={svgPaths.p2beed000} fill="var(--fill-0, #F4D300)" id="Star 3" />
          <path d={svgPaths.p27398400} fill="var(--fill-0, #F4D300)" id="Star 4" />
          <path d={svgPaths.p1958a970} fill="var(--fill-0, #F4D300)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[461px] top-[calc(70%+59.1px)]">
      <div className="absolute font-['Actor:Regular',sans-serif] h-[114px] leading-[normal] left-[575px] not-italic text-[15px] text-black text-center top-[calc(70%+59.1px)] translate-x-[-50%] w-[228px]">
        <p className="mb-0">ETHIOPIA COFFEE</p>
        <p className="mb-0">$14.99</p>
        <p>&nbsp;</p>
      </div>
      <Group8 />
    </div>
  );
}

function Ethiopia({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute contents left-[461px] top-[calc(40%+31.2px)] cursor-pointer group" 
      data-name="ETHIOPIA"
    >
      <Group3 />
      <div className="absolute h-[243px] left-[506px] top-[calc(40%+31.2px)] w-[149px] group-hover:opacity-80 transition-opacity" data-name="AZqUO2VOCdsA7HqyHrcdQA-AZqUO2VORqVvWgYhZmK72A">
        <img alt="Ethiopia Coffee" className="block max-w-none size-full" height="243" src={imgAZqUo2VoCdsA7HqyHrcdQaAZqUo2VoRqVvWgYhZmK72A} width="149" />
      </div>
    </button>
  );
}

export function GroundAndWholeGrainPage({ onProductClick }: GroundAndWholeGrainPageProps) {
  return (
    <div className="bg-white relative size-full min-h-screen" data-name="Ground and Whole Grain">
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[85px] leading-[normal] left-[331px] not-italic text-[48px] text-black top-[calc(10%+59.3px)] w-[777px]">GROUND AND WHOLE GRAIN</p>
      <p className="absolute font-['Aclonica:Regular',sans-serif] h-[11px] leading-[normal] left-[19px] not-italic text-[10px] text-black top-[calc(30%-13.1px)] w-[82px]">4 PRODUCTS</p>
      <CostaRica onClick={() => onProductClick?.('4')} />
      <Colombia onClick={() => onProductClick?.('2')} />
      <Brasil onClick={() => onProductClick?.('3')} />
      <Ethiopia onClick={() => onProductClick?.('1')} />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.0020833287853747606)+(var(--transform-inner-height)*0.9999978542327881)))] items-center justify-center left-0 top-[calc(20%+46.6px)] w-[calc(1px*((var(--transform-inner-height)*0.0020833287853747606)+(var(--transform-inner-width)*0.9999978542327881)))]" style={{ "--transform-inner-width": "1440", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.881deg]">
          <div className="h-0 relative w-[1440px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
                <line id="Line 3" stroke="var(--stroke-0, black)" x2="1440" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
