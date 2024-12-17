import React from 'react';

const Deportes = () => {
    return (
        <div>
            <h2>Galería de Deportes Favoritos</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img 
                        src="/imagenes/futbol_sala.jpeg" 
                        alt="Deporte 1" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Fútbol</p>
                </div>
                <div>
                    <img 
                        src="/imagenes/basketball.webp" 
                        alt="Deporte 2" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Baloncesto</p>
                </div>
                <div>
                    <img 
                        src="/imagenes/ecuavoley.jpg" 
                        alt="Deporte 3" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Ecuavolley</p>
                </div>
            </div>
        </div>
    );
};

export default Deportes;