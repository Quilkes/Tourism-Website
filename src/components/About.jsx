import React, { useRef } from "react";
import { Users, Play, ArrowRight } from "lucide-react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

const Section = ({ children, id, className = "", bgColor = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative px-4 py-20 ${bgColor} ${className}`}
    >
      {children}
    </motion.section>
  );
};

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const corePrinciples = [
    {
      title: "Observe",
      description:
        "We carefully analyze your needs and wants to understand the unique challenges your business faces. Our thorough market analysis ensures targeted solutions that address your specific requirements.",
      color: "blue",
      lottiePath: "/observe-lottie.json",
    },
    {
      title: "Create",
      description:
        "We develop unique solutions to your problems through our innovative approach, transforming ideas into powerful digital solutions that drive your business forward.",
      color: "purple",
      lottiePath: "/create-lottie.json",
    },
    {
      title: "Shape",
      description:
        "We mold technology to shape your digital identity with our expertise, ensuring every solution perfectly aligns with your business goals and market position.",
      color: "green",
      lottiePath: "/shape-lottie.json",
    },
    {
      title: "Shine",
      description:
        "We empower you to stand out in this competitive world of marketing, achieving remarkable results that put you on the map of success.",
      color: "yellow",
      lottiePath: "/shine-lottie.json",
    },
  ];

  const PrincipleCard = ({ principle, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true });

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="transition-all transform"
      >
        <motion.div
          whileHover={{ y: -10 }}
          className="p-6 transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl"
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-6"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`w-full h-full rounded-full bg-${principle.color}-100 flex items-center justify-center`}
            >
              <span className="text-3xl font-bold">{principle.title[0]}</span>
            </div>
          </motion.div>
          <h3 className="mb-3 text-xl font-semibold text-center text-gray-900">
            {principle.title}
          </h3>
          <p className="text-center text-gray-600">{principle.description}</p>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="w-full min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-blue-600"
        style={{ scaleX }}
      />

      <Section id="who">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            className="flex items-center justify-center mb-8"
            whileInView={{ scale: [0.5, 1.2, 1] }}
            transition={{ duration: 0.8 }}
          >
            <Users className="w-12 h-12 text-blue-600" />
          </motion.div>
          <motion.h1
            className="mb-6 text-4xl font-bold text-center text-gray-900 md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Who Are We?
          </motion.h1>
          <div className="space-y-6 text-xl leading-relaxed text-gray-700">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We, at <span className="font-bold">S3A Technologies</span>, are a
              group of highly-qualified and innovative individuals. The 'S'
              stands for 'support', the 'A' for 'achieving', and 3 for 3x
              efficiency - that's how we do it at S3A Technologies!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With the expertise of IT wizards, we offer the best-in-class
              digital solutions for you and your company. We're not just here to
              provide a service, we are here to provide solutions. Understanding
              the current market pressures, analyzing your company's needs, and
              delivering the desired success to your doorstep.
            </motion.p>
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 group"
              >
                View Testimonials
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="vision" className="bg-blue-50">
        <div className="container max-w-4xl mx-auto">
          <motion.h2
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="text-xl leading-relaxed text-gray-700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our vision is to put each one of you on the map of success with the
            unique power of digital technology. We envision a future where
            innovation and efficiency converge to create extraordinary digital
            experiences for every business we serve.
          </motion.p>
        </div>
      </Section>

      <Section id="mission">
        <div className="container max-w-4xl mx-auto">
          <motion.h2
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-xl leading-relaxed text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            To provide state-of-the-art scalable IT solutions that give you a
            competitive edge in the world of business and technology. Through
            our expertise and dedication, we help organizations navigate the
            digital landscape and achieve their full potential.
          </motion.p>
        </div>
      </Section>

      <Section id="principles" className="bg-blue-50">
        <div className="container max-w-6xl mx-auto">
          <motion.h2
            className="mb-6 text-4xl font-bold text-center text-gray-900 md:text-5xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Principles
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto mb-12 text-xl text-center text-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Observe, Create, Shape and Shine - these principles drive us. They
            guide every organizational decision and carve our work culture and
            relationships. Here, we are not just technology enthusiasts but a
            family driven by values.
          </motion.p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {corePrinciples.map((principle, index) => (
              <PrincipleCard
                key={principle.title}
                principle={principle}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section id="video" className="bg-gray-900">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            className="relative flex flex-col items-center justify-center overflow-hidden shadow-2xl rounded-2xl max-h-96"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="video.jpg"
              alt="About Us Video Thumbnail"
              className="w-full h-auto"
            />
            <motion.button
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 group"
              whileHover={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <motion.div
                className="flex items-center justify-center w-20 h-20 rounded-full bg-white/90 group-hover:bg-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play className="w-8 h-8 text-blue-600" />
              </motion.div>
            </motion.button>
          </motion.div>
          <motion.p
            className="mt-6 text-lg text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            See how we're transforming businesses through technology
          </motion.p>
        </div>
      </Section>
    </div>
  );
};

export default AboutUs;
