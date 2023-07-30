import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import "./Gsap12.css";

export default function Gsap12() {
  const buttonRef = useRef(null);
  const reverseRef = useRef(null);
  const containerRef = useRef(null);
  const topRef = useRef(null);
  const loadingRef = useRef(null);
  const nextScreenRef = useRef(null);
  const headerRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const [tl] = useState(gsap.timeline({ paused: true, reversed: true }));

  useEffect(() => {
    if (
      buttonRef.current &&
      reverseRef.current &&
      containerRef.current &&
      topRef.current &&
      loadingRef.current &&
      nextScreenRef.current &&
      headerRef.current &&
      h1Ref.current &&
      pRef.current
    ) {
      //screen 1 arrow rotation
      tl.to(".buttonG12 .svg212", {
        ease: "power1.inOut",
        rotate: 90,
      });

      //screen 1 arrow rotation hide
      tl.to(".buttonG12 .svg212", {
        ease: "power1.inOut",
        duration: 0.2,
        y: -10,
        opacity: 0,
      });

      //screen 1 arrow rotation y axis moving position
      tl.to(".buttonG12", {
        ease: "power1.inOut",
        yPercent: 114,
      });

      //scrren 1 image height scale transition
      tl.to(
        ".topG12",
        {
          ease: "power1.inOut",
          height: 400,
        },
        0.6
      );

      tl.to(
        ".topG12 img",
        {
          ease: "power.inOut",
          scale: 1.2,
          yPercent: 40,
        },
        0.8
      );

      //screen 1 article fetching
      tl.to(
        ".buttonG12",
        {
          ease: "power1.inOut",
          yPercent: 166,
          borderRadius: 0,
          scaleX: 10,
          scaleY: 2.6,
        },
        1.1
      );

      tl.from(".loadingG12", {
        ease: "power1.inOut",
        opacity: 0,
        y: 50,
      });

      tl.to(".loadingG12", {
        ease: "power1.inOut",
        opacity: 0,
        x: 200,
        delay: 0.5,
      });

      // next screen bg duration
      tl.from(".next-screenG12", {
        ease: "power1.inOut",
        yPercent: 100,
        duration: 0.5,
      });

      // next screen tap svg arrow duration
      tl.from(".next-screenG12 .reverseG12", {
        ease: "power1.inOut",
        xPercent: -250,
        duration: 0.5,
      });

      // next screen h1 heading duration
      tl.from(".next-screenG12 h1", {
        ease: "power1.inOut",
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });

      // next screen banner duration
      tl.from(".headerG12", {
        ease: "power1.inOut",
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });

      // next screen paragraph duration
      tl.from(".next-screenG12 p", {
        ease: "power1.inOut",
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });

      tl.to(".containerG12", {
        ease: "power1.inOut",
        backgroundColor: "#101010",
        duration: 0.1,
      });

      //next scrren entire section x and y axis duration
      tl.to(".next-screenG12", {
        ease: "power1.inOut",
        yPercent: -6,
        duration: 1,
      });

      tl.to(".next-screenG12", {
        ease: "power1.inOut",
        yPercent: -2,
        duration: 1,
      });

      buttonRef.current.addEventListener("click", handleClick);
      reverseRef.current.addEventListener("click", handleReverse);
    }

    return () => {
      if (
        buttonRef.current &&
        reverseRef.current &&
        containerRef.current &&
        topRef.current &&
        loadingRef.current &&
        nextScreenRef.current &&
        headerRef.current &&
        h1Ref.current &&
        pRef.current
      ) {
        buttonRef.current.removeEventListener("click", handleClick);
        reverseRef.current.removeEventListener("click", handleReverse);
      }
    };
  }, [tl]);

  const handleClick = () => {
    tl.play();
  };

  const handleReverse = () => {
    tl.reverse();
  };

  return (
    <div className="containerG12" ref={containerRef}>
      <div className="next-screenG12" ref={nextScreenRef}>
        <svg className="reverseG12" viewBox="0 0 24 24" ref={reverseRef}>
          <g>
            <g>
              <path d="M15.707 4.293a1 1 0 010 1.414L9.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z" />
            </g>
          </g>
        </svg>

        <h1>
          CheeseSteack
        </h1>

        <div className="headerG12" ref={headerRef}></div>

        <p ref={pRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          sapiente illum perferendis ad voluptatum officiis, accusantium tempore
          est similique unde eius nisi ipsam illo odit doloribus! Amet adipisci
          optio totam!
        </p>
      </div>

      <div className="screen-1G12">
        <div className="topG12" ref={topRef}>
          <h1 ref={h1Ref}>No.1</h1>
        </div>

        <div className="buttonG12" ref={buttonRef}>
          <svg className="svg212" viewBox="0 0 24 24">
            <g>
              <g>
                <path d="M8.293 4.293a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L14.586 12 8.293 5.707a1 1 0 010-1.414z" />
              </g>
            </g>
          </svg>
        </div>

        <div className="loadingG12" ref={loadingRef}>
          اطلاعات بیشتر ...
        </div>
      </div>
    </div>
  );
}