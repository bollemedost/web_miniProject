import {useState} from 'react';

function Quiz({onSubmit}) {
    const [answers, setAnswers] = useState({
        energyLevel: '',
        goodWith: [],
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
        if (!answers.energyLevel || answers.goodWith.length === 0 || answers.shelter.length === 0) {
            alert('Please answer all questions before submitting.');
            return;
        }
        onSubmit(answers);
    }

    return (
        <div style={{ 
            padding: '10px', 
            marginBottom: '10px',
            fontSize: '18px', 
            fontFamily: 'Luckiest Guy, Arial, sans-serif'
            }}>
            <h2 style={{
            fontSize: '56px',
            margin: '0 0 50px 0',
            letterSpacing: '3px',
            lineHeight: '0.95'
            }}>
            What is your lifestyle like?</h2>
            <div>
                <h3 style={{
                fontSize: '23px',
                margin: '0 0 12px 0',
                letterSpacing: '1px',
                lineHeight: '0.95'
                }}>
                How active is your household?</h3>
                <label><input type="radio" name="energyLevel" value="low" onChange={handleChange} /> Calm and quiet</label><br />
                <label><input type="radio" name="energyLevel" value="medium" onChange={handleChange} /> Moderatly active</label><br />
                <label><input type="radio" name="energyLevel" value="high" onChange={handleChange} /> Very active</label>
            </div>

            <div>
                <h3 style={{
                fontSize: '23px',
                margin: '40px 0 12px 0',
                letterSpacing: '1px',
                lineHeight: '0.95'
                }}>
                Who do you live with?</h3>
                <label><input type="checkbox" name="goodWith" value="dogs" onChange={handleChange} /> Dogs</label><br />
                <label><input type="checkbox" name="goodWith" value="children" onChange={handleChange} /> Children</label><br />
                <label><input type="checkbox" name="goodWith" value="cats" onChange={handleChange} /> Other cats</label><br />
                <label><input type="checkbox" name="goodWith" value="solo owners" onChange={handleChange} /> None of the above</label>
            </div>

            <div>
                <h3 style={{
                fontSize: '23px',
                margin: '40px 0 12px 0',
                letterSpacing: '1px',
                lineHeight: '0.95'
                }}>
                Where would you be able to pick up your new cat?</h3>
                <label><input type="checkbox" name="shelter" value="Copenhagen Cat Shelter" onChange={handleChange} /> Copenhagen Cat Shelter</label><br />
                <label><input type="checkbox" name="shelter" value="Aarhus Cat Rescue" onChange={handleChange} /> Aarhus Cat Rescue</label><br />
                <label><input type="checkbox" name="shelter" value="Odense Animal Shelter" onChange={handleChange} /> Odense Animal Shelter</label>
            </div>

            <button
                onClick={handleSubmit}
                style={{
                backgroundColor: '#000000',
                color: 'white',
                border: 'none',
                padding: '20px 38px',
                borderRadius: '40px',
                cursor: 'pointer',
                fontSize: '21px',
                marginTop: '50px'
                }}
            >
                See My Matches →    
            </button>
        </div>
    );
}

export default Quiz; // make the Quiz component available for import in other parts of the application