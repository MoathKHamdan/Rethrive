import imgHeader from "figma:asset/b2d0842f138ce7d95861256b868ec35a96a6d27e.png";

function Header() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative" data-name="Header">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgHeader} />
    </div>
  );
}

export default function Link() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Link">
      <Header />
    </div>
  );
}