export function GradientBadge({ text }) {
  return (
    <span className="  p-[8px_32px] rounded-full opacity-100 inline-flex items-center justify-center text-[#00286B] text-xs md:text-sm font-medium bg-gradient-to-r from-[rgba(70,127,253,0.21)] to-[rgba(234,242,255,0.21)] tint-border-gradient ">
      {text}
    </span>
  );
}

export function AboutGradientBadge({ text }) {
  return (
    <span className="bg-gradient-to-r from-[#467FFD] to-[#EAF2FF] w-[208px] h-[34px] p-[8px_32px] rounded-[48px] opacity-100 inline-flex items-center justify-center text-[#00286B] text-xs md:text-sm font-medium tint-border-gradient">{text}</span>
  );
}
