import React from 'react';
import { CitiLogo, Container, CustomText } from './style';

const App: React.FC = () => (
  <Container>
    <CitiLogo />
    <CustomText>
      Made with &lt; &#x0002F; &gt; and 🩵 by CITi
    </CustomText>
  </Container>
);

export default App;
