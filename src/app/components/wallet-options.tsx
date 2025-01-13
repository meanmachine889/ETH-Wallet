"use client";

import { Button } from "@/components/ui/button";
import { useConnect } from "wagmi";

export default function WalletOptions() {
  const { connectors, connect } = useConnect();
  return (
    <div className="flex gap-3 items-center justify-between w-[80%] bg-zinc-900 p-5 rounded-xl">
      <p className="text-xl ">Connect Wallet</p>
      <div className="flex gap-3">
        {connectors.map((connector) => (
          <Button className="bg-zinc-800 hover:bg-zinc-700 text-gray-400" key={connector.uid} onClick={() => connect({ connector })}>
            {connector.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
