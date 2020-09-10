import React from 'react';
import maleAgent from '../assets/images/maleAgent.png';
import femaleAgent from '../assets/images/femaleAgent.png';

const BotAvatar = (props) => {
    const randNumber = Math.floor(Math.random() * 2);
    const agent = randNumber == 1? maleAgent : femaleAgent;
    return (
        <div><img aria-label='expert' src={ agent } width='35' heigh='35'></img></div>
    )
}
export default BotAvatar;