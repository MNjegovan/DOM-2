/**
 * Created by Ucenik on 11.5.2017..
 */
function funk1() {
    if(document.getElementById("check1").checked){
        document.getElementById("prvi").innerHTML += window.innerHeight;
    }
    if(document.getElementById("check2").checked){
        document.getElementById("drugi").innerHTML += window.innerWidth;
    }
    if(document.getElementById("check3").checked){
        document.getElementById("treći").innerHTML += screen.height;
    }
    if(document.getElementById("check4").checked){
        document.getElementById("četvrti").innerHTML += screen.width;
    }
    if(document.getElementById("check5").checked){
        document.getElementById("peti").innerHTML += screen.availHeight;
    }
    if(document.getElementById("check6").checked){
        document.getElementById("šesti").innerHTML += screen.availWidth;
    }
}
function funk2() {
    mojprozor = window.open("https://www.google.hr",height = 200, width = 200);
}
function funk3() {
    mojprozor.close();
}

var prozor = {
    lokacijahref: window.location.href,
    lokacijagl: window.location.hostname,
    putanjagl:window.location.pathname,
    protokol: window.location.protocol
}
for (i in prozor){
    console.log(prozor[i]);
}