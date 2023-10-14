import React from "react";

const getComponents = (componentOrder, brandCode) => {
  const renderComponents = () => {
    if (!Object.keys(componentOrder).includes(brandCode)) {
      return componentOrder?.default.map((component, index) => (
        <div key={index}>{component}</div>
      ));
    }
    return componentOrder?.[brandCode].map((component, index) => (
      <div key={index}>{component}</div>
    ));
  };

  return renderComponents();
};

export default getComponents;
