import React from "react";
import "./LinkList.css";

const LinkList = (props) => {
    console.log('props are ', props);
  const { answer } = props;
  const linksWidget = answer.widgets.find(w => w.type === 'Links');
  const options = linksWidget.params.options;
  const linkMarkup = options.map((link) => (
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