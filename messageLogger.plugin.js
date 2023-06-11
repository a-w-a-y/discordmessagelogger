/**
    * @name messageLogger
    * @author hmm#6085
    * @source https://github.com/a-w-a-y/discordmessagelogger/blob/main/messageLogger.plugin.js
    * @description Logs edited and deleted messages
    * @updateUrl https://raw.githubusercontent.com/a-w-a-y/discordmessagelogger/main/messageLogger.plugin.js
    * @website https://github.com/a-w-a-y/discordmessagelogger
    * @version 0.0.1
    */

module.exports = class {
    start() {

    }
    stop() {

    }
    getSettingsPanel() {
        return [document.createElement("div")];
    }
    observer(target, observer) {
        //bd autoremoves the observer when plugin is disabled
        //len 0 if not node remove
        if(target.removedNodes.length > 0){
            //check if msg
            try{
                //there's no button container when it's still sending
                if(target.removedNodes[0].id.startsWith("chat-messages") && target.removedNodes[0].childNodes[0].childNodes[2].getAttribute("class").startsWith("buttonContainer")){
                    //reappend but in red?
                    var reMsg = target.removedNodes[0];
                    reMsg.style.color = "red";
                    target.removedNodes[0].insertBefore(reMsg);
                }
            } catch(e){
                console.log(e);
            }
        }
    }
};  