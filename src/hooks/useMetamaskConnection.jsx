import { useCallback, useEffect, useState } from "react";
import { useModalContext } from "../contexts/ModalContext";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";

import { initializeConnector, Web3ReactHooks } from "@web3-react/core";
import { Connector, Web3ReactStore } from "@web3-react/types";

const key = "address_metamask";

const saveToLocalStorage = (address) => {
  localStorage.setItem(key, address);
};

const removeToLocalStorage = () => {
  localStorage.removeItem(key);
};

const getAddressFromLocalStorage = () => {
  return localStorage.getItem(key);
};

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

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

  useEffect(() => {
    const savedAccount = getAddressFromLocalStorage();

    if (savedAccount) {
      connect();
      return;
    }

    setModals({ connectWalletPopup: true });
  }, [account, connect, isActive, setModals]);

  return { connect, account, isLoading };
};
