import React, { useState } from 'react';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();

    alert('Form submitted successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="my-24 w-8/12 mx-auto">
      <h2 className="font-bold text-2xl text-center ">Contact with Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-32 mt-20 gap-5">
          <div className="space-y-3">
            <h2 className="border-b-2 border-green-800 w-32 text-lg font-semibold">
              Contact-Form
            </h2>
            <div className="flex flex-col gap-2 text-base font-semibold">
              <label htmlFor="name">
                Name
                <span className="text-red-500 font-bold ml-2">*</span>
              </label>
              <input
                className="border-2 p-2 focus:outline-none focus:border-green-800 focus:shadow-sm "
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">
                Email
                <span className="text-red-500 font-bold ml-2">*</span>
              </label>
              <input
                className="border-2 p-2 focus:outline-none focus:border-sky-300 focus:shadow-sm"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="subject">
                Subject
                <span className="text-red-500 font-bold ml-2">*</span>
              </label>
              <input
                className="border-2 p-2 focus:outline-none focus:border-sky-300 focus:shadow-sm"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <label htmlFor="phone">Phone Number</label>
              <input
                className="border-2 p-2 focus:outline-none focus:border-green-800 focus:shadow-sm"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <textarea
                cols={30}
                rows={8}
                name="message"
                className="border-2 focus:outline-none focus:border-green-800 focus:shadow-sm"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-3 py-1 bg-green-800 font-semibold text-base text-white"
            >
              Send Message
            </button>
          </div>

          <div className=" mt-3 ">
            <h3 className="text-xl font-semibold border-b-2 border-green-800 w-20">
              Contact
            </h3>

            <div className="py-6 ">
              <h2 className="font-semibold text-lg">Dhaka, Bangladesh</h2>
              <p className="underline cursor-pointer text-green-800 flex font-semibold items-center gap-2">
                <MdEmail />
                {/* ecoadventure@gmail.com */}
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <IoMdCall />
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
