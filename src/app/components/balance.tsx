"use client";

import { Button } from "@/components/ui/button";
import { useAccount, useBalance, useDisconnect } from "wagmi";

export default function Balance() {
  const { address } = useAccount();
  const { data } = useBalance({ address });
  const { disconnect } = useDisconnect();

  const balance = data ? data.value.toString() : "0";

  return (
    <div className="w-[80%] h-fit px-5 border rounded-xl py-5">
      <div className="space-y-6 h-fit">
        <div className="flex justify-between w-[100%]">
        <p className="self-start text-3xl">Account Details</p>
          <Button className="bg-zinc-900 font-medium text-gray-400" disabled={!address} onClick={() => disconnect()}>Disconnect</Button>
        </div>
        <div className="space-y-2 flex flex-col items-start bg-zinc-900 rounded-xl p-3">
          {address ? (
            <>
              <p className="text-lg text-gray-400">Address :</p>
              <p className="text-lg">{address || "No Address Connected"}</p>
              <p className="text-lg text-gray-400">Balance :</p>
              <p className="text-lg">{balance} wei</p>
            </>
          ) : (
            <>
              <p className="text-lg text-gray-400">No Account Connected</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
