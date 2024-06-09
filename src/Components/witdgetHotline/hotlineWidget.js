import React from "react";
import "./hotlineWidget.css";

function HotlineWidget() {
    return (
        <div class="hotline-widget">
            <a class="hotline" href="tel:0971691414">
                <i class="fas fa-phone-alt"></i>
                <div>

                    <p>HOTLINE MIỀN BẮC</p>
                    <span>
                        0971.691.414
                    </span>

                </div>
            </a>
            <a class="hotline hotline1" href="tel:0785503329">
                <i class="fas fa-phone-alt"></i>
                <div>

                    <p>HOTLINE MIỀN NAM</p>
                    <span>
                        0785.503.329
                    </span>

                </div>
            </a>
            <a href="https://zalo.me/0971691414" class="zalo" target="_blank" rel="noreferrer">
                <img src={require('./../../Assets/Images/zalo.png')} alt="zalo" />
            </a>
        </div>
    )
}

export default HotlineWidget;

// style = "display: flex; align-items: center;"
//style="margin-bottom: 4px; margin-top: 5px; line-height: 1; font-weight: 400; font-size: 13px;