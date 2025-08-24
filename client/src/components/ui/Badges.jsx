export function GradientBadge({ text }) {
  return (
    <span className="  p-[8px_32px] rounded-full opacity-100 inline-flex items-center justify-center text-[#00286B] text-xs md:text-sm font-medium bg-gradient-to-r from-[rgba(70,127,253,0.21)] to-[rgba(234,242,255,0.21)] tint-border-gradient ">
      {text}
    </span>
  );
}
