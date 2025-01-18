import { useState, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Contact() {
  const api_key = (import.meta.env.VITE_APP_API_KEY);
  console.log(api_key);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
    
  });

  const [result, setResult] = useState("");
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate input fields
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }

    // Show submitting message
    setResult("Sending....");

    const formDataObj = new FormData(e.target);

    formDataObj.append("access_key", api_key);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset(); // Reset the form
      } else {
        setResult(data.message || "Error submitting form");
      }
    } catch (error) {
      setResult("An error occurred while submitting the form.");
    }
  };

  const leftGridRef = useRef<HTMLDivElement | null>(null);
  const rightGridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (leftGridRef.current) {
      const elements = leftGridRef.current.querySelectorAll('p,h1');
      gsap.from(elements, {
        x: -30,
        opacity: 0.5,
        stagger: 0.3,
        ease: 'circ.inOut',
        scrollTrigger: {
          trigger: leftGridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Right Grid Animation
    if (rightGridRef.current) {
      const elements = rightGridRef.current.querySelectorAll('form');
      gsap.from(elements, {
        x: 30,
        opacity: 0.5,
        stagger: 0.3,
        ease: 'circ.inOut',
        scrollTrigger: {
          trigger: rightGridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, []);

  return (
    <section id="contact" className="bg-black py-16 text-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10">
        {/* Left Grid: Contact Information */}
        <div ref={leftGridRef} className="flex flex-col gap-6 items-center justify-center">
          <h1 className="text-3xl font-bold text-left">Get in Touch</h1>
          <p className="text-gray-400 text-left lg:w-[390px]">
            Feel free to reach out to me for collaboration, inquiries, or any questions you may have. I’m always happy to connect.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-purple-500 text-xl">📞</span>
              <p className="text-gray-400">+1 (404)-789-5939</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-purple-500 text-xl">📧</span>
              <p className="text-gray-400">chrisxquashie@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-purple-500 text-xl">📍</span>
              <p className="text-gray-400">Atlanta GA</p>
            </div>
          </div>
        </div>

        {/* Right Grid: Contact Form */}
        <div ref={rightGridRef} className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                id="name"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                id="email"
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                onChange={handleChange}
                id="message"
                rows={5}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
          {result && (
            <div className="mt-4 text-center text-gray-800">{result}</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
