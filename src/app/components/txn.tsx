"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { parseEther } from "viem";
import { useSendTransaction } from "wagmi";

export default function Transaction() {

  const [tokenAmount, setTokenAmount] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");

  const { data:hash, sendTransaction } = useSendTransaction();

  async function sendTx(){
    if(receiverAddress.startsWith("0x")){
      setReceiverAddress(receiverAddress.slice(2));
    }
    sendTransaction({
      to: `0x${receiverAddress}`,
      value: parseEther(tokenAmount),
    });
  }

  return (
    <div className="w-[100%] flex flex-col items-center justify-center gap-3">
      <div className="w-[80%] h-fit px-5 border rounded-xl py-5">
      <div className="space-y-6 h-fit">
        <div className="flex justify-between w-[100%]">
          <p className="self-start text-3xl">Transfer Ethereum</p>
          <Button
            className="bg-zinc-900 text-gray-400 font-medium"
            onClick={sendTx}
          >
            Send
          </Button>
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="address"
            className="text-lg font-normal text-zinc-500"
          >
            Receiver Address
          </Label>
          <Input
            id="address"
            onChange={(e) => setReceiverAddress(e.target.value)}
            className="placeholder:text-lg h-16 placeholder:text-gray-500"
            placeholder="Enter receiver's address"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount" className="text-lg font-normal text-zinc-500">
            Amount
          </Label>
          <Input
            id="amount"
            onChange={(e) => setTokenAmount(e.target.value)}
            className="placeholder:text-lg h-16 placeholder:text-gray-500"
            placeholder="Enter the amount of ETH"
          />
        </div>
      </div>
    </div>
    {hash && (
      <div className="w-[80%] h-fit px-5 bg-zinc-900 border rounded-xl py-5 mt-5">
        <p className="text-3xl">Recent Transaction Hash</p>
        <p className="text-lg mt-5">{hash}</p>
      </div>
    )}
    </div>
  );
}
