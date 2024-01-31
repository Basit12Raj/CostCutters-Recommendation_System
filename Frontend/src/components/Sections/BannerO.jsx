import React from "react";
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

function App() {
  const [anissaImageAnimation, setAnissaImageAnimation] = useSpring(() => ({
    transform: "scale(0.8)",
  }));

  const [bachImageAnimation, setBachImageAnimation] = useSpring(() => ({
    transform: "scale(0.8)",
  }));

  const onAnissaImageVisibilityChange = (isVisible) => {
    setAnissaImageAnimation({
      transform: isVisible ? "scale(1)" : "scale(0.8)",
      config: { mass: 1, tension: 280, friction: 60 },
    });
  };

  const onBachImageVisibilityChange = (isVisible) => {
    setBachImageAnimation({
      transform: isVisible ? "scale(1)" : "scale(0.8)",
      config: { mass: 1, tension: 280, friction: 60 },
    });
  };

  return (
    <div className="flex space-x-12 p-12 bg-gradient-to-r from-blue-600 to-blue-950 mt-16 ">
      <div className="relative p-4 ml-8 bg-white text-black rounded-lg shadow-xl transform hover:scale-105 transition-transform overflow-visible">
        <VisibilitySensor
          onChange={onAnissaImageVisibilityChange}
          partialVisibility
        >
          <animated.img
            style={{
              ...anissaImageAnimation,
              position: "absolute",
              left: "-32px",
              top: "20%",
              transform: `${anissaImageAnimation.transform} translateY(-50%)`,
            }}
            src="ab1.jpg"
            alt="Anissa Rose"
            className="w-24 h-24 rounded-full shadow-lg border-4 border-white"
          />
        </VisibilitySensor>
        <div className="ml-14">
          <h2 className="mt-4 text-center text-2xl font-bold">
            Abdul Basit <span className="text-red-500">Khan</span>
          </h2>
          <p className="text-center  text-md font-light">
            FullStack Web-Developer
          </p>
          <p className="mt-4 text-center">
            "Versatile fullstack web developer skilled in both frontend and
            backend technologies!"
          </p>
        </div>
      </div>

      <div className="relative p-4 ml-6 bg-white text-black rounded-lg shadow-xl transform hover:scale-105 transition-transform overflow-visible">
        <VisibilitySensor
          onChange={onBachImageVisibilityChange}
          partialVisibility
        >
          <animated.img
            style={{
              ...bachImageAnimation,
              position: "absolute",
              left: "-32px",
              top: "20%",
              transform: `${bachImageAnimation.transform} translateY(-50%)`,
            }}
            src="abs.jpg"
            alt="Bach mai"
            className="w-24 h-24 rounded-full shadow-lg border-4 border-white"
          />
        </VisibilitySensor>
        <div className="ml-14">
          <h2 className="mt-4 text-center text-2xl font-bold">
            Abdul Salam <span className="text-red-500">Khan</span>
          </h2>
          <p className="text-center text-md font-light">
            Frontend Web-Developer
          </p>
          <p className="mt-4 text-center">
            "Experienced frontend web developer with expertise in visually appealing user interfaces!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
