"use client";

import Balance from "./components/balance";
import { config } from "../lib/config";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WalletOptions from "./components/wallet-options";
import Transaction from "./components/txn";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="font-[family-name:var(--font-poppins)] flex flex-col max-w-screen min-h-[100vh] p-9 items-center justify-start gap-9">
          <WalletOptions />
          <Balance />
          <Transaction />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
