var cos,i3,bcost,a3,p3,b4,l3=0;

window.addEventListener('load', () => 
{
    n1=localStorage.getItem('Name');
    document.getElementById('name').innerHTML=n1;
    n2=localStorage.getItem('Number');
    if(n2=="")
    {
        document.getElementById('one').style.display="none";
    }
    else
    {
        document.getElementById('num').innerHTML=n2;
    }

    n3=localStorage.getItem('Email');
    if(n3=="")
    {
        document.getElementById('two').style.display="none";
    }
    else
    {
        document.getElementById('email').innerHTML=n3;
    }

    y = new Date().getFullYear();
    m = new Date().getMonth() +1;
    if(m>=1&&m<=9)
    {
        m="0"+m;
    }
    document.getElementById("date").innerHTML = m + "-" + y;
        
    a=localStorage.getItem('Assets');
    document.getElementById('A').innerHTML=a;
    b=localStorage.getItem('Liabilities');
    document.getElementById('L').innerHTML=b;
    c=localStorage.getItem('Networth');
    document.getElementById('N').innerHTML=c;
    d=localStorage.getItem('Investcost');
    document.getElementById('IC').innerHTML=d;
    e=localStorage.getItem('Investvalue');
    document.getElementById('IV').innerHTML=e;

    f=localStorage.getItem('Gain');
    document.getElementById('Overallgain').innerHTML=f;
    g=localStorage.getItem('Gainper');
    if(g=="NaN")
    {
        g=0;
    }
    else
    {
        document.getElementById('Overallper').innerHTML=g;
    }
    document.getElementById('Overallper').innerHTML=g;
    //Stocks complete
    names=localStorage.getItem('Nostock');            
    if(names=="")
    {
        document.getElementById('stock').style.display="none";
    }
    else
    {        
        document.getElementById('Nostock').innerHTML=names;
        dateofstock=localStorage.getItem('Dostock');
        document.getElementById('Datestock').innerHTML=dateofstock;
        qos=localStorage.getItem('Qostock');
        document.getElementById('Qostock').innerHTML=qos;
        cos=parseInt(localStorage.getItem('Costock'));
        document.getElementById('Costock').innerHTML=cos;
        sos=localStorage.getItem('Sostock');
        document.getElementById('Sostock').innerHTML=sos;
    }

    //Fixed Income complete
    nameinc=localStorage.getItem('Ninc');           
    if(nameinc=="")
    {
        document.getElementById('fixedinc').style.display="none";
    }
    else
    {
        document.getElementById('Noinc').innerHTML=nameinc;
        i1=localStorage.getItem('Tinc'); //type
        document.getElementById('Toinc').innerHTML=i1;

        i2=localStorage.getItem('Sinc');   //start date mf
        document.getElementById('SDoinc').innerHTML=i2;

        i3=parseInt(localStorage.getItem('Ainc'));   //costofmf
        document.getElementById('Aoinc').innerHTML=i3;

        i4=localStorage.getItem('Rinc');   //mature date of mf
        document.getElementById('MDoinc').innerHTML=i4;
    }

    //Bullion
    bname=localStorage.getItem('BName');
    if(bname=="")
    {
        document.getElementById('bullion').style.display="none";
    }
    else
    {
        document.getElementById('BullName').innerHTML=bname;
        bdate=localStorage.getItem('BDate');
        document.getElementById('BullDate').innerHTML=bdate;
        bcost=parseInt(localStorage.getItem('BCost'));
        document.getElementById('BullCost').innerHTML=bcost;
        bsell=localStorage.getItem('BSell');
        document.getElementById('BullSell').innerHTML=bsell;
    }

    //property complete
    proname=localStorage.getItem('Nameofprop');           
    if(proname=="")
    {
        document.getElementById('prop').style.display="none";
    }
    else
    {
        document.getElementById('Propname').innerHTML=proname;
        p2=localStorage.getItem('Dateofprop');   //date prop
        document.getElementById('Dateprop').innerHTML=p2;
        p3=parseInt(localStorage.getItem('Costofprop'));   //cost price of prop
        document.getElementById('Costprop').innerHTML=p3;
        p4=localStorage.getItem('Sellofprop');   //sell price of prop
        document.getElementById('Sellprop').innerHTML=p4;
    }

    //Loan Complete
    nloan=localStorage.getItem('Nameofloan');           
    if(nloan=="")
    {
        document.getElementById('loan').style.display="none";
    }
    else
    {
        document.getElementById('LoanName').innerHTML=nloan;

        l1=localStorage.getItem('Typeofloan'); //type
        document.getElementById('LoanType').innerHTML=l1;

        // l2=localStorage.getItem('Dateofloan');   //start date mf
        // document.getElementById('LoanDate').innerHTML=l2;

        l3=parseInt(localStorage.getItem('Aofloan'));   //costofmf
        document.getElementById('LoanAmount').innerHTML=l3;

        l4=localStorage.getItem('Rateofloan');   //rate of mf
        document.getElementById('RateLoan').innerHTML=l4;
    }

    //   Other assessts
    nameoa=localStorage.getItem('NameAsset');           
    if(nameoa=="")
    {
        document.getElementById('asset').style.display="none";
    }
    else
    {
        document.getElementById('Noasset').innerHTML=nameoa;
        a1=localStorage.getItem('TypeAsset'); //type
        document.getElementById('Toasset').innerHTML=a1;
        a2=localStorage.getItem('DateAsset');   //start date mf
        document.getElementById('Doasset').innerHTML=a2;
        a3=parseInt(localStorage.getItem('CostAsset'));   //costofmf
        document.getElementById('Coasset').innerHTML=a3;
        a4=localStorage.getItem('SellAsset');   //sell of mf
        document.getElementById('Soasset').innerHTML=a4;
    }

    //   Other borrowings
    nameob=localStorage.getItem('NameBorrow');           
    if(nameob=="")
    {
        document.getElementById('borrow').style.display="none";
    }
    else
    {
        document.getElementById('NameBorrow').innerHTML=nameob;
        b2=localStorage.getItem('DateBorrow');   //start date mf
        document.getElementById('Doborrow').innerHTML=b2;
        b4=parseInt(localStorage.getItem('SellBorrow'));   //sell of mf
        document.getElementById('Soborrow').innerHTML=b4;
    }
})

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Skills', 'Known Percentage (%)'],
    ['Stock', cos],
    ['Fixed Income', i3],
    ['Bullion', bcost],
    ['Loan',l3],
    ['Property', p3],
    ['Other Assets', a3],
    ['Other Borrowings',b4]
]);

var options = {'width':1200, 'height':400, 'backgroundColor':'transparent'};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));
chart.draw(data, options);
}

function hide(){
    document.getElementById('print').style.display="none";
}

function goToNewPage()
{ 
  window.location = document.getElementById('list').value;
}

function copy()
{
    var Url = document.createElement("textarea");
        Url.innerHTML = window.location.href;
        Copied = Url.createTextRange();
        Copied.execCommand("Copy");
}