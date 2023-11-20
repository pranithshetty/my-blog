import React from "react";

const Skeleton = () => {
  return (
    <div data-testid="shimmer" className="restaurant-list">
      {Array(24)
        .fill("")
        .map((_, index) => {
          return (
            <div
              key={index}
              className="p-3 m-3 w-56 h-60 bg-slate-400 inline-block bg-gradient-to-tr from-white to-slate-400 bg-no-repeat animate-pulse"
            ></div>
          );
        })}
    </div>
  );
};

export default Skeleton;
