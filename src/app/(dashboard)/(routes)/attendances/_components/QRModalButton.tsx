"use client";

import { Dialog, DialogContent, DialogClose, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import showErrorToast from "@/utils/toasts/showErrorToast";
import { showPromiseToast } from "@/utils/toasts/showPromiseToast";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useState } from "react";

const devUrl = process.env.NEXT_PUBLIC_BASE_URL_DEV;

const QRModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useAuth();

  const onGenerate = async () => {
    setIsLoading(true);

    try {
      const token = await getToken();
      const response = await axios.post(
        `${devUrl}/qr/regenerate`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.status === 200) {
        const promise = Promise.resolve(response.data);

        showPromiseToast(promise, { loading: "Regenerating QR Code...", success: "QR Code regenerated successfully!", error: "Failed to regenerate QR Code." });
        console.log("QR Code Response:", response.data);
      } else {
        showErrorToast({ message: "Failed to regenerate QR Code" });
        console.error("Failed to regenerate QR Code");
      }

    } catch (error) {
      showErrorToast({ message: "Failed to regenerate QR Code" });
      console.error("Error regenerating QR Code:", error);
    }
    finally {
      setIsLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        {"Regenerate QR Code"}
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Regenerate QR Code</DialogTitle>
            <DialogDescription className="text-gray-600 text-center">
              Are you sure you want to regenerate the QR code? The current code will be invalidated.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center gap-2">
            <div className="flex flex-col gap-2">
              <button
                disabled={isLoading}
                onClick={onGenerate}
                className="bg-teal-600 hover:bg-teal-700 text-white self-end rounded-full px-4 py-1"
              >
                {isLoading ? "Regenerating..." : "Regenerate"}
              </button>
              <DialogClose asChild>
                <button
                  disabled={isLoading}
                  className="bg-none text-black pr-2 self-center hover:text-gray-500 hover:underline text-sm"
                >
                  Cancel
                </button>
              </DialogClose>
            </div>
          </div>
          <div className="flex justify-center">
            <DialogFooter className="text-gray-400 text-xs">
              Do this only if there is no qr code or the current qr code is not working.
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QRModalButton;
