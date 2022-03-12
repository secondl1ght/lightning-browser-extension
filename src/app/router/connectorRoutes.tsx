import ConnectLnd from "../screens/Onboard/ConnectLnd";
import ConnectLndHub from "../screens/Onboard/ConnectLndHub";
import ConnectLnbits from "../screens/Onboard/ConnectLnbits";
import ConnectEclair from "../screens/Onboard/ConnectEclair";
import NewWallet from "../screens/Onboard/NewWallet";
import ConnectMyNode from "../screens/Onboard/ConnectMyNode";

export default [
  { path: "lnd", element: <ConnectLnd /> },
  { path: "lnd-hub", element: <ConnectLndHub /> },
  { path: "lnbits", element: <ConnectLnbits /> },
  { path: "eclair", element: <ConnectEclair /> },
  { path: "create-wallet", element: <NewWallet /> },
  { path: "mynode", element: <ConnectMyNode /> },
];
