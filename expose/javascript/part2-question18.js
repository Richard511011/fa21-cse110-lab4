setInterval(secondTick,1000);

function secondTick(){
    let d= new Date();
    let time = d.toLocaleTimeString();
        console.log(time);
}
