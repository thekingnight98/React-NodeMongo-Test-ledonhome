import React, { useEffect, useState } from "react";
import ComponentLv2 from "./ComponentLV2";

const ComponentLv1 = () => {
  const [navigations, setNavigations] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/navigations")
      .then((navigations) => navigations.json())
      .then((navigations) => setNavigations(navigations))
      .catch((error) => console.error("Error fetching navigations:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/web_categories")
      .then((categories) => categories.json())
      .then((categories) => setCategories(categories))
      .catch((error) => console.error("Error fetching navigations:", error));
  }, []);

  return (
    <div>
      <ComponentLv2 navigations={navigations} categories={categories} />
    </div>
  );
};
export default ComponentLv1;
