import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUp01Icon,
  SmartPhone01Icon,
  Mail01Icon,
  Linkedin01Icon,
  Github01Icon,
} from "@hugeicons/core-free-icons";
import { Link } from "react-scroll";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    condition: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est obligatoire.";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide.";
    }
    if (!formData.phone.trim())
      newErrors.phone = "Le téléphone est obligatoire.";
    if (!formData.message.trim())
      newErrors.message = "Le message est obligatoire.";
    if (!formData.condition)
      newErrors.condition = "Les contions sont obligatoire.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm("service_p4bob3k", "template_ez6ms8e", form.current, {
          publicKey: "d_5RhIMKYArrU9DFF",
        })
        .then(
          (result) => {
            console.log("SUCCESS!");
            setSuccessMessage("Votre message a bien été envoyé.");
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
              conditions: false,
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            setSuccessMessage("Une erreur est survenue. Veuillez réessayer.");
          }
        );
    }
  };
  return (
    <section
      id="contact"
      className="py-32 md:py-0 md:mt-0 md:h-screen flex flex-col items-center justify-center relative xl:pt-20 2xl:pt-0"
    >
      <div className="z-10 flex flex-col items-center gap-4">
        {/* Arrow up */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2 }}
          className="hidden md:flex items-center justify-center transition-all absolute top-10"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            className="bg-ef-light-div dark:bg-ef-dark-div rounded-full p-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            <HugeiconsIcon icon={ArrowUp01Icon} size={32} />
          </Link>
        </motion.div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
          -ME CONTACTER-
        </h3>
        <div className="flex flex-row items-center gap-10 px-10">
          <a
            href="tel:0626695570"
            className="flex items-center gap-2 cursor-pointer"
          >
            <HugeiconsIcon
              icon={SmartPhone01Icon}
              size={40}
              className="p-2 rounded-full bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text shadow-md"
            />
            <p className="hidden lg:block">06 26 69 55 70</p>
          </a>
          <a
            href="mailto:ferrandevapro@gmail.com"
            className="flex items-center gap-2 cursor-pointer"
          >
            <HugeiconsIcon
              icon={Mail01Icon}
              size={40}
              className="p-2 rounded-full bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text shadow-md"
            />
            <p className="hidden lg:block">ferrandevapro@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/eva-ferrand/"
            className="flex items-center gap-2 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <HugeiconsIcon
              icon={Linkedin01Icon}
              size={40}
              className="p-2 rounded-full bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text shadow-md"
            />
            <p className="hidden lg:block">Linkedin</p>
          </a>
          <a
            href="https://github.com/frndeva"
            className="flex items-center gap-2 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <HugeiconsIcon
              icon={Github01Icon}
              size={40}
              className="p-2 rounded-full bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text shadow-md"
            />
            <p className="hidden lg:block">GitHub</p>
          </a>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="w-[300px] md:w-full flex flex-col bg-ef-light-div dark:bg-ef-dark-div gap-2 shadow-md rounded-xl py-4 2xl:py-10 px-10"
        >
          {/* Success Message */}
          {successMessage && (
            <p className="text-green-500 text-center mb-4">{successMessage}</p>
          )}
          {/* Nom & Email*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div>
              <input
                type="text"
                placeholder="Votre nom *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-2 px-4 rounded-full border-2 border-gray-300 dark:bg-ef-dark-div"
              />
              {errors.name && (
                <p className="text-red-500 text-xs md:text-sm text-left pl-4 pt-2">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-2 px-4 rounded-full border-2 border-gray-300 dark:bg-ef-dark-div"
              />
              {errors.email && (
                <p className="text-red-500 text-xs md:text-sm text-left pl-4 pt-2">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Téléphone & Site web*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:mt-4">
            <div>
              <input
                type="text"
                placeholder="Votre téléphone *"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full py-2 px-4 rounded-full border-2 border-gray-300 dark:bg-ef-dark-div"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs md:text-sm text-left pl-4 pt-2">
                  {errors.phone}
                </p>
              )}
            </div>

            <input
              type="text"
              placeholder="Votre site web"
              name="web"
              className="w-full py-2 px-4 rounded-full border-2 border-gray-300 dark:bg-ef-dark-div"
            />
          </div>

          {/* Message */}
          <div className="w-full md:mt-4">
            <textarea
              name="message"
              placeholder="Une description de votre besoin ou projet *"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 text-left pb-20 pt-4 rounded-xl border-2 border-gray-300 dark:bg-ef-dark-div"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs md:text-sm text-left pl-4 pt-2">
                {errors.message}
              </p>
            )}
          </div>

          {/* Conditions générales */}
          <div className="flex flex-col text-left w-full">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="condition"
                checked={formData.condition}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <label className="text-xs md:text-sm">
                J'accepte les conditions générales et la politique de
                confidentialité.*
              </label>
            </div>
            {errors.condition && (
              <p className="text-red-500 text-xs md:text-sm text-left  pt-2">
                {errors.condition}
              </p>
            )}
          </div>

          <input
            type="submit"
            value="Envoyer"
            className="xl:w-64 mx-auto border-2 py-2 px-8 mt-2 rounded-full cursor-pointer border-ef-light-text text-ef-light-text 
             hover:bg-ef-light-text hover:text-ef-light-div dark:border-ef-dark-text dark:text-ef-dark-text hover:dark:bg-ef-dark-text hover:dark:text-ef-light-text
       transition-all duration-300 ease-in-out transform hover:scale-105"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
