import React from "react";

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100  z-50 w-full h-full  relative">
      <div
        className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 absolute"
        data-testid="loading-spinner"
      ></div>
    </div>
  );
};

export default LoadingComponent;
