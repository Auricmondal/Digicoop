import React, { useState } from "react";
import german from "@/assets/icons/german.webp";
import uk from "@/assets/icons/uk.webp";
const LanguageSelect = () => {
  const [language, setLanguage] = useState("en");
  const [open, setOpen] = useState(false);

  const languages = {
    en: { label: "English", img: german }, // UK flag
    de: { label: "Deutsch", img: uk }, // Germany flag
  };

  return (
    <div className="border border-black/15 rounded-md">
      {/* Desktop: flag-only */}
      <div className="hidden [@media(min-width:940px)]:flex items-center gap-1">
        {Object.entries(languages).map(([key, { label, img }]) => (
          <button
            key={key}
            onClick={() => setLanguage(key)}
            className={`p-1 rounded-md transition flex items-center justify-center ${
              language === key ? "bg-tint" : ""
            }`}
            title={label}
          >
            <img
              src={img}
              alt={label}
              style={{
                width: "1.5rem",
                height: "1.5rem",
                display: "inline-block",
              }}
            />
          </button>
        ))}
      </div>

      {/* Mobile: custom dropdown with flags + labels */}
      <div className="relative flex [@media(min-width:940px)]:hidden w-full text-black">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between border border-black/15 rounded-md p-2 bg-white"
        >
          <span className="flex items-center gap-2">
            <img
              src={languages[language].img}
              alt={languages[language].label}
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            {languages[language].label}
          </span>
          <span className="text-gray-500">▼</span>
        </button>

        {open && (
          <ul className="absolute top-full left-0 w-full bg-white border border-black/15 rounded-md shadow-md z-10">
            {Object.entries(languages).map(([key, { label, img }]) => (
              <li key={key}>
                <button
                  onClick={() => {
                    setLanguage(key);
                    setOpen(false);
                  }}
                  className="w-full flex items-center gap-2 p-2 hover:bg-gray-100"
                >
                  <img
                    src={img}
                    alt={label}
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelect;
