import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
 
        <div>
          <h2 className="text-3xl font-bold text-[#ff5733] mb-6">Get In Touch</h2>
          <div className="mb-6">
            <h3 className="font-semibold text-white">Head Office</h3>
            <p className="text-sm text-gray-300">
              Plot no: 01 Shankar Wadi Ring Road, Jalgaon, Maharashtra, India - 425001
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-white">Contact Number</h3>
            <p className="text-sm text-gray-300">+91 75583 71401</p>
          </div>
          <div className="flex gap-4 mt-4">
            <SocialIcon icon={<FaLinkedinIn />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaXTwitter />} />
            <SocialIcon icon={<FaFacebookF />} />
          </div>
        </div>


    
        <div>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7449.296581083396!2d75.555919!3d21.006731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fb7597d7e53%3A0x4b33bdf09eb95af6!2sRing%20Rd%20%26%20Shankar%20Wadi%20Rd%2C%20Tagore%20Nagar%2C%20Jalgaon%2C%20Maharashtra%20425001!5e0!3m2!1sen!2sin!4v1747641005649!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="rounded-md border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>


      <div className="mt-12 border-t border-gray-700 pt-8 text-center md:text-left flex flex-col">
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#ff5733]">stsarc</h3>
            <p className="text-xs text-gray-400">CONNECTING THE WORLD WITH AI</p>
          </div>

          <div className="flex gap-6 text-sm font-semibold text-white">
            <a href="#">HOME</a>
            <a href="#">OUR PRODUCT</a>
            <a href="#">ABOUT US</a>
            <a href="#">CONTACT US</a>
          </div>


          
        </div>
        <div className='flex justify-center items-center mt-7 mb-7'>
            <div className='h-[2px] bg-gray-700 w-[70vw] '></div>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <div className="flex gap-4 text-center">
            <SocialIcon icon={<FaLinkedinIn />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaXTwitter />} />
            <SocialIcon icon={<FaFacebookF />} />
          </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          © 2024 STSARC | ALL RIGHTS RESERVED.
        </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <div className="bg-[#1e1e1e] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#ff5733] transition-colors duration-300 cursor-pointer">
    {icon}
  </div>
);

export default Footer;
