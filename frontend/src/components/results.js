import {useState, useEffect} from 'react';

function CatCard({cat}) {
    
    return (
        <div style={{ 
            border: '1px solid #ccc', 
            borderRadius: '5px', 
            padding: '10px', 
            marginBottom: '10px',
            }}>
            {cat.image && (
                <img 
                src={cat.image}
                alt={cat.breed}
                style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '5px', 
                    marginBottom: '10px' 
                }}
                />
            )}
            <div>
                <h3>{cat.name} - {cat.breed}</h3>
                <p><strong>Age: {cat.age}</strong></p>
                <p><strong>Energy Level: {cat.energyLevel}</strong></p>
                <p><strong>Good with: {cat.goodWith.join(', ')}</strong></p>
                <p><strong>Personality: {cat.personality.join(', ')}</strong></p>
                <p><strong>Shelter: {cat.shelter}</strong></p>
                <p>{cat.description}</p>
            </div>
        </div>
    );
}

function Results({cats, onRestart}) {
    if (cats.length === 0) {
    return (
        <div>
            <h2>Unfortunately, no matches were found😿</h2>
            <p>If you'd like to try again and adjust your preferences, click the button below.</p>
            <button 
                onClick={onRestart}
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
                Try Again
            </button>
        </div>
    );
    }

    return (
        <div>
            <h2>Your Purrfect Matches!😻</h2>
            {cats.map(cat => (
                <CatCard key={cat._id} cat={cat} />
            ))}
            <button 
                onClick={onRestart}
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
                Start Over →
            </button>    
        </div>
    );
}

export default Results; // make the Results component available for import in other parts of the application