"use client";
import dynamic from "next/dynamic";

const Toaster = dynamic(async () => await import("react-hot-toast"), {
  ssr: false,
});

export default Toaster;