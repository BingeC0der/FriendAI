alert(myName + ' Hello ' + ownersName + '!');
for(var i = 0; i < 1; i = i) {
    var response = prompt(myName + ' Do you need to talk to me?');
    var a = response.includes('Yes' || 'yes');
    var b = response.includes('No' || 'no');
    if(a == true) {
        alert(myName + ' I am here for you ' + ownersName + '!');
        i = 1;
    }
    if(b == true) {
        alert(myName + ' Okay just press CTRL + ALT to talk with me');
        i = 1;
    }
    if(a && b == false) {
        alert(myName + ' I did not understand you? Could you please respond using yes or no?');
    }
}