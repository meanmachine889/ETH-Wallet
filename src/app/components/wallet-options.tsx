"use client"

import { Button } from "@/components/ui/button"
import { useConnect } from "wagmi"

export default function WalletOptions() {
  const { connectors, connect } = useConnect()

  return (
    <div className="w-full md:max-w-[85%] mx-auto lg:px-8">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between w-full bg-zinc-900 p-4 sm:p-5 rounded-xl">
        <p className="text-lg sm:text-xl font-medium">Connect Wallet</p>
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          {connectors.map((connector) => (
            <Button
              className="bg-zinc-800 hover:bg-zinc-700 text-gray-400 flex-grow sm:flex-grow-0"
              key={connector.uid}
              onClick={() => connect({ connector })}
            >
              {connector.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

