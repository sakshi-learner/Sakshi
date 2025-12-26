import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_6q77s42",
        "template_xxs1fan",
        form.current,
        "Y--NanxcuREixXi09"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message");
          console.log(error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center px-4">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-800 p-6 rounded-lg w-full max-w-md"
      >
        <h2 className="text-teal-400 text-2xl mb-4 text-center">
          Contact Me
        </h2>

        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-2 mb-3 bg-gray-700 text-white "
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-2 mb-3 bg-gray-700 text-white"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full p-2 mb-4 bg-gray-700 text-white "
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-teal-500 hover:bg-teal-600 text-black font-semibold py-2"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
