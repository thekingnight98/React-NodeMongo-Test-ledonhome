/* eslint-disable react/prop-types */
import React from "react";
import ComponentLv3 from "./ComponentLV3";

const NavigationItem = ({ navigation }) => {
  // ตรวจสอบว่ามี children หรือไม่
  const hasChildren = navigation.children && navigation.children.length > 0;

  return (
    <div>
      <div>
        <b> --id : {navigation.id}</b>
        {navigation.icon && <p>Icon: {navigation.icon}</p>}
        <p>title: {navigation.title}</p>
        <p>translate: {navigation.translate}</p>
        {/* แสดงข้อมูลเพิ่มเติมหากมี */}
        {navigation.type && <p>Type: {navigation.type}</p>}
      </div>
      {hasChildren && (
        <div>
          <b>--children--</b>
          {navigation.children.map((child) => (
            <div key={child.id}>
              <NavigationItem key={child.id} navigation={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ComponentLv2 = ({ navigations, categories }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ textAlign: "left", padding: "10px 0px" }}>
        <h2>Navigations List</h2>
        <ul>
          {navigations.map((navigation) => (
            <NavigationItem key={navigation.id} navigation={navigation} />
          ))}
        </ul>
      </div>
      <div>
        <ComponentLv3 categories={categories} />
      </div>
    </div>
  );
};
export default ComponentLv2;
