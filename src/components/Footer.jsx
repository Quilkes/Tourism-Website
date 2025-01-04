import React from "react";
import { useTranslation } from "react-i18next";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="container px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {t("footer.companyName")}
            </h3>
            <p className="text-gray-600">{t("footer.tagline")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#ff7f50]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#ff7f50]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#ff7f50]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#ff7f50]">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">
              {t("footer.quickLinks.title")}
            </h4>
            <ul className="space-y-4">
              {t("footer.quickLinks.links", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center text-gray-600 group hover:text-[#ff7f50]"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1" />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">
              {t("footer.contact.title")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ff7f50]" />
                <p className="text-gray-600">{t("footer.contact.address")}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ff7f50]" />
                <p className="text-gray-600">{t("footer.contact.phone")}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ff7f50]" />
                <p className="text-gray-600">{t("footer.contact.email")}</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">
              {t("footer.newsletter.title")}
            </h4>
            <p className="text-gray-600">
              {t("footer.newsletter.description")}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-[#ff7f50] rounded-lg hover:bg-opacity-90"
              >
                {t("footer.newsletter.subscribeButton")}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-600">
              {t("footer.bottomBar.copyright", "2025")}
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-[#ff7f50]"
              >
                {t("footer.bottomBar.privacyPolicy")}
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-[#ff7f50]"
              >
                {t("footer.bottomBar.termsOfService")}
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-[#ff7f50]"
              >
                {t("footer.bottomBar.cookiePolicy")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
