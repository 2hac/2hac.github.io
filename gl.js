// ======================================================
// Global Logger
// Usage:
// LOG("INFO", "Game started");
// LOG("ERROR", "Failed to connect.");
// LOG("WARNING", "Low memory.");
// LOG("ASSERT", "Player object was null.");
// LOG("NOTICE", "Server restarting.");
// LOG("FATAL", "Critical crash.");
// ======================================================

(function(){
    const STYLES={INFO:{label:"#29d3fd",text:"#D6F3FF"},ERROR:{label:"#ff3b3b",text:"#FFDADA"},WARNING:{label:"#ffd23d",text:"#FFF7CC"},ASSERT:{label:"#ff6434",text:"#FFE2D9"},NOTICE:{label:"#d768eb",text:"#F1D9FF"},FATAL:{label:"#b91616",text:"#FFFFFF"},SUCCESS:{label:"#5fe965",text:"#DFFFE2"},DEBUG:{label:"#a8c2cf",text:"#ECEFF1"}};
    function getTime(){return new Date().toLocaleTimeString();}
    window.LOG=function(type,text){
        type=String(type||"INFO").toUpperCase();
        const style=STYLES[type]||{label:"#607D8B",text:"#FFFFFF"};
        const message=`%c 2HAC %c ${type} %c ${getTime()} %c ${text}`;
        const hacStyle=`background:#ff00ff;color:#fff;font-weight:bold;padding:2px 6px;border-radius:3px;margin-right:6px;`;
        const labelStyle=`background:${style.label};color:#000;font-weight:bold;padding:2px 6px;border-radius:3px;`;
        const timeStyle=`background:#202124;color:#AAA;padding:2px 6px;`;
        const textStyle=`color:${style.text};font-weight:500;`;
        switch(type){
            case "ERROR":
            case "FATAL":console.error(message,hacStyle,labelStyle,timeStyle,textStyle);break;
            case "WARNING":console.warn(message,hacStyle,labelStyle,timeStyle,textStyle);break;
            case "ASSERT":console.assert(false,message,hacStyle,labelStyle,timeStyle,textStyle);break;
            default:console.log(message,hacStyle,labelStyle,timeStyle,textStyle);break;
        }
    };
})();