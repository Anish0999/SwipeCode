import './quizcard.css'
import { useState } from 'react';
import { useEffect } from 'react';

function QuizCard(props) {

    const [selected, changeSelected] = useState(null);

    const [defaultA, changeA] = useState("gray");
    const [defaultB, changeB] = useState("gray");
    const [defaultC, changeC] = useState("gray");
    const [defaultD, changeD] = useState("gray");


    function selectedOption(questionLetter) {
        
       if(questionLetter === "A") {
          changeA("blue");
          changeB("gray");
          changeC("gray");
          changeD("gray");

          changeSelected("A");
       }
       else if(questionLetter === "B") {
          changeA("gray");
          changeB("blue");
          changeC("gray");
          changeD("gray");

          changeSelected("B");
       }
       else if(questionLetter === "C") {
        changeA("gray");
        changeB("gray");
        changeC("blue");
        changeD("gray");

        changeSelected("C");
      }
      else if(questionLetter === "D") {
        changeA("gray");
        changeB("gray");
        changeC("gray");
        changeD("blue");

        changeSelected("D");
      }
    }

    // useEffect(()=>{
    //     console.log(selected);
    // })


    function handleSubmit() {

        console.log("test")

        if(selected === "A" && props.Abool || selected === "B" && props.Bbool || 
           selected === "C" && props.Cbool || selected === "D" && props.Dbool) {
            props.getDataFunction(true)
        }
        else{
            props.getDataFunction(false)
        }
    }

    return (

        <div className='card-container'>

            <div className='q-name'>
                <h1>{props.qName}</h1>
                {/* Valid Anagram */}
            </div>

            <div className='desc'>
                <p style={{fontSize: props.qDescFontSize}}>
                     {props.qDesc}
                </p>


            </div>

            <div className='choices'>

                <div className='qtype' style={{backgroundColor: defaultA}} onClick={()=>selectedOption("A")}><b>A:</b>&nbsp;
                    <div className='qtype2'>{props.qA}</div>
                </div>

                <div className='qtype' style={{backgroundColor: defaultB}} onClick={()=>selectedOption("B")}><b>B:</b>&nbsp;
                <div className='qtype2'>{props.qB}</div>
                </div>

                <div className='qtype' style={{backgroundColor: defaultC}} onClick={()=>selectedOption("C")}><b>C:</b>&nbsp;
                <div className='qtype2'>{props.qC}</div>
                </div>

                <div className='qtype' style={{backgroundColor: defaultD}} onClick={()=>selectedOption("D")}><b>D:</b>&nbsp;
                <div className='qtype2'>{props.qD}</div>
                </div>

              
               
            </div>

            {props.Abool}
            {props.Bbool}
            {props.Cbool}
            {props.Dbool}
            
            <div className='q-options'>
                <div className='card-btn' onClick={handleSubmit}>
                    <h3>Submit</h3>
                </div>

                <div className='card-btn'>
                    <h3>View Question</h3>
                </div>
            </div>

        </div>
    )
}

export default QuizCard;