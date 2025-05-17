import React from 'react';


const About = () => {
  return (
    <div className="flex flex-col h-[70vh] lg:flex-row items-center justify-between bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-12 raleway ">
    
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-extrabold">About Us</h2>
        <p className="text-xl font-extralight leading-relaxed">
          STSARC (Sahajananda Tech Services And Research Centre Private Limited). The name of our company itself defines us. 
          "SAHAJANANDA" is influenced by the name of “LORD KRISHNA“. Sahajananda Means "Innate Bliss" A happiness. 
          It Says Whenever our clients engage with our services, they will always be happy and our team will never disappoint them. 
          There will be always Joyful Growth and Success in their Business. We maintain joyful and healthy relationships and environments with our clients.
        </p>
        <p className="text-xl font-extralight leading-relaxed">
          STSARC Private Limited, where we specialize in crafting cutting-edge products at the forefront of AI, blockchain, metaverse, 
          and web 3.0 technologies. At STSARC, we’re creating a cutting-edge Edtech platform designed to transform the way we are learning online. 
          With our user-friendly interface, powerful AI-powered algorithms and features students can achieve their learning effortlessly.
        </p>

        <div>
        <a href="/DPIIT-Certificate.pdf" className="text-white underline font-semibold ">
          Download
        </a>{' '}
        <span className="font-medium">Our DPIIT Certificate</span>
        </div>  
      </div>

     
      <div className="lg:w-1/2 mt-10 lg:mt-0 block relative overflow-hidden rounded-l-[20rem]">
        <img
          src={"https://images.unsplash.com/photo-1462826303086-329426d1aef5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt="Hall"
          className=" shadow-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default About;
