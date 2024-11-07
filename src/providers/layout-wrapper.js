"use client";
import { useLoading } from "@/app/loading-context";
import { useEffect } from "react";

export default function LayoutWrapper({ children }) {
  const { isLoading, setIsLoading } = useLoading();
  useEffect(() => {
    const checkLoadingStatus = () => {
      if (document.readyState === "complete") {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    checkLoadingStatus();
    window.addEventListener("load", checkLoadingStatus);
    return () => {
      window.removeEventListener("load", checkLoadingStatus);
    };
  }, [setIsLoading]);
  return children;
}
