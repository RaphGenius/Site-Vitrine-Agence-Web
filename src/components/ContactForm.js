import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_8fleg0g",
        "template_200mx0j",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = `<p class="succes">Message envoyé!  </p>`;
          setTimeout(() => {
            formMess.style.display = "none";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML = `<p class="error">Une erreur s'est produite, veuillez réessayer.  </p>`;
          setTimeout(() => {
            formMess.style.display = "none";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>contactez nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input
          type="submit"
          value="Envoyer"
          autoComplete="off"
          className="hover button"
        />
      </form>
      <div className="form-message"></div>
    </div>
  );
};
export default ContactForm;
