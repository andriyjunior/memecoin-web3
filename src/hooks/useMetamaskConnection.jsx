import { useCallback, useEffect, useState } from "react";
import { useModalContext } from "../contexts/ModalContext";
import { useWeb3React } from "@web3-react/core";

const key = "address_metamask";

const saveToLocalStorage = (address) => {
  localStorage.setItem(key, address);
};

const removeFromLocalStorage = () => {
  localStorage.removeItem(key);
};

const getAddressFromLocalStorage = () => {
  return localStorage.getItem(key);
};

export const useMetamaskConnection = () => {
  const { setModals } = useModalContext();

  const [isLoading] = useState(false);

  const { connector, account, hooks } = useWeb3React();

  const isActive = hooks.useSelectedIsActive(connector);

  const connect = useCallback(async () => {
    if (connector) {
      try {
        await connector.activate();
        const accounts = await connector.provider.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        if (account) {
          saveToLocalStorage(account);
        }
        setModals({ connectWalletPopup: false });
      } catch (error) {
        console.log(error);
      }
    }
  }, [connector, setModals]);

  const disconnect = () => {
    if (isActive) {
      if (connector?.deactivate) {
        void connector.deactivate();
      } else {
        void connector.resetState();
      }
      removeFromLocalStorage();
    }
  };

  useEffect(() => {
    const savedAccount = getAddressFromLocalStorage();

    if (savedAccount) {
      connect();
      return;
    }

    setModals({ connectWalletPopup: true });
  }, [account, connect, isActive, setModals]);

  return { connect, disconnect, account, isLoading };
};
