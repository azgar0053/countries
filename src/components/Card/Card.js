import React from "react";
import styles from './Card.module.css';

const Card=(props)=>{
    return(
        <div className={styles.cardDiv}>
            <img src={props.image} alt={props.imgName}></img>
            <p>{props.city}</p>
        </div>
    )
}
export default Card;