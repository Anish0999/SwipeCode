import './quizcard.css'

function QuizCard(props) {
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
                <div className='qtype'><b>A:</b>&nbsp;{props.qA} </div>
                {/* Both words have the same length. */}

                <div className='qtype'><b>B:</b>&nbsp;{props.qB}</div>
                {/* Both words have the same first letter. */}
                <div className='qtype'><b>C:</b>&nbsp;{props.qC}</div>
                {/* Both words have the same first letter. */}
                <div className='qtype'><b>D:</b>&nbsp;{props.qD}</div>
                {/* Both words have the same last letter. */}
            </div>

            {props.Abool}
            {props.Bbool}
            {props.Cbool}
            {props.Dbool}
            

            <div className='q-options'>
                <div className='card-btn'>
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