

function onClear(){
    document.getElementById("counter").innerHTML = `Score = 0`;
    document.getElementById("ball").style.transform = "translate3d(0px, 0px, 0px)";
}

function change(){
    var sc = parseInt(document.getElementById("counter").innerHTML.slice(7));
    // alert(sc)
    document.getElementById("counter").innerHTML = `Score = ${sc + 1}`
    var x = Math.floor(Math.random()*1000) - 500;
    var y = Math.floor(Math.random()*1000) - 500;
    var elem = document.getElementById("ball");
    var curr = elem.style.transform.slice(11);
    if (curr.length == 0){
        curr = ["0", "0", "0"];
    }
    else{
        var l = curr.length;
        curr = curr.slice(1, l - 1).split(", ");
        for (var i = 0; i < curr.length; i++){
            curr[i] = curr[i].slice(0, curr[i].length - 2);
        }
    }
    
    elem.style.transform = `translate3d(${Math.min(1000, Math.max(0, x + parseInt(curr[0])))}px, ${Math.min(100, Math.max(0, y + parseInt(curr[1])))}px, 0px)`;
    // alert(curr);
}