/* eslint-disable react/prop-types */
import React from "react";

const CategorieItem = ({ categorie }) => {
  // ตรวจสอบว่ามี children หรือไม่
  const hasChildren = categorie.child && categorie.child.length > 0;

  return (
    <div>
      <div>
        <b>id : {categorie.id}</b>
        <p>title_th : {categorie.title_th}</p>
        <p>title_en : {categorie.title_en}</p>
        <p>parent_id : {categorie.parent_id}</p>
        <p>link : {categorie.link}</p>
        <p>image : {categorie.image}</p>
        <p>status : {categorie.status}</p>
      </div>
      {hasChildren && (
        <div>
          {categorie.child.map((child) => (
            <div key={child.id}>
              <b>--children จาก id {child.parent_id}--</b>
              <CategorieItem categorie={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ComponentLv3 = ({ categories }) => {
  return (
    <div style={{ textAlign: "left", padding: "10px 0px" }}>
      <h2>Web Categories List</h2>
      <ul>
        {categories.map((categorie) => (
          <CategorieItem key={categorie.id} categorie={categorie} />
        ))}
      </ul>
    </div>
  );
};
export default ComponentLv3;
