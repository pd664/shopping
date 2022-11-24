import React from 'react';
import '../../static/home/cartbtn.css'

function Cartbtn(props) {
    const {buy} = props;
 
    return (
        <div className="cartbtns">
            <div className="buy">
                <button className="cartbtn buy_btn" onClick={buy}>BUY</button>
            </div>
        </div>
    )
}

export default Cartbtn