"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAuth } from "@clerk/nextjs";
import { format, parseISO } from "date-fns";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
const devUrl = process.env.NEXT_PUBLIC_BASE_URL_DEV;

const QRModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [validUntil, setValidUntil] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useAuth();

  const onGenerate = async () => {
    if (!validUntil) {
      toast.error("Please provide an expiration date for the QR code.");
      return;
    }

    setIsLoading(true);
    try {
      const token = await getToken();
      const formattedValidUntil = format(parseISO(validUntil), "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"); // Correct format
      const response = await axios.post(`${devUrl}/qr/generate`, { validUntil: formattedValidUntil }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("QR Code generated successfully!");
      console.log("QR Code Response:", response.data); // Log the full response
    } catch (error) {
      console.error("Error generating QR Code:", error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.error || "Failed to generate QR Code."); // Display backend error
      } else {
        toast.error("Failed to generate QR Code.");
      }
    } finally {
      setIsLoading(false);
      setIsOpen(false);
      setValidUntil(""); // Clear the input after successful generation or error
    }
  };

  return (
    <>
      <button
        className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        {"Generate QR Code"}
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate a QR Code</DialogTitle>
            <DialogDescription className="text-gray-500 text-center">
              Set the validity period for the QR code.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-4">
            <div>
              <label className="block text-gray-400 text-sm mb-1">Valid Until</label>
              <input
                type="datetime-local"
                className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-indigo-500"
                value={validUntil}
                onChange={(e) => setValidUntil(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              disabled={isLoading}
              onClick={onGenerate}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              {isLoading ? "Generating..." : "Generate"}
            </Button>
            <DialogClose asChild>
              <Button
                disabled={isLoading}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Cancel
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QRModalButton;