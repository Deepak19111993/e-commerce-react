import React, { useState } from "react";

const SidebarItem = ({ item, id, name, activeId, handleClick }) => {
  const handleActive = () => {
    // console.log(activeId?.[name], id, activeId);
    return !!activeId?.[name] ? activeId?.[name] === id : false;

    // if (activeId?.[name] === id) {
    //   return activeId?.[name] === id;
    // } else {
    //   return false;
    // }
  };

  if (item.childrens) {
    return (
      <div className={`sidebar-item ${handleActive() ? "open" : ""}`}>
        <div className="sidebar-title" onClick={() => handleClick(id, name)}>
          <div className="title">
            <img src={item.image} alt="" />
            {item.name}
          </div>
          <div className="arrow">{item.arrow}</div>
        </div>

        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem
              key={index}
              item={child}
              id={child.id}
              handleClick={handleClick}
              name={name + 1}
              activeId={activeId}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`sidebar-item ${handleActive() ? "open" : ""}`}>
        <div className="sidebar-title" onClick={() => handleClick(id, name)}>
          <div className="title">
            <img src={item.image} alt="" />
            {item.name}
          </div>
        </div>
      </div>
    );
  }
};

export default SidebarItem;
