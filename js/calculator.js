document.addEventListener("DOMContentLoaded", load())
var result = ""
var str = ""
function load(){
	//实现计算器事件监听
	bceIt()
	addIt()
	showResult()
}
function bceIt(){
    console.log(1)
	document.getElementById("backspace").addEventListener("click", function(){
		str = document.getElementById("result").value.substr(0, str.length - 1)
		document.getElementById("result").value = str
	})
	document.getElementById("CE").addEventListener("click", function(){
		document.getElementById("result").value = ""
	})
	document.getElementById("C").addEventListener("click", function(){
		document.getElementById("result").value = ""
    })
    console.log(11)
}
function addIt(){
    console.log(2)
	var numberAndOperationButtons = ["num0", "num1", "num2", "num3", "num4", "num5", "num6", "num7", "num8", "num9", "mod", "point", "add", "sub", "mul", "div"]
	for (i in numberAndOperationButtons){
		document.getElementById(numberAndOperationButtons[i]).addEventListener("click", function(){
            document.getElementById("result").value = document.getElementById("result").value + this.value
            str = document.getElementById("result").value
		})
    }
    console.log(22)
}
function showResult(){
    console.log(3)
    var showResultButtons = ["sin", "cos", "tan", "ln", "square", "sqrt", "recip", "calculate"]
    for (j in showResultButtons) {
        document.getElementById(showResultButtons[j]).addEventListener("click", function(){
            var type = this.id
            try{
                result = eval(str)
                console.log("===")
            }catch(e){
                console.log("请按正确格式输入运算！")
            }
            switch(type){
                case "sin":
                    result = Math.sin(result)
                    break
                case "cos":
                    result = Math.cos(result)
                    break
                case "tan":
                    result = Math.tan(result)
                    break
                case "ln":
                    result = Math.log(result)
                    break
                case "square":
                    result = Math.pow(result, 2)
                    break
                case "sqrt":
                    result = Math.sqrt(result)
                    break
                case "recip":
                    result = 1.0 / result
                    break
            }
            str = result
            document.getElementById("result").value = str
        })  
    }
    console.log(33)
}
