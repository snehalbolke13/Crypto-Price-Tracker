import React from 'react';

const PropertyPanel = () => {
  return (
    <div className="w-1/4 bg-gray-50 p-4 border-l">
      <h2 className="font-bold mb-4">Properties</h2>
      <form>
        <label className="block mb-2">
          Text:
          <input type="text" className="w-full border p-1" />
        </label>
        <label className="block mb-2">
          Color:
          <input type="color" className="w-full" />
        </label>
      </form>
    </div>
  );
};

export default PropertyPanel;
