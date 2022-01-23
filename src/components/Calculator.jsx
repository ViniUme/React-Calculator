import React,{useState} from "react";
import Github from './Github'
import './Calculator.css'

export default function Calculator(){

    const [acc , setAcc] = useState('')
    const [total , setTotal] = useState('')

    function ClearAll(){
        setTotal('')
        setAcc('')
    }
    function AddNumber(num){
        if(total.length <= 8){
            setTotal(total + num) 
        }
    }
    function AddAction(sinal){
        if(total == ''){
           return 
        }
        else if(total.split('')[total.length - 1] == '.'){
            setAcc(acc + total + '0' + ` ${sinal} `)
            setTotal('')
        }
        else{
            setAcc(acc + total + ` ${sinal} `)
            setTotal('')
        }
    }
    function AddDot(){
        if(total.length == 0){
            setTotal('0.')
        }
        else if(total.split('')[total.length - 1] == '.'){
            return
        }
        else{
            setTotal(total + '.')
        }
    }
    function Result(){
        var result = String(acc + total).replace('÷' , '/').replace('x' , '*')
        result = String(eval(result)).substring(0 , 9)
        setTotal(result)
        setAcc('')
    }

    return(
        <div className="calculator">
            <div className="visor">
                <div className="acc">{acc}</div>
                <div className="total">{total}</div>
            </div>
            <div className="container">
                <input type="button" className="button action" value="C" onClick={() => setTotal('')}/>
                <input type="button" className="button action" value="CE" onClick={() => ClearAll()}/>
                <input type="button" className="button action" value="÷" onClick={() => AddAction('÷')}/>
                <input type="button" className="button action" value="x" onClick={() => AddAction('x')}/>
                <input type="button" className="button" value="7" onClick={() => AddNumber('7')}/>
                <input type="button" className="button" value="8" onClick={() => AddNumber('8')}/>
                <input type="button" className="button" value="9" onClick={() => AddNumber('9')}/>
                <input type="button" className="button action" value="-" onClick={() => AddAction('-')}/>
                <input type="button" className="button" value="4" onClick={() => AddNumber('4')}/>
                <input type="button" className="button" value="5" onClick={() => AddNumber('5')}/>
                <input type="button" className="button" value="6" onClick={() => AddNumber('6')}/>
                <input type="button" className="button action" value="+" onClick={() => AddAction('+')}/>
                <input type="button" className="button" value="1" onClick={() => AddNumber('1')}/>
                <input type="button" className="button" value="2" onClick={() => AddNumber('2')}/>
                <input type="button" className="button" value="3" onClick={() => AddNumber('3')}/>
                <input type="button" className="button zero" value="0" onClick={() => AddNumber('0')}/>
                <input type="button" className="button" value="." onClick={() => AddDot()}/>
                <input type="button" className="button equal" value="=" onClick={() => Result()}/>
            </div>
            <Github/>
        </div>
    )
}