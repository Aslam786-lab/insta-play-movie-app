import React from "react";

const DashboardTitle = ({ searchText, moviesListLen }) => {
  return (
    <div className="dashboard-title">
      {searchText
        ? moviesListLen
          ? `Search results for: "${searchText}"`
          : `No results found for: "${searchText}"`
        : "Trending"}
    </div>
  );
};

export default DashboardTitle;
