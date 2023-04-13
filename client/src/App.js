import { GoogleOAuthProvider } from "@react-oauth/google";
import Messanger from "./components/Messanger";
import AccountProvider from "./context/AccountProvider";
function App() {
  const clientId =
    "899537591657-ur9hv19s6034l7pruv25u2sjs5e6jf5i.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
