"use client";

import { Button } from "@/components/ui/button";
import { useAccount, useBalance, useDisconnect } from "wagmi";

export default function Balance() {
  const { address } = useAccount();
  const { data } = useBalance({ address });
  const { disconnect } = useDisconnect();

  const balance = data ? data.value.toString() : "0";

  return (
    <div className="w-full md:max-w-[85%] mx-auto  lg:px-8">
      <div className="border rounded-xl py-5 px-4 sm:px-6">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-2xl sm:text-3xl font-semibold">
              Account Details
            </p>
            <Button
              className="bg-zinc-900 font-medium text-gray-400 w-full sm:w-auto"
              disabled={!address}
              onClick={() => disconnect()}
            >
              Disconnect
            </Button>
          </div>
          <div className="space-y-2 flex flex-col items-start bg-zinc-900 rounded-xl p-3 w-full">
            {address ? (
              <>
                <p className="text-base sm:text-lg text-gray-400">Address :</p>
                <p className="text-base sm:text-lg break-all">
                  {address || "No Address Connected"}
                </p>
                <p className="text-base sm:text-lg text-gray-400">Balance :</p>
                <p className="text-base sm:text-lg">{balance} wei</p>
              </>
            ) : (
              <p className="text-base sm:text-lg text-gray-400">
                No Account Connected
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
