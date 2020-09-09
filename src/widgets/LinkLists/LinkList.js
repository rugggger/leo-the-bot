import React, { useState, useEffect } from "react";
import "./LinkList.css";

const LinkList = (props) => {
  const { answer } = props;

  const [ list , setList] = useState([]);

  useEffect(()=>{
    const linksWidget = answer.widgets.find(w => w.type === 'Links');
    if (!linksWidget) {
      return null
    }
    setList(linksWidget.params.options);
  },[]);


  const linkMarkup = list.map((link) => (
    <li key={link.id} className="link-list-item">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {link.text}
      </a>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;
