import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, MapPin, Calendar, Star, Users } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  const features = [
    { icon: MapPin, text: t("hero.features.items.0"), color: "text-[#ff7f50]" },
    {
      icon: Calendar,
      text: t("hero.features.items.1"),
      color: "text-[#008080]",
    },
    { icon: Star, text: t("hero.features.items.2"), color: "text-[#ffd700]" },
    { icon: Users, text: t("hero.features.items.3"), color: "text-[#98fb98]" },
  ];

  return (
    <div className="relative h-[800px]  md:h-[700px] bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="hero.jpg"
          alt="Scenic destination landscape"
          className="object-cover w-full h-full"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60"
          aria-hidden="true"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative h-full">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Navigation Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 py-4 mt-4 text-white/90 sm:justify-end">
            <span className="flex items-center text-sm">
              <Users className="w-4 h-4 mr-2" /> {t("hero.stats.happy_clients")}
            </span>
            <span className="flex items-center text-sm">
              <Star className="w-4 h-4 mr-2" /> 4.9/5 {t("hero.stats.rating")}
            </span>
          </div>

          {/* Hero Content Grid */}
          <div className="grid items-center grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:py-24">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 text-sm font-medium text-white rounded-full bg-white/10">
                #1 {t("hero.tagline")}
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t("hero.tagline")}
              </h1>

              <p className="max-w-xl text-xl text-white/90">
                {t("hero.description")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 rounded-lg bg-orange-600 hover:bg-opacity-90 hover:translate-y-[-2px]">
                  {t("hero.cta_start")}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 border-2 rounded-lg border-white/20 hover:bg-white/10 hover:translate-y-[-2px]">
                  {t("hero.cta_video")}
                </button>
              </div>
            </div>

            {/* Right Column - Featured Card */}
            <div className="relative p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  {t("hero.features.popular")}
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                      <span className="text-lg text-white">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="grid grid-cols-2 gap-4 py-8 border-t border-white/10 md:grid-cols-4">
            {[
              { label: t("hero.stats.destinations"), value: "100+" },
              { label: t("hero.stats.tours_completed"), value: "1000+" },
              { label: t("hero.stats.happy_clients"), value: "10k+" },
              { label: t("hero.stats.years_experience"), value: "15+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
