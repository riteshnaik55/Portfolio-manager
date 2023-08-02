var cs=0
var ci=0;
var cb=0;
var cbo=0;
var ca=0;
var cp=0;
var ss=0;
var si=0;
var sp=0;
var sb=0;
var sa=0;
var cf=0;
var sf=0;
window.addEventListener('load', () => 
{   
        a=document.getElementById('Nostock').innerText;
        if(a==""){
            document.getElementById('stock').style.display="none";
        }else{
            cs=parseFloat(document.getElementById('Costock').innerText);
            ss=parseFloat(document.getElementById('Sostock').innerText);
        }

        b=document.getElementById('Noinc').innerText;
        if(b=="")
        {
            document.getElementById('fixedinc').style.display="none";
        }else{
            ci=parseFloat(document.getElementById('Aoinc').innerText);
            si=parseFloat(document.getElementById('SDoinc').innerText);
        }
        
        c=document.getElementById('BullName').innerText;
        if(c=="")
        {
            document.getElementById('bullion').style.display="none";
        }else{
            cb=parseFloat(document.getElementById('BullCost').innerText);
            sb=parseFloat(document.getElementById('BullSell').innerText);
        }

        d=document.getElementById('Propname').innerText;
        if(d=="")
        {
            document.getElementById('prop').style.display="none";
        }else{
            cp=parseFloat(document.getElementById('Costprop').innerText);
            sp=parseFloat(document.getElementById('Sellprop').innerText);
        }

        h=document.getElementById('MFName').innerText;
        if(h=="")
        {
            document.getElementById('mf').style.display="none";
        }else{
            cf=parseFloat(document.getElementById('MFCp').innerText);
            sf=parseFloat(document.getElementById('MFSp').innerText);
        }

        f=document.getElementById('Noasset').innerText;
        if(f=="")
        {
            document.getElementById('asset').style.display="none";
        }else{
            ca=parseFloat(document.getElementById('Coasset').innerText);
            sa=parseFloat(document.getElementById('Soasset').innerText);
        }

        g=document.getElementById('NameBorrow').innerText;
        if(g=="")
        {
            document.getElementById('borrow').style.display="none";
        }

    if(a==""&&b==""&&c==""&&d==""&&h==""&&f==""&&g=="")
    {
        document.getElementById('piechart').style.display="none";
        document.getElementById('container').style.display="none";
        document.getElementById('table').style.display="none";
    }else{
        f1();
    }
    
})

function f1(){
    document.getElementById('piechart').style.display="contents";
    document.getElementById('b1').style.backgroundColor="hotpink";
    document.getElementById('container').style.display="none";
    document.getElementById('b2').style.backgroundColor="grey";

    google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
            ['Skills', 'Known Percentage (%)'],
            ['Stocks', cs],
            ['Fixed Income',ci],
            ['Bullion', cb],
            ['Property', cp],
            ['Mutual Funds', cf],
            ['Other Assets', ca]
            ]);
            var options = {'width':1200, 'height':400, 'backgroundColor':'transparent'};
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(data, options);
        }
}

function f2(){
    document.getElementById('piechart').style.display="none";
    document.getElementById('b1').style.backgroundColor="grey";
    document.getElementById('container').style.display="contents";
    document.getElementById('b2').style.backgroundColor="hotpink";

    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var dato = google.visualization.arrayToDataTable([
            ['     ', 'Investment Cost', 'Latest Value'],
            ['Stocks', cs, ss],
            ['Fixed Income', ci, si],
            ['Property', cp, sp],
            ['Mutual Funds',cf,sf],
            ['Bullion', cb, sb],
            ['Other Assets', ca, sa]
        ]);

        var optiono = {
            width:1000,backgroundColor:'transparent',height:400,
            hAxis: {
                textStyle:{color: '#000',fontSize:18}
            },
            vAxis: {
                textStyle:{color: '#000',fontSize:15}
            },
            legend:{
                textStyle:{color: '#000',fontSize:15}
            }
        };
            
        var charts = new google.charts.Bar(document.getElementById('container'));
        charts.draw(dato, google.charts.Bar.convertOptions(optiono));
    }
}

function f3(){
    document.getElementById('b1').style.display="none";
    document.getElementById('b2').style.display="none";
    document.getElementById('hide').style.display="none";
}