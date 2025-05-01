import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-gray-100 p-4 border-r">
      <h2 className="font-bold mb-4">Elements</h2>
      <div draggable className="p-2 bg-white border rounded mb-2 cursor-move">Text</div>
      <div draggable className="p-2 bg-white border rounded mb-2 cursor-move">Image</div>
      <div draggable className="p-2 bg-white border rounded mb-2 cursor-move">Button</div>
    </div>
  );
};

export default Sidebar;
