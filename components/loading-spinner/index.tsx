import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col gap-1 absolute inset-0 flex items-center justify-center bg-blue-100 bg-opacity-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <p>Mohon tunggu sejenak</p>
    </div>
  );
};

export default LoadingSpinner;
