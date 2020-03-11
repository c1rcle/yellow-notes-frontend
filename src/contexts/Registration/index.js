import React, { createContext, useState } from './node_modules/react';

const RegistrationContext = createContext();

export const RegistrationState = props => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordRepeat: ''
  });

  const [tooltip, setTooltip] = useState({
    emailTooltip: false,
    passwordTooltip: false,
    passwordRepeatTooltip: false
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const { email, password, passwordRepeat } = user;
  const { emailTooltip, passwordTooltip, passwordRepeatTooltip } = tooltip;

  const onTextChanged = e => {
    setTooltips(e.target);
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const setTooltips = target => {
    if (target.validity.patternMismatch || target.validity.typeMismatch) {
      setTooltip({ ...tooltip, [target.id + 'Tooltip']: true });
    } else setTooltip({ ...tooltip, [target.id + 'Tooltip']: false });
  };

  return (
    <RegistrationContext.Provider
      value={{
        email,
        password,
        passwordRepeat,
        emailTooltip,
        passwordTooltip,
        passwordRepeatTooltip,
        termsAccepted,
        setTermsAccepted,
        onTextChanged
      }}>
      {props.children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;
