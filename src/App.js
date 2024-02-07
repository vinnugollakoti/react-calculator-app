import {React,useState} from 'react'
import './App.css'

const App = () => {
  const [allBtnClicked, setAllBtnClicked] = useState("")


  const handleClick = (event) => {
    console.log(event.target.value);
    let strBtn = event.target.value;
    let newSettingString = allBtnClicked + strBtn;
    setAllBtnClicked(newSettingString); 
  }
  
  const handleClickDelete = ()  => {
    let newStr = allBtnClicked.slice(0, -1)
    setAllBtnClicked(newStr)
  }
  return (
    <div>
      <center>
      <div className='input'><h1>
        {allBtnClicked}</h1>
      </div>
      <div>
        <button onClick={() => setAllBtnClicked("")}  value = "Ac" className='btns'>Ac</button> 
        <button onClick={() => {
          handleClickDelete(); 
        }} value="del" className='btns'>Del</button>
        <button onClick={handleClick} value = "+" className='btns'>+</button><br/>
        <button onClick={handleClick} value = "1">1</button>
        <button onClick={handleClick} value = "2">2</button>
        <button onClick={handleClick} value = "3">3</button>
        <button onClick={handleClick} value = "*">*</button><br/>
        <button onClick={handleClick} value = "4">4</button>
        <button onClick={handleClick} value = "5">5</button>
        <button onClick={handleClick} value = "6">6</button>
        <button onClick={handleClick} value = "-">-</button><br/>
        <button onClick={handleClick} value = "7">7</button>
        <button onClick={handleClick} value = "8">8</button>
        <button onClick={handleClick} value = "9">9</button>
        <button onClick={handleClick} value = "/">/</button><br/>
        <button onClick={handleClick} value = "." className='btns'>.</button>
        <button onClick={handleClick} value = "0" className='btns'>0</button>
        <button onClick={() => {
            let evalAns = eval(allBtnClicked).toString();
            setAllBtnClicked(evalAns)
          }} value = "=" className='btns'>=</button>
      </div></center>
    </div>
  )
}

export default App
