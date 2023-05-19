import React, { useRef } from "react";

const Categories = () => {
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scheduleRef = useRef(null);
  const workshopsRef = useRef(null);
  const patronitesRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <ul className="list-none">
      <li>
        <li>HARMONOGRAM</li>
      </li>
      <li>
        <a href=".Workshops">WARSZTATY</a>
      </li>
      <li>
        <a href=".Contact">PARTNERZY</a>
      </li>
      <li>
        <a href=".Contact">KONTAKT</a>
      </li>
    </ul>
  );
};

export default Categories;
