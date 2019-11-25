var myWindow;
opn = document.getElementsByClassName("dugme")[0]
opn.addEventListener('click', openWin);

cls = document.getElementsByClassName("close")[0]
cls.addEventListener('click', closeWin);

function openWin() {
    var soba;

    

    var text;
    text = "<p>Ime: " + document.getElementsByClassName("ime")[0].value + "</p><p>Prezime: " + document.getElementsByClassName("prezime")[0].value
    + "</p><p>Telefon:  " + document.getElementsByClassName("telefon")[0].value+ "</p><p>Datum: " + document.getElementsByClassName("date")[0].value
    + "</p><p>Vreme: " + document.getElementsByClassName("time")[0].value;
  myWindow = window.open("", "myWindow", "width=400,height=200, top=100,left=500, color:red");
  myWindow.document.write("<p>Uneli ste:  </p>" + text);
  myWindow.name("diwmjweij");
}

function changeBackground(color) {
  document.body.style.name = color;
}

myWindow.addEventListener("load",function() { changeBackground('green') });

function closeWin() {
  myWindow.close();
}




