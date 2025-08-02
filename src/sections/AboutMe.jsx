import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const AboutMe = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    // Animate the about section on mount
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: aboutRef.current,
            start: "top bottom-=100",
          },
      }
    );
  }, [aboutRef]);

  return (
    <div ref={aboutRef} id="aboutMe" className="w-full md:px-20 px-5 mt-30">
      <div className="flex lg:flex-row-reverse flex-col justify-center items-center rounded-xl bg-neutral-900 p-10 gap-10 text-white-50">
        <div className="flex-2 flex flex-col justify-center items-center gap-14">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="rounded-full w-48 h-48"
          />
          <a href="/Gopesh-Goyal-Resume.pdf" download className="md:w-80 md:h-16 w-60 h-12 cta-wrapper">
            <div className="cta-button group">
              <div className="bg-circle" />
              <p className="text">Resume</p>
              <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow" />
              </div>
            </div>
          </a>
        </div>
        <div className="flex-3">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p><em>Curious by nature, creative at heart, and obsessed with building
            things that just work</em></p>
          <p className="mt-4 tracking-wide">
             — I’m Gopesh Goyal, a full-stack developer who
            thrives at the intersection of logic and imagination. I love turning
            ideas into interactive, user-centric web experiences that are not
            just functional, but delightful. Over time, I’ve grown from just writing code to
            engineering systems — scalable, modular, and built with intention. I
            enjoy solving tough problems, learning new patterns, and
            experimenting with modern tools. My toolkit often includes
            JavaScript/TypeScript, React, Firebase, Node.js, and real-time
            technologies like WebRTC and Redis — but I'm never limited by a
            stack. Beyond the screen, I'm a table tennis enthusiast, an avid
            traveler, and someone who finds joy in the little things — whether
            it's a clean Git history or a beautifully animated UI. I’m always
            looking to learn, collaborate, and build things that leave an
            impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
