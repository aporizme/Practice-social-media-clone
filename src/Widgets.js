import React from 'react'
import './Widgets.css'
function Widgets() {
    return (
        <div className="widget">
            <iframe title= "widget-cnn" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcnninternational&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=306291297473790" 
            width="340" height="100%" style={{border:"none;overflow:hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}

export default Widgets
