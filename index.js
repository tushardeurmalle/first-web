var a=document.getElementById("loginpage");
var b=document.getElementById("signuppage");
var c=document.getElementById("statepage");
var d=document.getElementById("depositepage");
var e=document.getElementById("widrawpage");
var f=document.getElementById("transpage");
var g=document.getElementById("mainpage");
var fname=document.getElementById("firstname");
var lname=document.getElementById("lastname");
var dob=document.getElementById("dob");
var actype=document.getElementById("actype");
var gender=document.getElementById("gender");
var username=document.getElementById("username");
var pass=document.getElementById("pass");
var cpass=document.getElementById("cpass");
var adharno=document.getElementById("adharno");
var panno=document.getElementById("panno");
var adress=document.getElementById("adress");
var mob=document.getElementById("mob");
var email=document.getElementById("email");
var LOGIN=document.getElementById("LOGIN");
var nlogin=document.getElementById("nlogin");
var nsignup=document.getElementById("nsignup");
var signup=document.getElementById("signup");
var deposite=document.getElementById("deposite");
var widraw=document.getElementById("widraw");
var transfer=document.getElementById("transfer");
var cancel1=document.getElementById("cancel1");
var cancel2=document.getElementById("cancel2");
var cancel3=document.getElementById("cancel3");
var user1=document.getElementById("usename");
var pas=document.getElementById("pwd");
var gen=document.getElementById("generate");
var acno=document.getElementById("accountnum");
var main=[];
a.style.display='none';
b.style.display='none';
c.style.display='none';
d.style.display='none';
e.style.display='none';
f.style.display='none';
nlogin.addEventListener("click",()=>{
    g.style.display='none'; 
    a.style.display='block';
    b.style.display='none';
    c.style.display='none';
    d.style.display='none';
    e.style.display='none';
    f.style.display='none';
});
nsignup.addEventListener("click",()=>{
    g.style.display='none'; 
    b.style.display='block';
    a.style.display='none';
    c.style.display='none';
    d.style.display='none';
    e.style.display='none';
    f.style.display='none';
});
LOGIN.addEventListener("click",()=>{
    var check=false;
    main.map((item)=>{
        if((item.F==user1.value) && (item.G==pas.value)){
               check=true;
               }
            });
        if(check==true){
                g.style.display='none'; 
                a.style.display='none';
                b.style.display='none';
                c.style.display='block';
                d.style.display='none';
                e.style.display='none';
                f.style.display='none';
                
            }
           else{
            alert("invalid user");
           }
});
signup.addEventListener("click",()=>{
    var obj={A: fname.value, B: lname.value, C: dob.value,D: actype.value,E: gender.value,F: username.value,G: pass.value,H: cpass.value,I: adharno.value,J:panno.value,K: adress.value,L: mob.value,M: email.value,N: acno.value};
    main.push(obj);
    console.log(main);
    if(pass.value==cpass.value){ 
    g.style.display='none'; 
    a.style.display='block';
    b.style.display='none';
    c.style.display='none';
    d.style.display='none';
    e.style.display='none';
    f.style.display='none';
    }
    else{
        alert("pass and cpass not match");
    }
});
deposite.addEventListener("click",()=>{
    g.style.display='none'; 
    a.style.display='none';
    b.style.display='none';
    c.style.display='none';
    d.style.display='block';
    e.style.display='none';
    f.style.display='none';
});
widraw.addEventListener("click",()=>{
    g.style.display='none'; 
    a.style.display='none';
    b.style.display='none';
    c.style.display='none';
    d.style.display='none';
    e.style.display='block';
    f.style.display='none';
});
transfer.addEventListener("click",()=>{
    g.style.display='none'; 
    a.style.display='none';
    b.style.display='none';
    c.style.display='none';
    d.style.display='none';
    e.style.display='none';
    f.style.display='block';
});
cancel1.addEventListener("click",()=>{
    g.style.display='none'; 
    a.style.display='none';
    b.style.display='none';
    c.style.display='block';
    d.style.display='none';
    e.style.display='none';
    f.style.display='none';
});
cancel2.addEventListener("click",()=>{
    g.style.display='none'; 
    a.style.display='none';
    b.style.display='none';
    c.style.display='block';
    d.style.display='none';
    e.style.display='none';
    f.style.display='';
});
cancel3.addEventListener("click",()=>{
    g.style.display='none'; 
    a.style.display='none';
    b.style.display='none';
    c.style.display='block';
    d.style.display='none';
    e.style.display='none';
    f.style.display='none';
});
gen.addEventListener("click",()=>{
    main.map((items)=>{
        if(items.N==acno.value){
            fname.value=items.A;
            lname.value=items.B;
            dob.value=items.C;
            actype.value=items.D;
            gender.value=items.E;
            username.value=items.F;
            pass.value=items.G; 
            cpass.value=items.H;
            adharno.value=items.I;
            panno.value=items.J;
            adress.value=items.K;
            mob.value=items.L;
            email.value=items.M;
            }
        })

    });
