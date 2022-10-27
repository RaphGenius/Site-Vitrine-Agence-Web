import React from "react";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="adress">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue Laplaces</p>
              <p>64200 Biarritz</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0625254422" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => alert("Numéro de téléphone copié")}
                  className="clipboard"
                >
                  06 25 25 44 22
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="mailtest@test.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => alert("Adresse mail copié")}
                  className="clipboard"
                >
                  mailtest@test.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Agency - 2022</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </div>
    </main>
  );
};

export default Contact;
