import React from 'react';
const emojis = {
    lion: {
        aria: "lion",
        code: "&#129409;",
    },
    thumbsup: {
        aria: "thumbsup",
        code: "&#128077;"
    },
    thumbsdown: {
        aria: "thumbsdown",
        code: "&#128078;"
    },
    robot: {
        aria: "robot",
        code: "&#129302;"
    },
    expert: {
        aria: "expert",
        code: "../maleAgent.png"
    }
}
const Emoji = (props) => {

    const { emoji } = props ;
    const emojiData = emojis[emoji];
    if (!emojiData) {return null}

    return (
        <span role="img" aria-label={emojiData.aria}
        dangerouslySetInnerHTML={{ __html: emojiData.code }}
        ></span>
    )
}

export default Emoji;