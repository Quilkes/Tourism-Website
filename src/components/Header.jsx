import React, { useState } from "react";
import { Globe2, Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navigation = [
    {
      name: t("header.dayTours"),
      href: "#",
      dropdown: [
        { name: t("header.cityTours"), href: "#" },
        { name: t("header.natureTours"), href: "#" },
        { name: t("header.adventureTours"), href: "#" },
      ],
    },
    {
      name: t("header.packages"),
      href: "#",
      dropdown: [
        { name: t("header.familyPackage"), href: "#" },
        { name: t("header.honeymoonPackage"), href: "#" },
        { name: t("header.groupPackage"), href: "#" },
      ],
    },
    {
      name: t("header.activities"),
      href: "#",
      dropdown: [
        { name: t("header.waterSports"), href: "#" },
        { name: t("header.mountainClimbing"), href: "#" },
        { name: t("header.culturalEvents"), href: "#" },
      ],
    },
    { name: t("header.transfers"), href: "#" },
    { name: t("header.contact"), href: "#" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full py-4 bg-teal-900 shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              {t("header.logo")}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:space-x-4">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-md hover:bg-teal-800">
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </button>
                {item.dropdown && (
                  <div className="absolute left-0 invisible w-48 mt-2 transition-all duration-200 origin-top-left bg-white rounded-md shadow-lg opacity-0 group-hover:visible ring-1 ring-black ring-opacity-5 group-hover:opacity-100">
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right side buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <Globe2 className="w-4 h-4 mr-2" />
              {i18n.language.toUpperCase()}
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-orange-500 rounded-md hover:bg-orange-600">
              {t("header.bookNow")}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-white rounded-md hover:bg-teal-800"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="w-full h-screen lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white rounded-md hover:bg-teal-800"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {item.dropdown && activeDropdown === index && (
                    <div className="px-4 py-2 mt-2 space-y-2 bg-teal-800 rounded-md">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-teal-700"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Mobile buttons */}
            <div className="px-4 py-4 border-t border-teal-800">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center w-full px-4 py-2 mb-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-50"
              >
                <Globe2 className="w-4 h-4 mr-2" />
                {i18n.language.toUpperCase()}
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600">
                {t("header.bookNow")}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
