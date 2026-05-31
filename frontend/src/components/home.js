function Home({ onStart }) { // React component that takes an onStart function as a prop
    return(
    <div style={{ 
        textAlign: 'left',
        padding: '10px 0',
        marginTop: '200px',
        fontSize: '18px',
        fontFamily: 'Luckiest Guy, Arial, sans-serif',
        maxWidth: '760px',
        marginLeft: '6vw'
        }}>
        <h1 style={{
            fontSize: '76px',
            margin: '0 0 40px 0',
            letterSpacing: '3px',
            lineHeight: '0.95'
        }}>
        Purrfect Match</h1>
        <p style={{
            fontFamily: 'Luckiest Guy, Arial, sans-serif',
            fontSize: '18px',
            lineHeight: '1.6',
            maxWidth: '520px',
            marginTop: '8px'
        }}>
        Answer a few questions about your lifestyle and preferences, and we'll match you with the ideal cat from a local shelter!
        </p>
        <button
            onClick={onStart} // Call the onStart function when the button is clicked
            style={{
                backgroundColor: '#000000',
                color: 'white',
                border: 'none',
                padding: '20px 38px',
                borderRadius: '40px',
                cursor: 'pointer',
                fontSize: '21px',
                marginTop: '26px'
            }}
        >
        Find My Match →
        </button>
    </div>
    );
}

export default Home; // make the Home component available for import in other parts of the application