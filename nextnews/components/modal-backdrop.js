"use client";
import { useRouter } from "next/navigation";

// Step 2: Handle Backdrop
export default function ModalBackdrop() {
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.back()} className="modal-backdrop"></div>
    </>
  );
}
