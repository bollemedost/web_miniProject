function Home({ onStart }) { // React component that takes an onStart function as a prop
    return(
    <div>
        <h1>Find your Purrfect Match!</h1>
        <p>
        Answer a few questions about your lifestyle and preferences, and we'll match you with the ideal cat from a local shelter!
        </p>
        <button
            onClick={onStart} // Call the onStart function when the button is clicked
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
        Find My Match →
        </button>
    </div>
    );
}

export default Home; // make the Home component available for import in other parts of the application