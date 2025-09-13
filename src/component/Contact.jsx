import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(name, surname, email, message);

  // From Submit Handler

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (name.trim() === "") return toast.error("Name is required");
    if (surname.trim() === "") return toast.error("Surname is required");
    if (email.trim() === "") return toast.error("Email is required");
    if (message.trim() === "") return toast.error("Message is required");

    try {
      const res = await axios.post(
        "https://formspree.io/f/xdkljyyz",
        {
          name,
          surname,
          email,
          message,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (res.status === 200) {
        toast.success("Message sent successfully ✅");
        setName("");
        setSurname("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      toast.error("Failed to send ❌");
    }
  };

  return (
    <>
      <div
        id="contact"
        className="min-h-screen w-full flex flex-col items-center justify-center gap-16 p-8"
      >
        <h1 className="text-center text-6xl text-light text-black">
          Get In Touch
        </h1>

        <form
          onSubmit={formSubmitHandler}
          action="https://formspree.io/f/xdkljyyz"
          method="POST"
          className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl"
        >
          <div className="flex flex-col gap-4">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Your Name"
              className="rounded-lg border-2 border-black px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-white focus:ring-2 focus:ring-black"
            />
            <input
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
              type="text"
              placeholder="Your Surname"
              className="rounded-lg border-2 border-black px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-white focus:ring-2 focus:ring-black"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Your Email"
              className="rounded-lg border-2 border-black px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-white focus:ring-2 focus:ring-black"
            />
          </div>

          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Your Message"
            className="h-32 w-full resize-none rounded-lg border-2 border-black px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-white focus:ring-2 focus:ring-black"
          ></textarea>
          <button
            type="submit"
            className="rounded-lg border-2 border-gray-600 bg-gray-700 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-black cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
