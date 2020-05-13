import React from 'react';
import s from "./footer.module.css";

const Footer = (props) =>{

    return <div className={s.ft}>
               <div class={s.footer_links}>
            <div class={s.footer_limks_logo}>
                <h4>Diet-form</h4>
            </div>
            <div class={s.footer_link}>
                <p>links-table</p>
                <a href="">twitter</a>
                <a href="">facebook</a>
            </div>
            <div class={s.footer_link}>
                    <p>luxestate</p>
                    <a href="">twitter</a>
                    <a href="">facebook</a>
                    <a href="">github</a>
                    <a href="">anime</a>
                </div>
            <div class={s.footer_link}>
                    <p>links-table</p>
                    <a href="">twitter</a>
                    <a href="">facebook</a>
                </div>
            <div class={s.footer_link}>
                    <p>links-table</p>
                    <a href="">twitter</a>
                    <a href="">facebook</a>
                    <a href="">github</a>
                </div>
        </div>
    </div>
}

export default Footer;