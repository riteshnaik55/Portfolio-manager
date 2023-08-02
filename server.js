const express =require("express");
const app=express();
const mongoose =require("mongoose");
const bodyParser =require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

//mongoose.connect("<MONGODB URL HERE>",{useNewUrlParser:true},{useUnifiedTechnology:true}');

app.get("/", function(req,res){
    res.render("index");      
})

app.get("/form",function(req,res){
    res.render("form");
})

const notesSchema={
    name:String,
    mobile:String,
    email:String,
    month:String,

    stockname:String,
    stockdate:String,
    stockquant:String,
    stockcost:String,
    stocksell:String,

    finame:String,
    fitype:String,
    ficp:String,
    fidate:String,
    fitp:String,
    fiir:String,
    fisp:String,

    pname:String,
    pdate:String,
    pcp:String,
    psp:String,

    mfname:String,
    mfdate:String,
    mfcp:String,
    mfsp:String,

    bullname:String,
    bulldate:String,
    bullquant:String,
    bullcost:String,
    bullsell:String,

    oaname:String,
    oatype:String,
    oadate:String,
    oacost:String,
    oasell:String,

    obname:String,
    obdate:String,
    obcp:String,

    invcost:String,
    lastvalue:String,
    ovgain:String,
    ovgper:String,
    assets:String,
    liab:String,
    netvalue:String
}
const Note=mongoose.model("project",notesSchema);

app.post("/next",function(req,res){
    if(req.body.bname=="Gold")
    {
        bprice=48000;
    }
    else
    {
        bprice=65000;
    }
    fisped=parseFloat((req.body.ficp-(-((req.body.ficp*req.body.fiir*req.body.fitp)/100)))).toFixed(2);

    invest=req.body.stockip*req.body.stockquant-(-req.body.ficp)-(-req.body.pcp)-(-req.body.oaip)-(-req.body.bquant*req.body.bip)-(-req.body.mfcp);
    lastval=(req.body.stockcp*req.body.stockquant)-(-req.body.psp)-(-req.body.bquant*bprice)-(-req.body.oacp)-(-req.body.mfsp);
    
    ovg=lastval-invest;
    ovgpercent=Math.round((ovg*100)/lastval).toFixed(2);

    asset=parseFloat(lastval-(-fisped)).toFixed(2);
    liabilities=req.body.obcp;
    net=asset-liabilities;

    let alpha=new Note({
        name:req.body.naming,
        mobile:req.body.mob,
        email:req.body.email,
        month:req.body.month,
        
        stockname:req.body.stockname,
        stockdate:req.body.stockdate,
        stockquant:req.body.stockquant,
        stockcost:req.body.stockip*req.body.stockquant,
        stocksell:req.body.stockcp*req.body.stockquant,
        
        finame:req.body.finame,
        fitype:req.body.fitype,
        ficp:req.body.ficp,
        fidate:req.body.fidate,
        fitp:req.body.fitp,
        fiir:req.body.fiir,
        fisp:fisped,
        
        pname:req.body.pname,
        pdate:req.body.pdate,
        pcp:req.body.pcp,
        psp:req.body.psp,

        mfname:req.body.mfname,
        mfdate:req.body.mfdate,
        mfcp:req.body.mfcp,
        mfsp:req.body.mfsp,

        bullname:req.body.bname,
        bulldate:req.body.bdate,
        bullquant:req.body.bquant,
        bullcost:req.body.bquant*req.body.bip,
        bullsell:req.body.bquant*bprice,

        oaname:req.body.oaname,
        oatype:req.body.oatype,
        oadate:req.body.oadate,
        oacost:req.body.oaip,
        oasell:req.body.oacp,

        obname:req.body.obname,
        obdate:req.body.obdate,
        obcp:req.body.obcp,

        invcost:invest,
        lastvalue:lastval,
        ovgain:ovg,
        ovgper:ovgpercent,

        assets:asset,
        liab:liabilities,
        netvalue:net
    })
    
    alpha.save();

    res.render('db',{alpha});
})

app.get("/table", function(req,res){
    Note.find
    ({},function (err,project){
        res.render('records', {noteList: project});
    })
})

app.listen(3000, function(){console.log("\nServer is running...");}).on('error', console.log);