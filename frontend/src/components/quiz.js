import {useState} from 'react';

function Quiz({onSubmit}) {
    const [answers, setAnswers] = useState({
        energyLevel: '',
        goodWith: '',
        shelter: []
    }); 

    function handleChange(e) {
        if (e.target.type === 'checkbox') {
            const {name, value, checked} = e.target;

            setAnswers(prevAnswers => ({
                ...prevAnswers,
                [name]: checked
                    ? [...prevAnswers[name], value]
                    : prevAnswers[name].filter(item => item !== value)
            }));

            return;
        }

        setAnswers({
            ...answers,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit() {
        if (!answers.energyLevel || !answers.goodWith || answers.shelter.length === 0) {
            alert('Please answer all questions before submitting.');
            return;
        }
        onSubmit(answers);
    }

    return (
        <div>
            <h2>What is your lifestyle like?</h2>

            <div>
                <h3>How active is your household?</h3>
                <label><input type="radio" name="energyLevel" value="low" onChange={handleChange} /> Calm and quiet</label><br />
                <label><input type="radio" name="energyLevel" value="medium" onChange={handleChange} /> Moderatly active</label><br />
                <label><input type="radio" name="energyLevel" value="high" onChange={handleChange} /> Very active</label>
            </div>

            <div>
                <h3>Who do you live with?</h3>
                <label><input type="radio" name="goodWith" value="dogs" onChange={handleChange} /> Dogs</label><br />
                <label><input type="radio" name="goodWith" value="children" onChange={handleChange} /> Children</label><br />
                <label><input type="radio" name="goodWith" value="cats" onChange={handleChange} /> Other cats</label><br />
                <label><input type="radio" name="goodWith" value="solo owners" onChange={handleChange} /> None of the above</label>
            </div>

            <div>
                <h3>Where would you be able to pick up your new cat?</h3>
                <label><input type="checkbox" name="shelter" value="Copenhagen Cat Shelter" onChange={handleChange} /> Copenhagen Cat Shelter</label><br />
                <label><input type="checkbox" name="shelter" value="Aarhus Cat Rescue" onChange={handleChange} /> Aarhus Cat Rescue</label><br />
                <label><input type="checkbox" name="shelter" value="Odense Animal Shelter" onChange={handleChange} /> Odense Animal Shelter</label>
            </div>

            <button
                onClick={handleSubmit}
                style={{
                    backgroundColor: '#ea8cf5',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    marginTop: '20px'
                }}
            >
                See My Matches →    
            </button>
        </div>
    );
}

export default Quiz; // make the Quiz component available for import in other parts of the application