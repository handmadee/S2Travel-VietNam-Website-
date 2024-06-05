

import React from 'react';
import './widgetMobile.css';
function WidgetMobile() {
    return (
        <div class="hotline-widget-mobile">
            <a href="https://zalo.me/0971691414" class="zalo-mobile " target="_blank">
                <img src={require('./../../Assets/Images/zalo.png')} alt="zalo" />
                <span>Chat với tư vấn viên</span>
            </a>
            <a class="hotline" href="tel:0971691414">
                <i class="fas fa-phone-alt"></i>
                Gọi ngay    </a>
        </div>
    )
}

export default WidgetMobile;