window.onload=function (){
    document.getElementById ("count").onclick  = function (){
        main();
    };
};

function main(){
    var sum = count1() + count2() + count3() + count4() + count5();
    var result = document.getElementById ("name").value + "本次测验的成绩是："+sum.toString ();
    alert (result);
}

function count1() {
    var sum = 0;
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

function count2(){
    var sum = 0;
    if(document.getElementsByName ("1")[1].checked === true)
        sum += 10;
    if(document.getElementsByName ("2")[0].checked === true)
        sum += 10;
    return sum;
}

function count3() {
    var sum = 0;
    var list1 = document.getElementsByName ("first");
    if (list1[0].checked === true && list1[1].checked === true && list1[2].checked === false && list1[3].checked === true )
        sum += 10;
    var list2 = document.getElementsByName ("second");
    if (list2[0].checked === true && list2[1].checked === true && list2[2].checked === true && list2[3].checked === false )
        sum += 10;

    return sum;
}

function count4() {
    var sum = 0;
    if(document.getElementsByName ("4.1")[1].checked === true)
        sum += 10;
    if(document.getElementsByName ("4.2")[0].checked === true)
        sum += 10;
    return sum;
}

function count5() {
    var sum = 0;
    if(document.getElementById ("short-answer").value === "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；也可以是某种图形；或者是一种数学表达式。")
    sum += 20;

    return sum;
}