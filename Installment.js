var myName = '<NOIDENTIFICATION>';
var ownersName = 'owner';
alert(myName + ' Hello ' + ownersName + '!');
for(var i = 0; i < 1; i = i) {
    myName = prompt(myName + ' What is my name?');
    if (myName.length == 0) {
        alert('Please give me a real name ' + ownersName + '. I am excited to be a part of your life');
    } else {
        var myorgName = myName;
        myName = '<' + myName + '>';
        i = 1;
    }
}
alert(myName + ' I love my name ' + ownersName + '!');
ownersName = prompt(myName + ' Whats is your name?');
prompt(myName + ' Please add me to your browser ' + ownersName + '.\nCreate a bookmark labeled ' + myorgName + ' and set the destination to the link below. Copy and paste it in.', 'var myName = "' + myName + '"; var ownersName = "' + ownersName + '"; var inject = document.createElement("script"); inject.src = "https://bingec0der.github.io/FriendAI/AI.js"; document.head.appendChild(inject); startAI(true);');
alert(myName + ' Just click my name anytime to talk to me ' + ownersName + '!');