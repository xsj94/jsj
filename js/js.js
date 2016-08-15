
/**
 * Created by Administrator on 2016/8/11.
 */
var screenNode=document.getElementById("screen")
function inputKey(num){
    //num就是你按下去0-9或点
    //screenNode.value就是当前屏幕的值
    if(cleanBool){//需要清除
        screenNode.value="";
        cleanBool=false;//清完了
    }

    if(screenNode.value=="0" && num!="."){//当你屏幕的值是0，你下一次按0-9应该就是直接替换
        screenNode.value=num;
    }
    else if(screenNode.value.indexOf(".")==-1 && num=="." || num!="."){
        //若屏幕没有点且我按的就是点或我按的就是0-9
        screenNode.value+=num;//屏幕的值累加
    }
}


var beforeNum,afterNum,signGlobal,cleanBool=false,signResult;
//beforeNum是字符之前的值；afterNum是字符之后的值；signGlobal是符号；cleanBool是否清空;count是点击符号的次数;signResult是一直按等于单独存一个符号
function operatingFun(sign){//按了符号
    console.log("符号开始",beforeNum,afterNum);

    if(signGlobal!=null){//符号已经赋值，先运算之前的运算
        afterNum=screenNode.value;
        result();////触发计算

    }
    afterNum=null;//解决连续运算按等于没更新afterNum的问题

    beforeNum=screenNode.value;//记录屏幕的值
    signGlobal=sign;//记录符号
    cleanBool=true;

    console.log("符号结束",beforeNum,afterNum);
}

function result(){
    console.log("等号开始",beforeNum,afterNum);

    if(signGlobal!=null){
        signResult=signGlobal;
    }

    if(afterNum==null){//连续等于做的判断
        afterNum=screenNode.value;//现在屏幕的值
    }

    switch (signResult){
        case "%":
            screenNode.value=Number(beforeNum)%Number(afterNum);
            break;
        case "+":
            screenNode.value=Number(beforeNum)+Number(afterNum);
            break;
        case "-":
            screenNode.value=Number(beforeNum)-Number(afterNum);
            break;
        case "*":
            screenNode.value=Number(beforeNum)*Number(afterNum);
            break;
        case "/":
            screenNode.value=Number(beforeNum)/Number(afterNum);
            break;
    }
    afterNum=screenNode.value;//现在屏幕的值
    signGlobal=null;
    console.log("等号结束",beforeNum,afterNum);

}
function del(){//删除一位
    screenNode.value=screenNode.value.substr(0,screenNode.value.length-1);//截取去掉最后一位
}

function clearFun(){//清除
    screenNode.value="0";
}


function sqr(){//开根
    screenNode.value=Math.sqrt(screenNode.value);

}







