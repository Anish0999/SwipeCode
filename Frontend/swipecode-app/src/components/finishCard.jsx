import './finishCard.css'

function FinishCard({finalScore, questionLink}) {
    return (
        <div className='finish-card-container'>
            <div className='your-score'>Your Score 🏆</div>
            <div className='show-score'>{finalScore + "/5"}</div>

            <div className='q-options'>
                <div className='card-btn' onClick={() => handleSubmit()}>
                    <h3>Go Back</h3>
                </div>

                <div className='card-btn'>
                <a href={questionLink} target='_blank' style={{color: "white", textDecoration: "none"}}>   
                    <h3>View Question</h3>
                </a>
                </div>
            </div>

        </div>
    )
}

export default FinishCard