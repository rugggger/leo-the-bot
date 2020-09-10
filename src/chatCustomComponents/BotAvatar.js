import React from 'react';
import Emoji from '../misc/Emoji';
const BotAvatar = (props) => {
    const agent = Math.floor(Math.random() * 2);
    const returnString = agent == 1? "maleAgent.png" : "femaleAgent.png";
    return (
        <div><img aria-label='expert' src={ returnString } width='35' heigh='35'></img></div>
    )
}
export default BotAvatar;