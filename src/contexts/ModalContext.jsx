import { createContext, useContext, useState } from "react";

export const ModalContext = createContext({ connectWalletPopup: false });

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({ connectWalletPopup: false });

  return (
    <ModalContext.Provider value={{ modals, setModals }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
