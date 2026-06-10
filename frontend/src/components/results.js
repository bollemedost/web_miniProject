function CatCard({cat}) { // The CatCard component renders the information about a single cat in a card format
    
    return ( // Render the cat's image and details in a styled card layout
        <div style={{ 
            backgroundColor: '#f79a17',
            borderRadius: '5px', 
            padding: '12px',
            fontSize: '18px', 
            fontFamily: 'Luckiest Guy, Arial, sans-serif',
            height: '100%',
            boxSizing: 'border-box',
            opacity: '1'
            }}>
            {cat.image && (
                <img 
                src={cat.image}
                alt={cat.breed}
                style={{ 
                    width: '100%', 
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '5px', 
                    marginBottom: '10px' 
                }}
                />
            )}
            <div>
                <h3 style={{
                    fontSize: '23px',
                    margin: '0 0 20px 0',
                    letterSpacing: '1.2px',
                    lineHeight: '0.95'    
                }}
                >{cat.name} - {cat.breed}</h3>
                <p style={{
                    fontSize: '16px',
                    margin: '0 0 8px 0',
                    letterSpacing: '1px',
                }}><strong>Age: {cat.age}</strong></p>
                <p style={{
                    fontSize: '16px',
                    margin: '0 0 8px 0',
                    letterSpacing: '1px',
                }}><strong>Energy Level: {cat.energyLevel}</strong></p>
                <p style={{
                    fontSize: '16px',
                    margin: '0 0 8px 0',
                    letterSpacing: '1px',
                }}><strong>Good with: {cat.goodWith.join(', ')}</strong></p>
                <p style={{
                    fontSize: '16px',
                    margin: '0 0 8px 0',
                    letterSpacing: '1px',
                }}><strong>Personality: {cat.personality.join(', ')}</strong></p>
                <p style={{
                    fontSize: '16px',
                    margin: '0 0 30px 0',
                    letterSpacing: '1px',
                }}><strong>Shelter: {cat.shelter}</strong></p>
                <p style={{
                    fontSize: '16px',
                    margin: '0 0 8px 0',
                    letterSpacing: '0.5px',
                }}>{cat.description}</p>
            </div>
        </div>
    );
}

function Results({cats, onRestart}) { // The Results component renders the list of matched cats or a message if no matches were found, and includes a button to restart the quiz
    if (cats.length === 0) {
    return ( // If no cats were matched, render a message and a button to restart the quiz
        <div style={{ 
                padding: '10px', 
                marginBottom: '10px',
                fontSize: '28px', 
            fontFamily: 'Luckiest Guy, Arial, sans-serif' 
            }}>
            <h2>Unfortunately, no matches were found😿</h2>
            <p>If you'd like to try again and adjust your preferences, click the button below.</p>
            <button 
                onClick={onRestart}
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
                Try Again
            </button>
        </div>
    );
    }

    return ( // If cats were matched, render the list of cats using the CatCard component and include a button to restart the quiz
        <div style={{ 
                padding: '10px', 
                marginBottom: '10px',
                fontSize: '18px', 
                fontFamily: 'Luckiest Guy, Arial, sans-serif'
            }}>
            <h2 style={{
                fontSize: '56px',
                margin: '0 0 28px 0',
                letterSpacing: '3px',
                lineHeight: '0.95'
            }}>
            Your Purrfect Matches!</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '16px'
            }}>
                {cats.map(cat => (
                    <CatCard key={cat._id} cat={cat} />
                ))}
            </div>
            <button 
                onClick={onRestart}
                style={{
                    backgroundColor: '#000000',
                    color: 'white',
                    border: 'none',
                    padding: '20px 38px',
                    borderRadius: '40px',
                    cursor: 'pointer',
                    fontSize: '21px',
                    marginTop: '28px'
                }}
            >
            Start Over →
            </button>    
        </div>
    );
}

export default Results; // make the Results component available for import in other parts of the application