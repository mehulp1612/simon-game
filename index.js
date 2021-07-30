var btns=document.querySelectorAll("button");
var level=5;
var inp_size;
const pttrn=["red","green","blue","yellow"];
var usr_ptrn=[];
var show_pattern=[];


var btns=document.querySelectorAll("button");

btns.forEach((value) => {
    value.addEventListener('click', (e)=>{
    
    var btn_value=e.target.id;
    usr_ptrn.push(btn_value);
    //console.log(usr_ptrn);
    }
    )   
});

function generate_pattern(lvl) {
show_pattern=[];
    for(var i=0;i<lvl;i++)
    {
        var t=Math.floor(Math.random()*4);
        show_pattern.push(pttrn[t]);
    }

    //console.log(show_pattern);
}

function disp_pattern(i) {



    document.getElementById(show_pattern[i]).style.opacity="50%";

    setTimeout(() => {
        document.getElementById(show_pattern[i]).style.opacity="100%";
    },500);


}



