window.onload=function (){
    document.getElementById ("count").onclick  = function (){
        main();
    };
};

function main(){
    let sum = completion() + radio() + checkbox() + judge() + shortanswer();
    let result = document.getElementById ("name").value + "本次测验的成绩是："+sum.toString ();
    alert (result);
    document.getElementById ("score").value = sum;
}

function completion() {
    let sum = 0;
    if(document.getElementById("1.1").value === "统一建模语言" )
        sum += 5;
    if(document.getElementById("1.21").value === "封装性" )
        sum += 5;
    if(document.getElementById("1.22").value === "继承性" )
        sum += 5;
    if(document.getElementById("1.23").value === "多态性" )
        sum += 5;

    return sum;
}

function radio(){
    let sum = 0;
    if(document.getElementsByName ("2.1")[1].checked === true)
        sum += 10;
    if(document.getElementsByName ("2.2")[0].checked === true)
        sum += 10;

    return sum;
}

function checkbox() {
    let sum = 0;
    let list1 = document.getElementsByName ("3.1");
    if (list1[0].checked === true && list1[1].checked === true && list1[2].checked === false && list1[3].checked === true )
        sum += 10;
    let list2 = document.getElementsByName ("3.2");
    if (list2[0].checked === true && list2[1].checked === true && list2[2].checked === true && list2[3].checked === false )
        sum += 10;

    return sum;
}

function judge() {
    let sum = 0;
    if(document.getElementsByName ("4.1")[1].checked === true)
        sum += 10;
    if(document.getElementsByName ("4.2")[0].checked === true)
        sum += 10;

    return sum;
}

function shortanswer() {
    let sum = 0;
    if(document.getElementById ("5.1").value === "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；也可以是某种图形；或者是一种数学表达式。")
    sum += 20;

    return sum;
}