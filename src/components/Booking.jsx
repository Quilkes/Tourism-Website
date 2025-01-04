import React from "react";
import { useTranslation } from "react-i18next";
import {
  Search,
  Calendar,
  MapPin,
  Users,
  ChevronDown,
  Loader2,
} from "lucide-react";

const BookingSystem = () => {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = React.useState({
    destination: "",
    dateRange: "",
    guests: 1,
    type: "all",
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const [showFilters, setShowFilters] = React.useState(false);

  const tourTypes = [
    { id: "all", name: t("bookingSystem.form.typeOptions.all") },
    { id: "cultural", name: t("bookingSystem.form.typeOptions.cultural") },
    { id: "adventure", name: t("bookingSystem.form.typeOptions.adventure") },
    { id: "food", name: t("bookingSystem.form.typeOptions.food") },
    { id: "luxury", name: t("bookingSystem.form.typeOptions.luxury") },
  ];

  const popularDestinations = [
    "Amalfi Coast, Italy",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Banff National Park, Canada",
  ];

  const featuredExperiences = [
    {
      title: "Tuscany Wine Trail",
      type: t("bookingSystem.featuredExperiences.properties.type"),
      duration: "Full Day",
      price: "€189",
      rating: 4.9,
      image: "Tuscany Wine Trail.jpg",
    },
    {
      title: "Historic Rome at Sunset",
      type: t("bookingSystem.featuredExperiences.properties.type"),
      duration: "4 Hours",
      price: "€79",
      rating: 4.8,
      image: "Historic Rome at Sunse.jpg",
    },
    {
      title: "Alpine Adventure Trek",
      type: t("bookingSystem.featuredExperiences.properties.type"),
      duration: "Full Day",
      price: "€149",
      rating: 4.9,
      image: "Alpine Adventure Trek.jpg",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* Hero Search Section */}
      <div className="relative p-8 overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl md:p-12">
        <div className="absolute inset-0 bg-black/10" />

        {/* Search Content */}
        <div className="relative">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {t("bookingSystem.hero.title")}
          </h2>
          <p className="max-w-2xl mb-8 text-lg text-white/90">
            {t("bookingSystem.hero.description")}
          </p>

          {/* Search Form */}
          <div className="p-4 bg-white rounded-lg shadow-xl">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Destination */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t("bookingSystem.form.labels.destination")}
                  </label>
                  <div className="relative">
                    <MapPin className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type="text"
                      className="w-full h-12 pl-10 border-gray-200 rounded-lg shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      placeholder={t(
                        "bookingSystem.form.placeholders.destination"
                      )}
                      value={searchParams.destination}
                      onChange={(e) =>
                        setSearchParams({
                          ...searchParams,
                          destination: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Dates */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t("bookingSystem.form.labels.dates")}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type="text"
                      className="w-full h-12 pl-10 border-gray-200 rounded-lg shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      placeholder={t("bookingSystem.form.placeholders.dates")}
                      value={searchParams.dateRange}
                      onChange={(e) =>
                        setSearchParams({
                          ...searchParams,
                          dateRange: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Experience Type */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t("bookingSystem.form.labels.type")}
                  </label>
                  <div className="relative">
                    <select
                      className="w-full h-12 pl-3 border-gray-200 rounded-lg shadow-sm appearance-none focus:border-teal-500 focus:ring-teal-500"
                      value={searchParams.type}
                      onChange={(e) =>
                        setSearchParams({
                          ...searchParams,
                          type: e.target.value,
                        })
                      }
                    >
                      {tourTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 right-3 top-1/2" />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t("bookingSystem.form.labels.guests")}
                  </label>
                  <div className="relative">
                    <Users className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                    <select
                      className="w-full h-12 pl-10 border-gray-200 rounded-lg shadow-sm appearance-none focus:border-teal-500 focus:ring-teal-500"
                      value={searchParams.guests}
                      onChange={(e) =>
                        setSearchParams({
                          ...searchParams,
                          guests: e.target.value,
                        })
                      }
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}{" "}
                          {num === 1
                            ? t("bookingSystem.form.guestsOptions.singular")
                            : t("bookingSystem.form.guestsOptions.plural")}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 right-3 top-1/2" />
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  className="text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  {showFilters
                    ? t("bookingSystem.form.filtersButton.hide")
                    : t("bookingSystem.form.filtersButton.show")}
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center px-8 py-3 space-x-2 text-lg font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>
                        {t("bookingSystem.form.searchButton.loading.label")}
                      </span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>
                        {t("bookingSystem.form.searchButton.idle.label")}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Featured Experiences */}
      <div className="mt-12">
        <h3 className="mb-6 text-2xl font-bold text-gray-900">
          {t("bookingSystem.featuredExperiences.title")}
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredExperiences.map((experience, idx) => (
            <div
              key={idx}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="relative h-48">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="object-cover w-full h-full"
                />
                <span className="absolute px-3 py-1 text-sm font-medium text-gray-700 rounded-full top-4 left-4 bg-white/90">
                  {experience.type}
                </span>
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  {experience.title}
                </h4>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <span>{experience.duration}</span>
                  <span className="text-lg font-medium text-gray-900">
                    {experience.price}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-700">
                      {experience.rating}
                    </span>
                  </div>
                  <button className="font-medium text-teal-600 hover:text-teal-700">
                    {t("bookingSystem.featuredExperiences.actions.viewDetails")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="mt-12">
        <h3 className="mb-6 text-2xl font-bold text-gray-900">
          {t("bookingSystem.popularDestinations.title")}
        </h3>
        <div className="flex flex-wrap gap-3">
          {popularDestinations.map((destination) => (
            <button
              key={destination}
              className="px-6 py-3 font-medium text-gray-700 transition-colors duration-200 bg-white rounded-full shadow-md hover:bg-teal-50 hover:text-teal-700"
            >
              {destination}
            </button>
          ))}
        </div>
      </div>

      {/* Bokun Integration Container */}
      <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
        <div className="grid p-8 text-center border-2 border-gray-200 border-dashed rounded-lg h-60 place-content-center">
          <h3 className="mb-2 text-lg font-medium text-gray-700">
            {t("bookingSystem.bokunWidget.title")}
          </h3>
          <p className="text-gray-500">
            {t("bookingSystem.bokunWidget.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;
