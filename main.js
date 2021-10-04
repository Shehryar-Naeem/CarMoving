setInterval(run,100);

m=0;
function run()
{
    m+=5;
    const x=document.getElementById("car");
    x.style.marginLeft=m+"px";

}