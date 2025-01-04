import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

const ServicesPortfolio = () => {
  const { t } = useTranslation();

  const services = t("services_portfolio.services", { returnObjects: true });

  return (
    <section className="bg-[#f4f4f4] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            {t("services_portfolio.section_title")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            {t("services_portfolio.section_description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:translate-y-[-4px] hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover w-full h-full transition duration-300 hover:scale-105"
                />
                {/* Category Badge */}
                <span className="absolute px-3 py-1 text-sm font-medium text-gray-700 rounded-full top-4 left-4 bg-white/90">
                  {service.category}
                </span>
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333333] mb-2">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                <button className="inline-flex items-center font-medium text-green-600 transition-colors duration-200 hover:text-green-700 group">
                  {t("services_portfolio.learn_more")}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPortfolio;
