import {useState} from 'react';
import Home from './components/home';
import Quiz from './components/quiz';
import Results from './components/results';

function App() {
    const [page, setPage] = useState('home'); // State to track the current page (home, quiz, results)
    const [matchedCats, setMatchedCats] = useState([]);

    async function handleQuizSubmit(answers) { // Calls the backend after completing the quiz to get matched cats based on the user's answers
        const {energyLevel, goodWith} = answers;
        const response = await fetch(
          `http://localhost:3001/api/cats/match?energyLevel=${energyLevel}&goodWith=${goodWith}`
        );
        const cats = await response.json();
        setMatchedCats(cats);
        setPage('results');
    }

    function handleRestart() {
        setMatchedCats([]);
        setPage('home');
    }

    return (
        <div style={{maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
            {page === 'home' && <Home onStart={() => setPage('quiz')} />}
            {page === 'quiz' && <Quiz onSubmit={handleQuizSubmit} />}
            {page === 'results' && <Results cats={matchedCats} onRestart={handleRestart} />}
        </div>  
    );
}

export default App;