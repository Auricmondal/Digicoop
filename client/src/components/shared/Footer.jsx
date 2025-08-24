import Instagram from "../../assets/icons/Instagram.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Mail from "../../assets/icons/Mail.svg";
import MapPin from "../../assets/icons/MapPin.svg";
import Phone from "../../assets/icons/Phone.svg";
import SectionWrapper from "../../layouts/SectionWrapper";

export default function Footer() {
  return (
    <SectionWrapper className="bg-tint">
    <footer className="text-primary-dark max-w-[1460px] mx-auto">
      <div className=" mx-auto flex flex-col items-center gap-6 md:items-start md:gap-10">
        {/* Top Section (Logo + Socials) */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="md:text-8xl text-6xl font-bold">DigiCoop</h2>
          <div className="flex justify-start gap-[14.25px] mt-3">
            <a 
              href="#" 
              aria-label="Instagram" 
              className="w-[34.2px] h-[34.2px] border-[0.71px] border-primary-dark rounded-[5.7px] p-[2.85px] flex items-center justify-center opacity-100"
            >
              <img src={Instagram} className="w-full h-full object-contain" alt="Instagram" />
            </a>
            <a 
              href="#" 
              aria-label="Facebook" 
              className="w-[34.2px] h-[34.2px] border-[0.71px] border-primary-dark rounded-[5.7px] p-[2.85px] flex items-center justify-center opacity-100"
            >
              <img src={Facebook} className="w-full h-full object-contain" alt="Facebook" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-8 text-sm text-center md:text-left">
          {/* Contact Info */}
          <div className="space-y-2 md:w-1/3">
            <p className="flex justify-center md:justify-start items-center gap-2">
              <img src={MapPin} className="w-4 h-4" alt="Location" /> 123 Innovation Drive, Berlin, 10115, Germany
            </p>
            <p className="flex justify-center md:justify-start items-center gap-2">
              <img src={Mail} className="w-4 h-4" alt="Email" /> contact@digicoop.com
            </p>
            <p className="flex justify-center md:justify-start items-center gap-2">
              <img src={Phone} className="w-4 h-4" alt="Phone" /> +49 30 1234 5678
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row sm:gap-16 md:w-2/3 justify-center md:justify-end text-[#416dae] text-base">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2">Product</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-dark-tint transition-colors">DigiV</a></li>
                <li><a href="#" className="hover:text-dark-tint transition-colors">Digi Audit</a></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2">Who We Serve</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-dark-tint transition-colors">Industry 1</a></li>
                <li><a href="#" className="hover:text-dark-tint transition-colors">Industry 2</a></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-dark-tint transition-colors">About</a></li>
                <li><a href="#" className="hover:text-dark-tint transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="w-full border-t border-primary-dark/20 pt-4 flex flex-col md:flex-row justify-between text-xs text-shadow-custom-neutral-400 gap-2 text-center md:text-left">         */}
        <div className="w-full pt-4 flex flex-col md:flex-row justify-between text-xs text-[#7f91af] gap-2 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-dark-tint transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-dark-tint transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-dark-tint transition-colors">Cookie Policy</a>
          </div>
          <p>© 2025 DigiCoop. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </SectionWrapper>
  );
}
