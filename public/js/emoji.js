var textToCipher = "";

function encrypt()
{
    var message = document.getElementById("input").value; //get message into string
    var keywordOne = document.getElementById("keyword1").value;   //gets keyword1
    var z = 0;
    var y = 0;
   // var keywordTwo = document.getElementById('keyword2').value;   //gets keyword2

    var keywordOneArray = [];   //set array
    //var keywordTwoArray = [];   //set array
    var keywordOneArrayRepeated = [];  //set array
    var messageArray = [];
    var encryptionLevelOneArray = [];
    //var keywordTwoArrayRepeated = [];

    for (var i = 0; i < keywordOne.length; i++)
    {
        keywordOneArray[i] = keywordOne.charCodeAt(i);
    }

    /*for (var j = 0; j < keywordTwo.length; j++)
    {
        keywordTwoArray[j] = keywordTwo.charCodeAt(j);
    }*/


    for (var k = 0; k < message.length; k++)  // converts message to numbers
    {
        messageArray[k] = message.charCodeAt(k) - 96;
    }

    for (var m = 0; m < message.length; m++)
    {
        if (z < keywordOne.length) {
            keywordOneArrayRepeated[m] = keywordOneArray[z] - 96;
            z++;
        }

        else {
            z = 0;
            keywordOneArrayRepeated[m] = keywordOneArray[z] - 96;
            z++;
        }

    }

    //start of repeating word 2

 /*   for (var l = 0; l <= (message.length / keywordOne.length) + (message.length % keywordOne.length); l++)
    {
        if (y <= keywordOne.length) {
            keywordTwoArrayRepeated[l] = numberKeywordOne[y];
            y++;
        }

        else {
            y = 0;
            keywordTwoArrayRepeated[l] = numberKeywordOne[y];
            y++;
        }

    }*/

  //  alert(keywordOneArrayRepeated[0]);

  //  var firstencrypt = [[]];

/*    for (var a = 0; a < 100; a++);
    {
        var count=0;
        for (var b =0; b < message.length / 100; b++)
        {
            firstencrypt[b][a] = keywordOneArrayRepeated[count];
            count++;
        }
    }*/

            //1st level of encryption//
    var finalencryptionString = "";

    for (var x = 0; x < message.length; x++)
    {
        encryptionLevelOneArray[x] = (messageArray[x] + keywordOneArrayRepeated[x]- 1) % 25;
        if(encryptionLevelOneArray[x]==1)
            finalencryptionString = "🎳";
        else if( encryptionLevelOneArray[x]==2)
            finalencryptionString = "🏂";
        else if( encryptionLevelOneArray[x]==3)
            finalencryptionString = "🌁";
        else if( encryptionLevelOneArray[x]==4)
            finalencryptionString = "🌉";
        else if( encryptionLevelOneArray[x]==5)
            finalencryptionString = "🌋";
        else if( encryptionLevelOneArray[x]==6)
            finalencryptionString = "🌌";
        else if( encryptionLevelOneArray[x]==7)
            finalencryptionString = "🌏";
        else if( encryptionLevelOneArray[x]==8)
            finalencryptionString = "🌑";
        else if( encryptionLevelOneArray[x]==9)
            finalencryptionString = "🌓";
        else if( encryptionLevelOneArray[x]==10)
            finalencryptionString = "🌔";
        else if( encryptionLevelOneArray[x]==11)
            finalencryptionString = "🌕";
        else if( encryptionLevelOneArray[x]==12)
            finalencryptionString = "🌛";
        else if( encryptionLevelOneArray[x]==13)
            finalencryptionString = "🌠";
        else if( encryptionLevelOneArray[x]==14)
            finalencryptionString = "🌰";
        else if( encryptionLevelOneArray[x]==15)
            finalencryptionString = "🍏";
        else if( encryptionLevelOneArray[x]==16)
            finalencryptionString = "🌱";
        else if( encryptionLevelOneArray[x]==17)
            finalencryptionString = "🌼";
        else if( encryptionLevelOneArray[x]==18)
            finalencryptionString = "🌽";
        else if( encryptionLevelOneArray[x]==19)
            finalencryptionString = "🌿";
        else if( encryptionLevelOneArray[x]==20)
            finalencryptionString = "🍄";
        else if( encryptionLevelOneArray[x]==21)
            finalencryptionString = "🍇";
        else if( encryptionLevelOneArray[x]==22)
            finalencryptionString = "🍈";
        else if( encryptionLevelOneArray[x]==23)
            finalencryptionString = "🍌";
        else if( encryptionLevelOneArray[x]==24)
            finalencryptionString = "🍍";
        else if( encryptionLevelOneArray[x]==25)
            finalencryptionString = "🍑";
        else if( encryptionLevelOneArray[x]==26)
            finalencryptionString = "🍒";
        document.getElementById("output").innerHTML += finalencryptionString;
    }


//    if(...==1)finalEncryptionString+="ðŸ˜";




}

function decrypt() {
    var Stringtonum = [];
    var z = 0;
    var y = 0;
    var keywordOneArray = [];   //set array
    //var keywordTwoArray = [];   //set array
    var keywordOneArrayRepeated = [];  //set array
    var messageArray = [];
    var keywordOne = document.getElementById("keyword1").value;
    var message = document.getElementById("input").value; // get message into string
    for (var k = 0; k < message.length; k++)  // converts message to numbers
    {
        messageArray[k] = message.charCodeAt(k);
    }
    for (var i = 0; i < keywordOne.length; i++)
    {
        keywordOneArray[i] = keywordOne.charCodeAt(i);
    }
    for (var m = 0; m < message.length; m++)
    {
        if (z < keywordOne.length) {
            keywordOneArrayRepeated[m] = keywordOneArray[z] - 96;
            z++;
        }

        else {
            z = 0;
            keywordOneArrayRepeated[m] = keywordOneArray[z] - 96;
            z++;
        }

    }

    for (var x = 0; x < message.length; x++)
    {
        if(messageArray[x]=="🎳")
            Stringtonum[x] = 1;
        else if( messageArray[x]=="🏂")
            Stringtonum[x] = 2;
        else if( messageArray[x]=="🌁")
            Stringtonum[x] = 3;
        else if( messageArray[x]=="🌉")
            Stringtonum[x] = 4;
        else if( messageArray[x]=="🌋")
            Stringtonum[x] = 5;
        else if( messageArray[x]=="🌌")
            Stringtonum[x] = 6;
        else if( messageArray[x]=="🌏")
            Stringtonum[x] = 7;
        else if( messageArray[x]=="🌑")
            Stringtonum[x] = 8;
        else if( messageArray[x]=="🌓")
            Stringtonum[x] = 9;
        else if( messageArray[x]=="🌔")
            Stringtonum[x] = 10;
        else if( messageArray[x]=="🌕")
            Stringtonum[x] = 11;
        else if( messageArray[x]=="🌛")
            Stringtonum[x] = 12;
        else if( messageArray[x]=="🌠")
            Stringtonum[x] = 13;
        else if( messageArray[x]=="🌰")
            Stringtonum[x] = 14;
        else if( messageArray[x]=="🍏")
            Stringtonum[x] = 15;
        else if( messageArray[x]=="🌱")
            Stringtonum[x] = 16;
        else if( messageArray[x]=="🌼")
            Stringtonum[x] = 17;
        else if( messageArray[x]=="🌽")
            Stringtonum[x] = 18;
        else if( messageArray[x]=="🌿")
            Stringtonum[x] = 19;
        else if( messageArray[x]=="🍄")
            Stringtonum[x] = 20;
        else if( messageArray[x]=="🍇")
            Stringtonum[x] = 21;
        else if( messageArray[x]=="🍈")
            Stringtonum[x] = 22;
        else if( messageArray[x]=="🍌")
            Stringtonum[x] = 23;
        else if( messageArray[x]=="🍍")
            Stringtonum[x] = 24;
        else if( messageArray[x]=="🍑")
            Stringtonum[x] = 25;
        else if( messageArray[x]=="🍒")
            Stringtonum[x] = 26;
        messageArray[x] = (Stringtonum[x] - keywordOneArrayRepeated[x]+ 1) % 25;
    }
    for(var i=0; i<message.length; i++)
    {
        document.getElementById("output").innerHTML += messageArray[i];
    }
}
