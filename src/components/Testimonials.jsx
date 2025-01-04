import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: t("testimonials.testimonials.0.name"),
      location: t("testimonials.testimonials.0.location"),
      rating: 5,
      quote: t("testimonials.testimonials.0.quote"),
      image: "testimonial4.jpg",
      tourType: t("testimonials.testimonials.0.tourType"),
      date: t("testimonials.testimonials.0.date"),
    },
    {
      id: 2,
      name: t("testimonials.testimonials.1.name"),
      location: t("testimonials.testimonials.1.location"),
      rating: 5,
      quote: t("testimonials.testimonials.1.quote"),
      image: "testimonial4.jpg",
      tourType: t("testimonials.testimonials.1.tourType"),
      date: t("testimonials.testimonials.1.date"),
    },
    {
      id: 3,
      name: t("testimonials.testimonials.2.name"),
      location: t("testimonials.testimonials.2.location"),
      rating: 5,
      quote: t("testimonials.testimonials.2.quote"),
      image: "testimonial4.jpg",
      tourType: t("testimonials.testimonials.2.tourType"),
      date: t("testimonials.testimonials.2.date"),
    },
    {
      id: 4,
      name: t("testimonials.testimonials.3.name"),
      location: t("testimonials.testimonials.3.location"),
      rating: 5,
      quote: t("testimonials.testimonials.3.quote"),
      image: "testimonial4.jpg",
      tourType: t("testimonials.testimonials.3.tourType"),
      date: t("testimonials.testimonials.3.date"),
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-[#eeeeee]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#555555] mb-4">
            {t("testimonials.sectionTitle")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            {t("testimonials.sectionSubtitle")}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6">
            <Quote className="w-8 h-8 text-teal-500/20" />
          </div>

          {/* Testimonial Content */}
          <div className="p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="mb-6">
                <div className="relative">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="object-cover w-16 h-16 border-2 border-teal-500 rounded-full"
                  />
                  <div className="absolute px-3 py-1 text-xs text-white -translate-x-1/2 bg-teal-500 rounded-full -bottom-2 left-1/2">
                    {t("testimonials.buttons.verified")}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 space-x-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-[#555555] font-medium mb-6">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="space-y-2">
                <div className="font-bold text-[#555555]">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonials[activeIndex].location}
                </div>
                <div className="text-sm font-medium text-teal-600">
                  {testimonials[activeIndex].tourType}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute -translate-y-1/2 top-1/2 left-4">
            <button
              onClick={prevTestimonial}
              className="p-2 text-gray-600 bg-white rounded-full shadow-lg hover:bg-gray-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute -translate-y-1/2 top-1/2 right-4">
            <button
              onClick={nextTestimonial}
              className="p-2 text-gray-600 bg-white rounded-full shadow-lg hover:bg-gray-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="absolute flex space-x-2 -translate-x-1/2 -bottom-10 left-1/2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                  index === activeIndex ? "bg-teal-500" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid max-w-4xl grid-cols-2 gap-8 mx-auto mt-20 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-teal-600">10,000+</div>
            <div className="text-gray-600">
              {t("testimonials.stats.labels.happyTravelers")}
            </div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-teal-600">4.9/5</div>
            <div className="text-gray-600">
              {t("testimonials.stats.labels.averageRating")}
            </div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-teal-600">50+</div>
            <div className="text-gray-600">
              {t("testimonials.stats.labels.destinations")}
            </div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-teal-600">98%</div>
            <div className="text-gray-600">
              {t("testimonials.stats.labels.wouldBookAgain")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
