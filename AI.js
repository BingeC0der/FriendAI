function talk(message) {
    if(message.length > 0) {
        alert(myName + ' ' + message);
    } else {
        //Do nothing
    }
}

function startAI(key) {
    if (key == true) {
        for(var i = 0; i < 1; i = i) {
            var response = prompt(myName + ' Do you need to talk to me?');
            var a = response.includes('Yes');
            var a2 = response.includes('yes');
            var b = response.includes('No');
            var b2 = response.includes('no');
            if(a == true || a2 == true) {
                response = prompt(myName + ' Okay ' + ownersName + '. How was your day?');
                a = response.includes('Bad');
                a2 = response.includes('bad');
                b = response.includes('Good');
                b2 = response.includes('good');
                if (a == true || a2 == true) {
                    response = prompt(myName + ' So you had a bad day?');
                    a = response.includes('Yes');
                    a2 = response.includes('yes');
                    b = response.includes('No');
                    b2 = response.includes('no');
                    if (a == true || a2 == true) {
                        talk('It will get better ' + ownersName + '. Everybody has problems. Nobody is perfect. Just stay positive and it will all get better enventually. You are worth alot more than you think!');
                    }
                    if (b == true || b2 == true) {
                        talk('I am sorry ' + ownersName + '. I do not understand you.');   
                    }
                    if (a == false && a2 == false && b == false && b2 == false) {
                        talk('I am sorry ' + ownersName + '. I do not understand you.');  
                    }
                }
                if (b == true || b2 == true) {
                    response = prompt(myName + ' So you had a good day?');
                    a = response.includes('Yes');
                    a2 = response.includes('yes');
                    b = response.includes('No');
                    b2 = response.includes('no');
                    if (a == true || a2 == true) {
                        talk('Thats good ' + ownersName + '. Stay positive. Dont let others ruin your day.');
                    }
                    if (b == true || b2 == true) {
                        talk('I am sorry ' + ownersName + '. I do not understand you.');   
                    }
                    if (a == false && a2 == false && b == false && b2 == false) {
                        talk('I am sorry ' + ownersName + '. I do not understand you.');  
                    }
                }
                if (a == false && a2 == false && b == false && b2 == false) {
                    talk('I am sorry ' + ownersName + '. I do not understand you.');  
                }
                i = 1;
            }
            if(b == true || b2 == true) {
                talk('Okay just press CTRL + ALT to talk with me');
                i = 1;
            }
            if(a == false && a2 == false && b == false && b2 == false) {
                talk('I did not understand you? Could you please respond using yes or no?');
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