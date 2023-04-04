import React from 'react';
import TemplateLoginScreen from '../templates/TemplateLoginScreen';
import OrganismLoginScreen from '../organisms/OrganismLoginScreen';

const PageLoginScreen = () => {
  const onLogin = params => {
    console.log('Login button pressed');
  };

  return (
    <TemplateLoginScreen>
      <OrganismLoginScreen onLogin={onLogin} />
    </TemplateLoginScreen>
  );
};

export default PageLoginScreen;
