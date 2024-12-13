import React from 'react';
import InfoPersonal from './componet/InfoPersonal';
import Estudios from './componet/Estudios';
import Herramientas from './componet/Herramientas';
import Deportes from './componet/Deportes';

const App = () => {
  return (
      <div style={{ 
          background: 'linear-gradient(135deg, #ff9966, #ff5e62)',
          padding: '20px', 
          minHeight: '100vh' 
      }}>
          <InfoPersonal />
          <Estudios />
          <Herramientas />
          <Deportes />
      </div>
  );
};

export default App;
