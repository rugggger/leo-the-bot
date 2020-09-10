import React from 'react';
import maleAgent from '../assets/images/maleAgent.png';
import femaleAgent from '../assets/images/femaleAgent.png';

const BotAvatar = (props) => {
    const { gender } = props;
    const agent = gender === 'male' ? maleAgent : femaleAgent;
    return (
        <div><img alt={gender} aria-label='expert' src={ agent } width='35' heigh='35'></img></div>
    )
}
export default BotAvatar;