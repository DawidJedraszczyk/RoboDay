import React from "react";
import { MENU_OPTIONS } from "./../../Content";

const Categories = () => {
  const hrefs = [".Schedule", ".Workshops", ".Contact", ".Contact"];
  const links = hrefs.map((link, index) => ({
    link,
    text: MENU_OPTIONS[index],
  }));
  const createLi = links.map((element, index) => (
    <li key={index}>
      <a href={element.link}>{element.text}</a>
    </li>
  ));

  return <ul className="list-none">{createLi}</ul>;
};

export default Categories;
