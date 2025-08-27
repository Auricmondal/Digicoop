export function GradientBadge({
  text,
  textColor = "text-[#00286B]",
  borderGradient = "from-[rgba(0, 0, 150)] to-[rgba(0, 0, 150)]",
  backgroundColor = "from-[#CAE2FF] to-[#FBFCFF]",
}) {
  return (
    <span
      className={`inline-block p-[1px] rounded-full bg-gradient-to-r ${borderGradient}`}
    >
      <span
        className={` p-[8px_32px] rounded-full opacity-100 inline-flex items-center justify-center ${textColor} text-xs md:text-sm font-medium bg-gradient-to-r ${backgroundColor}`}
      >
        {text}
      </span>
    </span>
  );
}
