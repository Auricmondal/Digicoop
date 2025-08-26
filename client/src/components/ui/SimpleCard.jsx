
const SimpleCard = ({ subsection, isReversed }) => {

  return (
    <div className={`flex flex-col sm:flex-row items-center h-[499px] ${isReversed ? "sm:flex-row-reverse" : ""}`}>

            <div className="w-full md:w-[50%] h-auto flex flex-col justify-center p-6 opacity-100 text-center lg:text-left order-1 lg:order-none"
            >
                  {/* Body text */}
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal leading-[130%] tracking-[-0.015em] md:leading-[1.6] md:tracking-[0em] text-left text-black ">
                        {subsection.description}
                  </p>
            </div>

            <div className="flex-1 order-2 lg:order-none h-full md:aspect-[4/3] lg:aspect-auto min-w-[320px] sm:w-[50%] overflow-hidden">
                  <img
                  src={subsection.img}
                  alt={`${subsection.title} Preview`}
                        className="w-full h-full object-cover rounded-lg"
                  />
            </div>
      </div>
  );
};

export default SimpleCard;
