import React from "react";
import style from './error.module.css';

export default function Error(){
    return (
        <div>
            <h2 className={style.title}> Error 404 element not found</h2>
        </div>
    )
}