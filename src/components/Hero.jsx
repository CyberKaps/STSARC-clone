import "../App.css";
import Button from "./Button";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <div className="h-screen relative bg-[#fff9f2] text-gray-800 overflow-hidden">
   
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

  
      <div className="relative z-10 flex flex-col text-center gap-2 items-center justify-center h-full">
        <div className="text-4xl md:text-[60px] font-extrabold text-black/75 md:leading-[7vh] px-[20vw] raleway-heading">
          Weaving a Smarter World, Thread By Thread,{" "}
          <span className="text-[#f96a50]">With AI</span>
        </div>
        <div className="text-xl text-black/60 leading-6 md:w-[60%] w-[95%] font-medium mb-2 font-extra px-5 mt-4 raleway">
          With AI, Blockchain, and Web 3.0, we embark on a journey where
          pioneering technology converges with limitless potential.
        </div>
        <div className="md:flex gap-6 mt-8 items-center text-xl text-black/70">
          <h3>Download pitch for</h3>
          <Button text={"Sweebuzz"} />
          <Button text={"Algorhithm"} />
        </div>
      </div>
    </div>
  );
}
