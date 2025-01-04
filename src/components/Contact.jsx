import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = React.useState("idle"); // idle, submitting, success
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim())
      newErrors.name = t("contactSection.form.name") + " is required";
    if (!formData.email.trim())
      newErrors.email = t("contactSection.form.email") + " is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = t("contactSection.form.email") + " must be valid";
    if (!formData.message.trim())
      newErrors.message = t("contactSection.form.message") + " is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      setStatus("submitting");
      // Simulate form submission
      setTimeout(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t("contactSection.waysToConnect.methods.0.title"),
      content: t("contactSection.waysToConnect.methods.0.content"),
      subtext: t("contactSection.waysToConnect.methods.0.subtext"),
    },
    {
      icon: Mail,
      title: t("contactSection.waysToConnect.methods.1.title"),
      content: t("contactSection.waysToConnect.methods.1.content"),
      subtext: t("contactSection.waysToConnect.methods.1.subtext"),
    },
    {
      icon: MapPin,
      title: t("contactSection.waysToConnect.methods.2.title"),
      content: t("contactSection.waysToConnect.methods.2.content"),
      subtext: t("contactSection.waysToConnect.methods.2.subtext"),
    },
    {
      icon: Clock,
      title: t("contactSection.waysToConnect.methods.3.title"),
      content: t("contactSection.waysToConnect.methods.3.content"),
      subtext: t("contactSection.waysToConnect.methods.3.subtext"),
    },
  ];

  return (
    <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#343a40] mb-4">
            {t("contactSection.header.title")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("contactSection.header.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#343a40] mb-8">
              {t("contactSection.waysToConnect.title")}
            </h3>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="p-6 transition-shadow duration-300 rounded-lg bg-gray-50 hover:shadow-md"
                >
                  <div className="inline-block p-3 mb-4 rounded-lg bg-teal-500/10">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h4 className="font-medium text-[#343a40] mb-2">
                    {item.title}
                  </h4>
                  <p className="mb-1 font-medium text-gray-900">
                    {item.content}
                  </p>
                  <p className="text-sm text-gray-500">{item.subtext}</p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="p-6 mt-12 border border-teal-100 rounded-lg bg-gradient-to-br from-teal-50 to-blue-50">
              <h4 className="font-medium text-[#343a40] mb-3">
                {t("contactSection.additionalInfo.title")}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("contactSection.additionalInfo.items.0")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("contactSection.additionalInfo.items.1")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{t("contactSection.additionalInfo.items.2")}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  {t("contactSection.form.name")}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  {t("contactSection.form.email")}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  {t("contactSection.form.phone")}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  {t("contactSection.form.subject")}
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">
                    {t("contactSection.form.subjectOptions.default")}
                  </option>
                  <option value="tour">
                    {t("contactSection.form.subjectOptions.tour")}
                  </option>
                  <option value="custom">
                    {t("contactSection.form.subjectOptions.custom")}
                  </option>
                  <option value="group">
                    G{t("contactSection.form.subjectOptions.group")}
                  </option>
                  <option value="other">
                    {t("contactSection.form.subjectOptions.other")}
                  </option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  {t("contactSection.form.message")}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                  placeholder={t("contactSection.form.vacation")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-[#ff7f50] text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span> {t("contactSection.form.submit.sending")}</span>
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{t("contactSection.form.submit.success")}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t("contactSection.form.submit.default")}</span>
                  </>
                )}
              </button>

              {/* Success Message */}
              {status === "success" && (
                <div className="mt-4 text-center text-green-600">
                  {t("contactSection.form.successMessage")}
                </div>
              )}

              {/* Privacy Note */}
              <p className="mt-4 text-sm text-center text-gray-500">
                {t("contactSection.form.privacyNote")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
