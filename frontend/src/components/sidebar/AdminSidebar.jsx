// components/sidebar/AdminSidebar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { sidebarData } from "./sidebarData.js";


const AdminSidebar = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();

  const toggleExpand = (title) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-gray-900 text-gray-100 min-h-screen shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-green-400">Asset Manager</h1>
        <p className="text-xs text-gray-400 mt-1">Admin Panel</p>
      </div>

      {/* Navigation Items */}
      <nav className="p-4 space-y-2">
        {sidebarData.map((item, index) => (
          <div key={index}>
            {item.children ? (
              // Parent with children
              <div>
                <button
                  onClick={() => toggleExpand(item.title)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition duration-200"
                >
                  <div className="flex items-center space-x-3">
                    {item.icon && <item.icon size={20} />}
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      expandedItems[item.title] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Nested items */}
                {expandedItems[item.title] && (
                  <div className="ml-4 mt-2 space-y-1 border-l border-gray-700 pl-4">
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        to={child.path}
                        className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition duration-200 ${
                          isActive(child.path)
                            ? "bg-green-500 text-white"
                            : "text-gray-400 hover:text-white hover:bg-gray-800"
                        }`}
                      >
                        {child.icon && <child.icon size={18} />}
                        <span className="text-sm">{child.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Single item without children
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition duration-200 ${
                  isActive(item.path)
                    ? "bg-green-500 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {item.icon && <item.icon size={20} />}
                <span className="font-medium">{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
