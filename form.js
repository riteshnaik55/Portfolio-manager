function add(){
    n1=document.getElementById('name').value;
    n2=document.getElementById('num').value;
    n3=document.getElementById('email').value;

    localStorage.setItem("Name",n1);
    localStorage.setItem("Number",n2);
    localStorage.setItem("Email",n3);

    //stocks
    nam=document.getElementById('nos').value;
    dos=document.getElementById('dos').value;
    var costofstock=parseInt(document.getElementById('cps').value);
    var sellofstock=parseInt(document.getElementById('pps').value);
    var quantofstock=parseInt(document.getElementById('qos').value);
    tos=document.getElementById('stocktype').value;
    invstock=quantofstock*costofstock;
    todstock=quantofstock*sellofstock;

    localStorage.setItem("Nostock",nam);
    localStorage.setItem("Dostock",dos);
    localStorage.setItem("Costock",invstock);
    localStorage.setItem("Sostock",todstock);
    localStorage.setItem("Qostock",tos);

    //fixed income
    nameinc=document.getElementById('finame').value;
    typeinc=document.getElementById('fitype').value;
    var costinc=parseInt(document.getElementById('cpi').value);
    var rateinc=parseInt(document.getElementById('ratefi').value);
    var sdinc=document.getElementById('sdfi').value;
    var mdinc=parseInt(document.getElementById('mdfi').value);

    var sellinc=Math.round(costinc+((costinc*rateinc*mdinc)/1200));

    localStorage.setItem("Ninc",nameinc);
    localStorage.setItem("Tinc",typeinc);
    localStorage.setItem("Ainc",costinc);
    localStorage.setItem("Rinc",sdinc);
    localStorage.setItem("Sinc",sellinc);
    localStorage.setItem("Minc",mdinc);

    //bullion
    bullionname=document.getElementById('bulltype').value;
    bulliondate=document.getElementById('bulldate').value;
    bullionquant=document.getElementById('bullquant').value;
    bullioncost=parseInt(document.getElementById('bullcost').value);
    if(bullionname=="Gold")
    {
        var costbull=bullioncost*bullionquant;
        var sellbull=4600*bullionquant;
    }
    else
    {
        var costbull=bullioncost*bullionquant;
        var sellbull=6100*bullionquant;
    }

    localStorage.setItem("BName",bullionname);
    localStorage.setItem("BDate",bulliondate);
    localStorage.setItem("BQuant",bullionquant);
    localStorage.setItem("BCost",costbull);
    localStorage.setItem("BSell",sellbull);

    //property
    nameprop=document.getElementById('propname').value;
    dateprop=document.getElementById('propdate').value;
    var costprop=parseInt(document.getElementById('cprice').value);
    var sellprop=parseInt(document.getElementById('sprice').value);
    
    localStorage.setItem('Nameofprop',nameprop);
    localStorage.setItem('Dateofprop',dateprop);
    localStorage.setItem('Costofprop',costprop);
    localStorage.setItem('Sellofprop',sellprop);
    
    //loan
    loanname=document.getElementById('nameloan').value;
    set=document.getElementById('select').value;
    var costloan=parseInt(document.getElementById('lcp').value);
    var rateloan=parseInt(document.getElementById('lir').value);
    var sdloan=parseInt(document.getElementById('lsd').value);

    var retamount=(costloan+((costloan*rateloan*sdloan)/1200));

    localStorage.setItem('Nameofloan',loanname);
    localStorage.setItem('Typeofloan',set);
    localStorage.setItem('Aofloan',costloan);
    localStorage.setItem('Rateofloan',retamount);
    localStorage.setItem('Dateofloan',sdloan);
  
    //other assets
    nameoa=document.getElementById('aname').value;
    typeoa=document.getElementById('atype').value;
    dateoa=document.getElementById('asd').value;
    var costoa=parseInt(document.getElementById('acp').value);
    var selloa=parseInt(document.getElementById('asp').value);
    localStorage.setItem('NameAsset',nameoa);
    localStorage.setItem('TypeAsset',typeoa);
    localStorage.setItem('DateAsset',dateoa);
    localStorage.setItem('CostAsset',costoa);
    localStorage.setItem('SellAsset',selloa);


    //other borrowings
    nameob=document.getElementById('nob').value;
    dateob=document.getElementById('dob').value;
    var sellob=parseInt(document.getElementById('cob').value);

    localStorage.setItem('NameBorrow',nameob);
    localStorage.setItem('DateBorrow',dateob);
    localStorage.setItem('SellBorrow',sellob);

    assets=selloa+sellprop+todstock+sellinc+sellbull;
    liab=sellob+retamount;
    networth=assets-liab;
    
    invcost=costoa+costprop+invstock+costinc+costbull;
    invlv=selloa+sellprop+todstock+sellbull+sellinc;

    ovg=invlv-invcost;
    ovgp=Math.round((ovg*100)/invcost).toFixed(2);
    localStorage.setItem('Assets',assets);
    localStorage.setItem('Liabilities',liab);
    localStorage.setItem('Networth',networth);
    localStorage.setItem('Investcost',invcost);
    localStorage.setItem('Investvalue',invlv);
    localStorage.setItem('Gain',ovg);
    localStorage.setItem('Gainper',ovgp);

    alert('Form filled successfully!!!');
}