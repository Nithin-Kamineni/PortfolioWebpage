import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
// import Lottie from 'react-lottie-player'
import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./contact.module.scss";
import lottieData from "../../assets/email.json";
import { Button, useToast } from '@chakra-ui/react';
import { MdEmail, MdPhone } from "react-icons/md";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactData } from "../../data/ContactData";

const ContactFormOpen = "<contact form>";
const ContactFormClose = "</contact form>";
const contactOpen = "<Contact />";
const contactDataMail = ContactData.mail1;
const contactDataPhone = ContactData.phoneNumber;

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: lottieData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Contact = () => {
  const [contactData, setContactData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleOnchange = (e: any) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  // const formInputUser = useRef();
  const formInputUser = useRef<HTMLFormElement>(document.createElement("form"));

  const toast = useToast();

  

  const handleOnsubmit = (e: any) => {
    e.preventDefault();
    
    emailjs.sendForm(ContactData.servideId, ContactData.templatedId, formInputUser.current, ContactData.publicKey)
      .then((result) => {
          console.log(result.text);
          console.log(contactData);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
    
    toast({
      title: 'sent',
      status: 'success',
      duration: 500,
      isClosable: true,
    })
    setContactData({
      user_name: "",
      user_email: "",
      message: "",
    });
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

            <form ref={formInputUser} onSubmit={handleOnsubmit}>
              <input
                type='text'
                name='user_name'
                placeholder='Name'
                required
                value={contactData.user_name}
                onChange={handleOnchange}
              />
              <input
                type='email'
                name='user_email'
                placeholder='Email'
                required
                value={contactData.user_email}
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
              <button type='submit' value='Send'>Send</button>
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
            {/* <Lottie animationData={lottieData} height={'100%'} width={'100%'} autoplay={false} loop={true}/> */}
          </div>
        </motion.div>
        <h3 className={styles.contactFormClose}>{ContactFormClose}</h3>
      </div>
    </div>
  );
};

export default Contact;
