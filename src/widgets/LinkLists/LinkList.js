import React, { useState } from "react";
import "./LinkList.css";

const LinkList = (props) => {
  //const [message, setMessage] = useState(null);

    console.log('props are ', props);
  const { answer , messages } = props;
  const message = messages[messages.length-1];
  console.log('message id is ', message)
  if (!answer) {
    return null
  }
  const linksWidget = answer.widgets.find(w => w.type === 'Links');
  if (!linksWidget) {
    return null
  }
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
