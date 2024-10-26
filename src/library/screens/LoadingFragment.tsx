import Lottie from "lottie-react";
import React from "react";
import groovyWalkAnimation from "../../../public/Walking.json";

function LoadingFragment() {
  return (
    <div className="flex w-full h-screen flex-col bg-gray-50 justify-center items-center">
      <Lottie className="size-60" animationData={groovyWalkAnimation} />
      <span className="mt-4 text-sm font-semibold text-gray-400 animate-pulse">
        Loading....
      </span>
    </div>
  );
}

export default LoadingFragment;
