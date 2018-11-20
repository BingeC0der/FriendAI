function startAI(key) {
    if (key == true) {
        for(var i = 0; i < 1; i = i) {
            var response = prompt(myName + ' Do you need to talk to me?');
            var a = response.includes('Yes');
            var a2 = response.includes('yes');
            var b = response.includes('No');
            var b2 = response.includes('no');
            if(a == true || a2 == true) {
                alert(myName + ' I am here for you ' + ownersName + '!');
                i = 1;
            }
            if(b == true || b2 == true) {
                alert(myName + ' Okay just press CTRL + ALT to talk with me');
                i = 1;
            }
            if(a == false && a2 == false && b == false && b2 == false) {
                alert(myName + ' I did not understand you? Could you please respond using yes or no?');
            }
        }
    } else {
        //Do nothing
    }
}

alert(myName + ' Hello ' + ownersName + '!');
startAI(true);

window.onkeydown = function (e) {
    if (!e) e = window.event;
    if (e.ctrlKey && e.altKey) {
        startAI(true);
    }
}