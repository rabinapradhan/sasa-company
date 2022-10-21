import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { clear } from "@testing-library/user-event/dist/clear";

const Result = () => {
  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);
  return (
    <div>{showElement ? <p>Your Message is sent successfully</p> : <></>}</div>
  );
};

const ContactComponent = () => {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hbr9ixb",
        "template_hx6gkpg",
        form.current,
        "KnIurR_Y3cm-4DLdY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
    clear();
  };
  return (
    <div className="w-full h-full py-14 scroll-smooth select-none bg-white text-black">
      <div className="max-w-screen-xl md:px-4 px-6 mx-auto text-xl gap-4  grid md:grid-cols-2">
        <div className="w-full  md:flex items-center  hidden justify-center h-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8100341064182!2d85.29579381438424!3d27.692265632762965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196e77d0bc9d%3A0x81d8f58a14104367!2sDesign%20Cube%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1661188295325!5m2!1sen!2snp"
            width="600"
            title="Googlemap"
            height="580"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h2 className="md:text-4xl text-3xl font-audrey py-4 font-bold md:text-center text-start">
            Contact Form
          </h2>
          <p className=" md:text-xl text-lg text-justify pb-4 font-muli text-gray-500">
            If you like to get in contact regarding any questions, please leave
            your contact details so we could reach you as soon as possible{" "}
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row text-lg">
              <div className="form-group font-muli my-5">
                <label>Name</label>
                <br />
                <input
                  placeholder="Enter your full name"
                  className="border border-gray-700 rounded-md font-nunito focus:outline-none p-2 mt-3 w-full "
                  type="text"
                  name="user_name"
                  required
                />
              </div>
            </div>
            <div className="row text-lg">
              <div className="form-group">
                <label>Email</label>
                <br />

                <input
                  placeholder="Enter you email id"
                  type="email"
                  className="border border-gray-700 rounded-md font-nunito focus:outline-none  p-2 mt-3 w-full "
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="row text-lg">
              <div className="form-group my-5">
                <label>Phone Number</label>
                <br />

                <input
                  placeholder="Enter you Phone no."
                  type="tel"
                  className="border border-gray-700 rounded-md font-nunito focus:outline-none   p-2 mt-3 w-full "
                  name="phone"
                  required
                />
              </div>
            </div>
            <div className="row text-lg">
              <div className="form-group my-5">
                <label>Message</label>
                <textarea
                  placeholder="Enter your Message"
                  rows={10}
                  name="message"
                  className="border mt-3 rounded-md border-gray-700 focus:outline-none p-2 font-nunito w-full h-full"
                />
              </div>
            </div>

            <input
              type="submit"
              className=" py-3 text-lg font-nunito bg-black w-[140px] rounded-md my-3 cursor-pointer font-medium text-center text-white"
              value="Send"
            />
          </form>
          <div className="status">{result ? <Result /> : null}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
