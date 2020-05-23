var text;
var openFirst = true
var newText;
var rodText = ''
var datText = ''
var error = 'Для начала загрузите файл'
var rod = false
var dat = false
var openFile = function(event) {
    document.getElementById("input").style.display="none"
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
        text = reader.result;
        chanIm(text)
    };
    reader.readAsText(input.files[0]);

};
 function fun() {
     if (true){
         newText = text.split('\n')
         newText = newText.slice(0, text.length - 1)
         openFirst = false
     }

 }

function chanIm(text){
  if (text){
    document.getElementById('output').innerText = text;
  }else{
    document.getElementById('output').innerText = error;
  }

}

var arrWords = ["б", "в", "г", "д", "ж", "з",
    "к", "л", "м", "н", "п", "р", "с", "т",
    "ф", "ц", "ч", "ш", "щ"]
var nameTwo = ["ь", "й"]
var glasn = ["а", "о", "у", "ы", "э", "и"]
// родительный
function replRod() {
     for (let i = 0; i < newText.length; i++){

         var str = newText[i].split(' ') // строка ФИО

         // Фамилия (str[0)
         var okon1rod = str[0].slice(str[0].length - 1, str[0].length)
         if (arrWords.includes(okon1rod)){
             str[0] = str[0] + "a"
         }else if (okon1rod == "а"){
             str[0] = str[0].substr(0, str[0].length - 1)
             if (str[2].slice(str[2].length - 3, str[2].length) == "вна"){
                 //  женский род
                 str[0] = str[0] + "ой"
             }else {
                 str[0] = str[0] + "ы"
             }
         }else if (okon1rod == "я"){
             if (str[2].slice(str[2].length - 3, str[2].length) == "вна"){
                 // женский род
                 str[0] = str[0].substr(0, str[0].length - 2)
                 if (glasn.includes(str[0].substr(0, 1))){
                     str[0] = str[0] + "аи"
                 }else{
                     str[0] = str[0] + "ой"
                 }
             }else {
                 str[0] = str[0].substr(0, str[0].length - 1)
                 str[0] = str[0] + "и"
             }
         }else if (okon1rod == "о"){
             // не меняется
         }else if (okon1rod == "й"){
             var okon1rod1 = str[0].substr(str[0].length - 2)
             if (okon1rod1 == "ый"){
                 str[0] = str[0].substr(0, str[0].length - 2) + "ого"
             }else if (okon1rod1 == "ий"){
                 // не меняется
             }
         }

         // Имя (str[1])
         var okon2rod = str[1].slice(str[1].length - 1, str[1].length)
         console.log(str[1])
         if (arrWords.includes(okon2rod)){
             str[1] = str[1] + "a"
         }else if (okon2rod == "а"){
             if (str[1].substr(str[1].length - 2, str[1].length - 1) == "ш" || str[1].substr(str[1].length - 2, str[1].length - 1) == "ж"){
                 str[1] = str[1].substr(0, str[1].length - 1)
                 str[1] = str[1] + "и"
             }else{
                 str[1] = str[1].substr(0, str[1].length - 1)
                 str[1] = str[1] + "ы"
             }
         }else if (okon2rod == "я"){
             str[1] = str[1].substr(0, str[1].length - 1)
             str[1] = str[1] + "и"
         }else if (nameTwo.includes(okon2rod)){
             str[1] = str[1].substr(0, str[1].length - 1)
             str[1] = str[1] + "я"
         }

         // Отчество (str[2])
         var okon3rod = str[2].slice(str[2].length - 3, str[2].length)
         console.log(str[2])
         if (okon3rod == "вич"){
             str[2] = str[2] + "а"
         }else if (okon3rod == "вна"){
             str[2] = str[2].substr(0, str[2].length - 1)
             str[2] = str[2] + "ы"
         }


         // cохранение всего результата
         newText[i] = str.join(' ')
         rodText += newText[i] + '\n'
     }

 }

// дательный
function replDat() {
    for (let i = 0; i < newText.length; i++){

        var str = newText[i].split(' ') // строка ФИО

        // Фамилия (str[0)
        var okon1 = str[0].slice(str[0].length - 1, str[0].length)
        if (arrWords.includes(okon1)){
            str[0] = str[0] + "у"
        }else if (okon1 == "а"){
            str[0] = str[0].substr(0, str[0].length - 1)
            if (str[2].slice(str[2].length - 3, str[2].length) == "вна"){
                //  женский род
                str[0] = str[0] + "ой"
            }else {
                str[0] = str[0] + "е"
            }
        }else if (okon1 == "я"){
            str[0] = str[0].substr(0, str[0].length - 2)
            if (str[2].slice(str[2].length - 3, str[2].length) == "вна"){
                // женский род
                if (glasn.includes(str[0].substr(0, 1))){
                    str[0] = str[0] + "ае"
                }else{
                    str[0] = str[0] + "ой"
                }
            }else {
                str[0] = str[0].substr(0, str[0].length - 1)
                str[0] = str[0] + "е"
            }
        }else if (okon1 == "о"){
           // не меняется
        }else if (okon1 == "й"){
            var okon11 = str[0].substr(str[0].length - 2)
            if (okon11 == "ый"){
                str[0] = str[0].substr(0, str[0].length - 2) + "ому"
            }else if (okon11 == "ий"){
                // не меняется
            }
        }

        // Имя (str[1])
        var okon2 = str[1].slice(str[1].length - 1, str[1].length)
        if (arrWords.includes(okon2)){
            str[1] = str[1] + "у"
        }else if (okon2 == "а"){
                str[1] = str[1].substr(0, str[1].length - 1)
                str[1] = str[1] + "е"
        }else if (okon2 == "я"){
            if (str[1].slice(str[1].length - 2, str[2].length) == "ия"){
                str[1] = str[1].substr(0, str[1].length - 1)
                str[1] = str[1] + "и"
            }else {
                str[1] = str[1].substr(0, str[1].length - 1)
                str[1] = str[1] + "е"
            }
        }else if (nameTwo.includes(okon2)){
            str[1] = str[1].substr(0, str[1].length - 1)
            str[1] = str[1] + "ю"
        }

        // Отчество (str[2])
        var okon3 = str[2].slice(str[2].length - 3, str[2].length)
        if (okon3 == "вич"){
            str[2] = str[2] + "у"
        }else if (okon3 == "вна"){
            str[2] = str[2].substr(0, str[2].length - 1)
            str[2] = str[2] + "е"
        }


        // cохранение всего результата
        newText[i] = str.join(' ')
        datText += newText[i] + '\n'
    }

}

// выводим + create файл (родительный)
 function chanRod() {
    if (text){
     if (!rod){
         rodText = ''
         datText = ''
         fun()
         replRod()
         document.getElementById('output').innerText = rodText;
         createFile(rodText, "родительный", "txt")
         dat = false
         rod = true
     }
   }else{
       document.getElementById('output').innerText = error;
   }
 }

 // выводим + create файл (дательный)
 function chanDat() {
    if (text){
     if (!dat){
         rodText = ''
         datText = ''
         fun()
         replDat()
         document.getElementById('output').innerText = datText;
         createFile(datText, "дательный", "txt")
         rod = false
         dat = true
     }
   }else{
       document.getElementById('output').innerText = error;
   }
 }

 // создание файла
function createFile(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
