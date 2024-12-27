/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || null);

  return (
    <div className="w-full mx-auto mt-10">
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`p-4 text-md font-medium  ${
              activeTab === tab.id
                ? " bg-emerald-600 text-white rounded"
                :  "bg-emerald-300 text-white rounded"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="text-gray-800">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
