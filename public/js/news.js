window.addEventListener('load', () => {
y = new Date().getFullYear();
m = new Date().getMonth() +1;
d = new Date().getDate();
document.getElementById("date").innerHTML = d +"/"+ m + "/" + y;

ind();
act();
cur();

})

function ind(){
    document.getElementById('indinc').style.display="contents";
    document.getElementById('b1').style.backgroundColor="hotpink";
    document.getElementById('global').style.display="none";
    document.getElementById('b2').style.backgroundColor="grey";
}
function glo(){
    document.getElementById('indinc').style.display="none";
    document.getElementById('b1').style.backgroundColor="grey";
    document.getElementById('global').style.display="contents";
    document.getElementById('b2').style.backgroundColor="hotpink";
}

function act(){
    document.getElementById('active').style.display="contents";
    document.getElementById('b3').style.backgroundColor="hotpink";
    document.getElementById('gain').style.display="none";
    document.getElementById('b4').style.backgroundColor="grey";
    document.getElementById('lose').style.display="none";
    document.getElementById('b5').style.backgroundColor="grey";
}

function gai(){
    document.getElementById('active').style.display="none";
    document.getElementById('b3').style.backgroundColor="grey";
    document.getElementById('gain').style.display="contents";
    document.getElementById('b4').style.backgroundColor="hotpink";
    document.getElementById('lose').style.display="none";
    document.getElementById('b5').style.backgroundColor="grey";
}

function los(){
    document.getElementById('active').style.display="none";
    document.getElementById('b3').style.backgroundColor="grey";
    document.getElementById('gain').style.display="none";
    document.getElementById('b4').style.backgroundColor="grey";
    document.getElementById('lose').style.display="contents";
    document.getElementById('b5').style.backgroundColor="hotpink";
}

function cur(){
    document.getElementById('currency').style.display="contents";
    document.getElementById('b6').style.backgroundColor="hotpink";
    document.getElementById('commodity').style.display="none";
    document.getElementById('b7').style.backgroundColor="grey";
    document.getElementById('bond').style.display="none";
    document.getElementById('b8').style.backgroundColor="grey";
}

function com(){
    document.getElementById('currency').style.display="none";
    document.getElementById('b6').style.backgroundColor="grey";
    document.getElementById('commodity').style.display="contents";
    document.getElementById('b7').style.backgroundColor="hotpink";
    document.getElementById('bond').style.display="none";
    document.getElementById('b8').style.backgroundColor="grey";
}

function bon(){
    document.getElementById('currency').style.display="none";
    document.getElementById('b6').style.backgroundColor="grey";
    document.getElementById('commodity').style.display="none";
    document.getElementById('b7').style.backgroundColor="grey";
    document.getElementById('bond').style.display="contents";
    document.getElementById('b8').style.backgroundColor="hotpink";
}