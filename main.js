// slide
let count = 1;
document.querySelector("#radio1").checked = true;

setInterval(() => {
    slide()
},5000);

const slide = () =>{
    count ++;
    if(count > 4){
        count = 1;
        document.querySelector('.slide').style.transition = "0s"
    }
    else{
        document.querySelector('.slide').style.transition = "2s"
    }
    document.querySelector("#radio" + count).checked = true;
}

