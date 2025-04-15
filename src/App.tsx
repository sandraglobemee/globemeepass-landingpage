import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ServiceModules from "./ServiceModules";
import TestimonialsSection from "./TestimonialsSection";
import ApplicationProcess from "./ApplicationProcess";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const App = () => {
  return (
    <div className="min-h-screen bg-[#fff6e8]">
      <HeroSection />
      {/* Bekannt aus - Logos Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#145d72] mb-2">
              Globemee es reconocido por
            </h2>
            ‚
          </motion.div>

          <div className="relative overflow-hidden w-full">
            <motion.div
              animate={{ x: ["-20%", "-120%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex items-center space-x-12 absolute whitespace-nowrap"
            >
              {/* First set of logos */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/IHK-Nuremberg-e1726211473393.png"
                  alt="IHK Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/GA.png"
                  alt="German Accelerator Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/Zollhof.png"
                  alt="Zollhof Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/INVEST.png"
                  alt="Invest Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/THD.png"
                  alt="TH Deggendorf Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/AHK.png"
                  alt="AHK Argentinien Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/Go-International.png"
                  alt="Go International Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/Santa_Clara_U_Seal.svg.png"
                  alt="Santa Clara Universität Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>

              {/* Duplicate logos to ensure continuous scrolling */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/IHK-Nuremberg-e1726211473393.png"
                  alt="IHK Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/GA.png"
                  alt="German Accelerator Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/Zollhof.png"
                  alt="Zollhof Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/INVEST.png"
                  alt="Invest Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 inline-block">
                <img
                  src="https://globemee.com/wp-content/uploads/2024/09/THD.png"
                  alt="TH Deggendorf Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <img
              src="https://globemee.com/wp-content/uploads/2024/09/5775fe2-fec-4b10-f416-0677c0017ed0_Bildschirmfoto_2024-08-09_um_08.webp"
              alt="Bekannt aus"
              className="max-w-full h-auto mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      {/* Problemas y Soluciones */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#145d72] mb-4">
            ¿Te enfrentas a estos desafíos?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Entendemos las dificultades de emigrar a Alemania. Globemee Pass es
            tu solución integral.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-[#f47248] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#145d72] text-center mb-2">
                Barrera del idioma
              </h3>
              <p className="text-gray-600 text-center">
                Aprender alemán puede parecer abrumador, especialmente cuando
                necesitas un nivel específico para trabajar.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-[#f47248] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#145d72] text-center mb-2">
                Trámites complejos: visado y reconocimiento
              </h3>
              <p className="text-gray-600 text-center">
                Navegar por los requisitos del visado alemán y el proceso de
                reconocimiento de títulos puede ser confuso, estresante y lleno
                de burocracia si no cuentas con el apoyo adecuado.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-[#f47248] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#145d72] text-center mb-2">
                Dificultades en la búsqueda de empleo
              </h3>
              <p className="text-gray-600 text-center">
                ¿Envías solicitudes y no recibes respuesta? ¿Te han rechazado
                sin explicación? Encontrar un trabajo desde el extranjero puede
                ser frustrante y poco transparente.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <ServiceModules />
      <TestimonialsSection />
      {/* Ratings and Community Feedback Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#145d72] mb-4">
              Valoraciones y Recomendaciones
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Descubre lo que nuestra comunidad dice sobre nosotros
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-[#145d72] mb-4">
                4,9 Estrellas en Google
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Globemee tiene una excelente acogida
              </p>
              <img
                src="https://globemee.com/wp-content/uploads/2025/04/Bildschirmfoto-2025-04-14-um-14.41.48.png"
                alt="Valoraciones de Google"
                className="rounded-lg shadow-md mx-auto max-w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-[#145d72] mb-4">
                Nuestra Comunidad en Instagram
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Nuestros seguidores y participantes como Dario recomiendan
                Globemee
              </p>
              <img
                src="https://globemee.com/wp-content/uploads/2025/04/Bildschirmfoto-2025-04-14-um-14.49.33.png"
                alt="Recomendaciones de Instagram"
                className="rounded-lg shadow-md mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#145d72] mb-4">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conoce a los fundadores de Globemee y nuestra misión
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <img
                src="https://globemee.com/wp-content/uploads/2024/12/Bildschirmfoto-2024-12-27-um-14.04.37.png"
                alt="Fundadores de Globemee"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#145d72] mb-4">
                Nuestros Fundadores
              </h3>
              <p className="text-gray-700 mb-4">
                Globemee fue fundado por Sandra Schmitt y Christian Schieber.
                Christian es un experto en empresas medianas y tiene una amplia
                red de empresas en Alemania que buscan profesionales
                cualificados. Sandra ha vivido durante mucho tiempo en América
                Latina (Colombia y Argentina) y tiene una extensa red
                internacional.
              </p>
              <p className="text-gray-700 mb-4">
                Juntos, ayudan a profesionales de todo el mundo a encontrar su
                trabajo soñado en Alemania y a empresas alemanas a encontrar
                personal cualificado.
              </p>
              <p className="text-gray-700 mb-4">
                Hemos construido una red de más de 150 empresas asociadas en
                Alemania que contratan talento internacional a través de
                nosotros. Nuestro trabajo nos ha llevado a la Embajada Alemana
                en Argentina, a las Cámaras de Comercio Alemanas en Sudamérica,
                e incluso al Silicon Valley en 2024 para presentaciones a
                inversores.
              </p>
              <p className="text-gray-700 font-semibold">
                Globemee se ha convertido en un movimiento para profesionales
                internacionales, y cada día más talentos hacen realidad su sueño
                con nosotros. Por nuestro valioso trabajo, hemos ganado el 2º
                puesto en el premio de profesionales cualificados de la IHK.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fff6e8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#145d72] mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              ¡Nuestro equipo está deseando conocerte!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://globemee.com/wp-content/uploads/2025/03/Bildschirmfoto-2025-03-28-um-11.44.43.png"
                  alt="Sandra"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#145d72]">Sandra</h3>
                <p className="text-[#f47248] font-medium">
                  Directora y Reclutadora Internacional
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://globemee.com/wp-content/uploads/2023/08/CS.png"
                  alt="Christian"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#145d72]">Christian</h3>
                <p className="text-[#f47248] font-medium">
                  Cofundador y Gerente de Ventas para Empresas Alemanas
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://globemee.com/wp-content/uploads/2025/03/Bildschirmfoto-2025-03-28-um-11.43.13.png"
                  alt="Silvia"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#145d72]">Silvia</h3>
                <p className="text-[#f47248] font-medium">
                  Gerente del Programa de Talentos y Procesos de Visado
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://globemee.com/wp-content/uploads/2025/03/Bildschirmfoto-2025-03-28-um-11.46.22.png"
                  alt="Hans"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#145d72]">Hans</h3>
                <p className="text-[#f47248] font-medium">
                  Profesor de Alemán y Director del "Club de Idiomas"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://globemee.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-01-31-at-21.27.27.jpeg"
                  alt="Marlice"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#145d72]">Marlice</h3>
                <p className="text-[#f47248] font-medium">
                  Profesora de Alemán Especializada en Alemán para el Trabajo
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ApplicationProcess />
      {/* Estadísticas */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#145d72] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro impacto en números
            </h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Resultados que hablan por sí mismos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-[#f47248] mb-2">5.000+</p>
              <p className="text-xl">Talentos internacionales</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#f47248] mb-2">500+</p>
              <p className="text-xl">Personas asistidas</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#f47248] mb-2">100%</p>
              <p className="text-xl">Éxito en visados</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#f47248] mb-2">150+</p>
              <p className="text-xl">Empresas asociadas</p>
            </div>
          </div>
        </div>
      </section>
      {/* Precios/Contacto */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#145d72] mb-4">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Solicita información personalizada sobre el Globemee Pass y comienza
            tu camino hacia Alemania.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#145d72] mb-4">
              ¿Tienes preguntas?
            </h3>
            <a
              href="https://wa.me/51900595253"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contáctanos en WhatsApp: +51 900 595 253
            </a>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-[#145d72] mb-4">
              ¡Nos vemos pronto en Alemania!
            </h3>
            <p className="text-gray-700 mb-4">
              Nos alegramos de verte pronto en nuestro programa y después en
              Alemania.
            </p>
            <div className="flex justify-center">
              <img
                src="https://globemee.com/wp-content/uploads/2024/12/Bildschirmfoto-2024-12-27-um-12.15.50.png"
                alt="Silvia y Sandra de Globemee"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
            <p className="mt-4 text-[#145d72] font-medium">
              Silvia y Sandra de Globemee
            </p>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fff6e8] border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#145d72] mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Respuestas a las dudas más comunes sobre el Globemee Pass
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white rounded-lg shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-[#145d72] hover:text-[#f47248]">
                ¿Cuánto cuesta el Globemee Pass?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                Puedes participar en nuestro programa desde 49 € al mes.
                Recomendamos el paquete completo por 99 € al mes, que incluye
                todos los módulos esenciales. Si deseas una solución individual
                o un acompañamiento personalizado 1:1, contáctanos directamente
                para recibir una asesoría sin compromiso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-lg shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-[#145d72] hover:text-[#f47248]">
                ¿Cuándo empieza el programa?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                El Globemee Pass es flexible e individual, por lo que puedes
                empezar en cualquier momento. Para personas sin conocimientos
                previos de alemán (nivel A1), abrimos grupos nuevos cada 4
                semanas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-lg shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-[#145d72] hover:text-[#f47248]">
                ¿Qué incluye el Globemee Pass?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                El programa es una solución completa para quienes quieren
                trabajar en Alemania:
                <br />
                <br />
                Curso intensivo de alemán por niveles (de A1 a B2)
                <br />
                <br />
                Club de conversación para hablar con más fluidez
                <br />
                <br />
                Guía paso a paso para el reconocimiento de títulos
                <br />
                <br />
                Asistencia completa para el trámite de visado
                <br />
                <br />
                Apoyo en la creación de tu currículum según el modelo alemán
                <br />
                <br />
                Preparación para entrevistas laborales
                <br />
                <br />
                Acompañamiento en la búsqueda de empleo
                <br />
                <br />
                Sesiones en vivo con expertos para profundizar en cada tema
                <br />
                <br />
                Además, si tu perfil profesional es interesante para nuestras
                empresas colaboradoras en Alemania, te conectamos directamente
                con ellas (si estás interesado o interesada).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#145d72] text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Globemee Pass</h3>
            <p className="opacity-80">
              Tu camino hacia Alemania comienza aquí. Soluciones integrales para
              profesionales latinoamericanos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 opacity-80">
              <li>Email: recruiting@globemee.com</li>
              <li>WhatsApp: +51 900 595 253</li>
              <li>Berlín, Alemania</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <a href="#" className="hover:text-[#f47248]">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f47248]">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f47248]">
                  Aviso legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/20 text-center opacity-70">
          <p>
            © {new Date().getFullYear()} Globemee Pass. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
