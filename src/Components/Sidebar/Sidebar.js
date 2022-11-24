import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.scss";
import SidebarItem from "./SidebarItem";
import { sidebarItemObj } from "./sidebarItemObj";
import { isEmpty } from "lodash";

const Sidebar = () => {
  const [activeId, setActiveId] = useState({});
  const [sidebarWidth, setSidebarWidth] = useState();

  const sidebarRef = useRef();

  useEffect(() => {
    setSidebarWidth(sidebarRef.current.clientWidth);
    const contentWidth = document.querySelector(".content");
    contentWidth.style.paddingLeft = sidebarWidth + "px";
    console.log("contentWidth", contentWidth);
  }, [sidebarWidth]);

  console.log("sidebarWidth", sidebarWidth);

  const handleClick = (id, name) => {
    if (activeId?.[name] === id) {
      delete activeId?.[name];
      setActiveId({
        ...activeId,
        // [name]: undefined,
      });
      // setActiveId({ ...duplicateActiveIds });
    } else {
      let duplicateActiveIds = { ...activeId };
      for (let i = name; i <= Object.keys(activeId).length; i++) {
        // console.log("duplicateActiveIds", duplicateActiveIds, name, i);
        delete duplicateActiveIds[i];
        // duplicateActiveIds = {
        //   ...duplicateActiveIds,
        //   [i]: undefined,
        // };
      }
      setActiveId({
        ...duplicateActiveIds,
        [name]: id,
      });
    }
  };

  // console.log(activeId, Object.keys(activeId));

  return (
    <div className="sidebar" ref={sidebarRef}>
      {sidebarItemObj.map((item, index) => (
        <SidebarItem
          item={item}
          id={item.id}
          activeId={activeId}
          name={1}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Sidebar;
