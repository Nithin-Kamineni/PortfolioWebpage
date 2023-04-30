import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";

import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./contact.module.scss";
import lottieData from "../../assets/email.json";
import { Button } from '@chakra-ui/react';
import { MdEmail, MdPhone } from "react-icons/md";

const ContactFormOpen = "<contact form>";
const ContactFormClose = "</contact form>";
const contactOpen = "<Contact />";
const contactDataMail = "vkamineni@ufl.edu";
const contactDataPhone = "+1 352-740-9878";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnchange = (e: any) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleOnsubmit = (e: any) => {
    e.preventDefault();
    console.log(contactData);
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.contact}>
      <div className={styles.formTagsOpenClose}>
      <h3 className={styles.contactFormOpen}>{ContactFormOpen}</h3>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
        className={styles.wrapper}
      >
        <div className={styles.form}>
          <h3 className={styles.contactOpen}>{contactOpen}</h3>

          {/* <h4 className={styles.contactInfo}>{contactInfo}</h4> */}
          <Button className={styles.contactInfo}
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            color="#DCE2FF"
            _hover={{ border: '2px solid #1C6FEB' }}
            leftIcon={<MdPhone color="#1970F1" size="20px" />}>
            {contactDataPhone}
          </Button>
          <Button className={styles.contactInfo}
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            color="#DCE2FF"
            _hover={{ border: '2px solid #1C6FEB' }}
            leftIcon={<MdEmail color="#1970F1" size="20px" />}>
            {contactDataMail}
          </Button>

          <form onSubmit={handleOnsubmit}>
            <input
              type='text'
              name='name'
              placeholder='Name'
              required
              value={contactData.name}
              onChange={handleOnchange}
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              required
              value={contactData.email}
              onChange={handleOnchange}
            />
            <textarea
              name='message'
              cols={30}
              rows={5}
              placeholder='Your Message'
              required
              value={contactData.message}
              onChange={handleOnchange}
            ></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className={styles.lottie}>
          <Lottie
            options={defaultOptions}
            height='100%'
            width='100%'
            isStopped={false}
            isPaused={false}
          />
        </div>
      </motion.div>
      <h3 className={styles.contactFormClose}>{ContactFormClose}</h3>
      </div>
    </div>
  );
};

export default Contact;
