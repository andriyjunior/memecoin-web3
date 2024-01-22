import { AnimatePresence } from "framer-motion";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages";
import { ConnectWalletPopup } from "./pages/modals/connectWalletPopup";
import { useModalContext } from "./contexts/ModalContext";
import { Web3ReactProvider, initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";

const metamask = initializeConnector((actions) => new MetaMask({ actions }));

const connectors = [metamask];

function App() {
  // const { modals } = useModalContext();

  return (
    <Web3ReactProvider connectors={connectors}>
      <AnimatePresence>
        <Layout>
          <Home />
        </Layout>
        {/* {modals.connectWalletPopup && <ConnectWalletPopup />} */}
      </AnimatePresence>
    </Web3ReactProvider>
  );
}

export default App;
