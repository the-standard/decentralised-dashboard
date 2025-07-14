import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { InactivityProvider } from './components/InactivityControl';

import WalletProvider from './components/WalletProvider';
import ThemeHandler from './components/ThemeHandler';
import DisconnectHandler from './components/DisconnectHandler';
import GuestHandler from './components/GuestHandler';
import DashLayout from "./components/ui/DashLayout";
import Home from './pages/Home';
import Vaults from './pages/vaults/Vaults';
import Vault from './pages/vault/Vault';
import VaultMerkl from './pages/vault/VaultMerkl';
import TstStaking from './pages/tst-staking/TstStaking';
import Dex from './pages/dex/Dex';
import Redemptions from './pages/redemptions/Redemptions';

import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <InactivityProvider
        sleepAfter={3 * 60 * 1000}
        gracePeriod={1 * 60 * 1000}
      >
        <ThemeHandler>
          <WalletProvider>
            <GuestHandler>
              <DisconnectHandler>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="vaults" element={<DashLayout><Vaults /></DashLayout>} />
                  <Route path="vault/:vaultType/:vaultId" element={<DashLayout><Vault /></DashLayout>} />
                  <Route path="vault/:vaultType/:vaultId/merkl" element={<DashLayout><VaultMerkl /></DashLayout>} />
                  <Route path="staking-pool" element={<DashLayout><TstStaking /></DashLayout>} />
                  <Route path="dex/*" element={<DashLayout><Dex /></DashLayout>} />
                  <Route path="redemptions" element={<DashLayout><Redemptions /></DashLayout>} />
                  <Route path="*" element={<Home/>} />
                </Routes>
              </DisconnectHandler>
            </GuestHandler>
          </WalletProvider>
        </ThemeHandler>
      </InactivityProvider>
    </QueryClientProvider>
  )
}

export default App;
