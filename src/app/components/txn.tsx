"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { parseEther } from "viem"
import { useSendTransaction } from "wagmi"

export default function Transaction() {
  const [tokenAmount, setTokenAmount] = useState("")
  const [receiverAddress, setReceiverAddress] = useState("")

  const { data: hash, sendTransaction } = useSendTransaction()

  async function sendTx() {
    if (receiverAddress.startsWith("0x")) {
      setReceiverAddress(receiverAddress.slice(2))
    }
    sendTransaction({
      to: `0x${receiverAddress}`,
      value: parseEther(tokenAmount),
    })
  }

  return (
    <div className="w-full md:max-w-[85%] mx-auto sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6">
      <div className="w-full border rounded-xl p-4 sm:p-6">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-2xl sm:text-3xl font-semibold">Transfer Ethereum</p>
            <Button className="bg-zinc-900 text-gray-400 font-medium w-full sm:w-auto" onClick={sendTx}>
              Send
            </Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address" className="text-base sm:text-lg font-normal text-zinc-500">
              Receiver Address
            </Label>
            <Input
              id="address"
              onChange={(e) => setReceiverAddress(e.target.value)}
              className="placeholder:text-base sm:placeholder:text-lg h-12 sm:h-16 placeholder:text-gray-500"
              placeholder="Enter receiver's address"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-base sm:text-lg font-normal text-zinc-500">
              Amount
            </Label>
            <Input
              id="amount"
              onChange={(e) => setTokenAmount(e.target.value)}
              className="placeholder:text-base sm:placeholder:text-lg h-12 sm:h-16 placeholder:text-gray-500"
              placeholder="Enter the amount of ETH"
            />
          </div>
        </div>
      </div>
      {hash && (
        <div className="w-full bg-zinc-900 border rounded-xl p-4 sm:p-6">
          <p className="text-2xl sm:text-3xl font-semibold">Recent Transaction Hash</p>
          <p className="text-base sm:text-lg mt-4 break-all">{hash}</p>
        </div>
      )}
    </div>
  )
}

