import { Button } from "../../components";
import { useMetamaskConnection } from "../../hooks";
import "./styles.scss";

export const ConnectWalletPopup = () => {
  const { connect } = useMetamaskConnection();
  return (
    <div className="connect_wallet_popup">
      <div className="connect_wallet_popup__content">
        <h3>You are not connected</h3>
        <Button onClick={connect}>Connect to the wallet</Button>
      </div>
    </div>
  );
};
