import React, { useState } from "react";
import Script from 'next/script';

const Chat = () => {
  return (
    <div>
      <Script id="chat" strategy="afterInteractive">
        {`
        (function () {
        var options = {
            whatsapp: "+34651903243", // WhatsApp number
            call_to_action: "", // Call to action
            button_color: "#009bde", // Color of button
            position: "left", // Position may be 'right' or 'left'
            order: "telegram,whatsapp", // Order of buttons
        };
        var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
              `}
      </Script>
    </div>
  );
}

export default Chat;

