import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import SidebarItem from "./SidebarItem";
import { sidebarItemObj } from "./sidebarItemObj";
import { isEmpty } from "lodash";

const Sidebar = () => {
  const [activeId, setActiveId] = useState({});

  const handleClick = (id, name) => {
    if (activeId?.[name] === id) {
      // Object.keys(activeId).map((key) => {
      //   console.log("key--", key);
      //   if (key > name) {
      //     delete activeId?.[name];
      //   }
      // });
      // let duplicateActiveIds = { ...activeId };
      // for (let i = name; i < Object.keys(activeId).length + name; i++) {
      //   console.log("duplicateActiveIds", duplicateActiveIds, name);
      //   duplicateActiveIds = {
      //     ...duplicateActiveIds,
      //     [name]: undefined,
      //   };
      // }
      // console.log(
      //   "duplicateActiveIds",
      //   duplicateActiveIds,
      //   name,
      //   Object.keys(activeId).length
      // );

      setActiveId({
        ...activeId,
        [name]: undefined,
      });
      // setActiveId({ ...duplicateActiveIds });
    } else {
      let duplicateActiveIds = { ...activeId };
      for (let i = name; i <= Object.keys(activeId).length + name; i++) {
        console.log("duplicateActiveIds", duplicateActiveIds, name, i);
        delete duplicateActiveIds[i];
        // duplicateActiveIds = {
        //   ...duplicateActiveIds,
        //   [i]: undefined,
        // };
      }
      console.log("duplicateActiveIds", duplicateActiveIds);
      setActiveId({
        ...duplicateActiveIds,
        // ...activeId,
        [name]: id,
      });
    }
  };

  useEffect(() => {
    console.log(Object.keys(activeId).map(([key]) => key));
  }, []);

  console.log(activeId);

  return (
    <div className="sidebar">
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
