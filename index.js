// code your solution here
function saturdayFun(activity){
    if (activity === undefined){
        return "This Saturday, I want to roller-skate!"
    }else
        return `This Saturday, I want to ${activity}!` 
};
saturdayFun();

function mondayWork(activity){
    if(activity === undefined){
        return "This Monday, I will go to the office."
    }else
        return `This Monday, I will ${activity}.`
};
mondayWork(); 

function wrapAdjective(flair = '*'){
    return function(adjective = "a hard worker"){
        return `You are ${flair}${adjective}${flair}!`
    }
}
console.log(wrapAdjective());

function wrapAdjective(flair = '||'){
    return function(adjective = "a dedicated programmer"){
        return `You are ${flair}${adjective}${flair}!`
    }
}
console.log(wrapAdjective());