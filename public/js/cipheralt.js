var textToCipher = "";

function encrypt()
{
    var message = document.getElementById("plaintext").value; //get message into string
    var z = 0;
    var y = 0;
    var keywordOne = document.getElementById('keyword1').value;   //gets keyword1
    //var keywordTwo = document.getElementById('keyword2').value;   //gets keyword2

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
    }

            //1st level of encryption//
*/
   for (var x = 0; x < message.length; x++)
    {
        encryptionLevelOneArray[x] = (messageArray[x] + keywordOneArrayRepeated[x]- 1) % 25;
    }

    encryptionLevelOneArray[x] = 1;



    for (var i = 0; i < message.length; i++) {
        alert(encryptionLevelOneArray[i]);
    }

     for (var k = 0; k < message.length; k++)
    {
    document.getElementById("ciphertext").innerHTML += encryptionLevelOneArray[k];
    }
}

function decrypt()
{
    var message = document.getElementById("plaintext").value; //get message into string
    var keywordOne = document.getElementById('keyword1').value;   //gets keyword1
    //var keywordTwo = document.getElementById('keyword2').value;   //gets keyword2
    var decryption = [];
    var z = 0;
    //decryption[2]=123123;
    //console.log(decryption[2]);
    var keywordOneArray = [];   //set array
    //var keywordTwoArray = [];   //set array
    var keywordOneArrayRepeated = [];  //set array
    var messageArray = [];
    var encryptionLevelOneArray = [];
    //var keywordTwoArrayRepeated = [];🍑

    for (var i = 0; i < keywordOne.length; i++)
        {
            keywordOneArray[i] = keywordOne.charCodeAt(i);
        }

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
    for (var x = 0; x < message.length; x++)
        {
            decryption[x] = (messageArray[x] - keywordOneArrayRepeated[x]+ 1);
            console.log(messageArray[x]);
            console.log(keywordOneArrayRepeated[x]);
        }

    for (var k = 0; k < message.length; k++)
    {
       // document.getElementById("ciphertext").innerHTML += decryption[k];
    }
}