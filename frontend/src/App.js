import {useState} from 'react';
import Home from './components/home';
import Quiz from './components/quiz';
import Results from './components/results';

function App() {
    const [page, setPage] = useState('home'); // State to track the current page (home, quiz, results)
    const [matchedCats, setMatchedCats] = useState([]); // State to store the list of cats matched based on the quiz answers

    async function handleQuizSubmit(answers) { // Calls the backend after completing the quiz to get matched cats based on the user's answers
        const {energyLevel, goodWith, shelter} = answers;
        const params = new URLSearchParams();

            params.append('energyLevel', energyLevel);
            goodWith.forEach(item => params.append('goodWith', item));
            shelter.forEach(item => params.append('shelter', item));

        const response = await fetch(`http://localhost:3001/api/cats/match?${params.toString()}`);
        const cats = await response.json();
        setMatchedCats(cats);
        setPage('results');
    }

    function handleRestart() { // Resets the matched cats and navigates back to the home page when the user clicks the restart button
        setMatchedCats([]);
        setPage('home');
    }

    return ( // Render the appropriate page (home, quiz, or results) based on the current state of the application
        <div style={{width: '100%', margin: 0, padding: '60px 6vw', boxSizing: 'border-box'}}>
            {page === 'home' && <Home onStart={() => setPage('quiz')} />}
            {page === 'quiz' && <Quiz onSubmit={handleQuizSubmit} />}
            {page === 'results' && <Results cats={matchedCats} onRestart={handleRestart} />}
        </div>  
    );
}

export default App;