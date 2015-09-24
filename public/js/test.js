function decrypt() {

    function emojiStringToArray(str) {
      split = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
      arr = [];
      for (var i=0; i<split.length; i++) {
        char = split[i]
        if (char !== "") {
          arr.push(char);
        }
      }
      return arr;
    }

    var Stringtonum = [];
    var z = 0;
    var y = 0;
    var keywordOneArray = [];   //set array
    //var keywordTwoArray = [];   //set array
    var keywordOneArrayRepeated = [];  //set array
    var messageArray = [];
    var keywordOne = document.getElementById('keyword1').value;
    var message = document.getElementById("plaintext").value; //get message into string
    var finalUnencryptedString = "";    // for (var k = 0; k < message.length; k++)  // converts message to numbers
    // {
    //     messageArray[k] = message.charCodeAt(k);
    // }

    messageArray = emojiStringToArray(message);

    for (var i = 0; i < keywordOne.length; i++)
    {
        keywordOneArray[i] = keywordOne.charCodeAt(i) - 96;
    }
    for (var m = 0; m < messageArray.length; m++)
    {
        if (z < keywordOne.length) {
            keywordOneArrayRepeated[m] = keywordOneArray[z];
            z++;
        }

        else {
            z = 0;
            keywordOneArrayRepeated[m] = keywordOneArray[z];
            z++;
        }

    }

    for (var x = 0; x < messageArray.length; x++)
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
        messageArray[x] = (Stringtonum[x] - keywordOneArrayRepeated[x]) % 26;
        if (messageArray[x] < 0)
            messageArray[x] = 26 + messageArray[x];
        finalUnencryptedString += String.fromCharCode(messageArray[x] + 96);


    }

    // document.getElementById("ciphertext").innerHTML = "";
    $("#ciphertext").val(finalUnencryptedString);

    // for(var i=0; i<messageArray.length; i++)
    // {
    //     document.getElementById("ciphertext").innerHTML +=  String.fromCharCode(messageArray[i]+96);
    // }

    return 0;
}

$(function(){
    $( "#decryption" ).click(function() {
      decrypt();
    });
});
