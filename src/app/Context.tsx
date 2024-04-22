"use client";
import { createContext, useState, ReactNode, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import PopUp from "@/components/admin/PopUp";

type ContextType = {
  isAdmin: boolean;
  setPopUp: Dispatch<SetStateAction<ReactNode>>;
};

export const context = createContext<ContextType | null>(null);

export function Context({
  isAdmin,
  children,
}: {
  isAdmin: boolean;
  children: React.ReactNode;
}) {

  const [popUp, setPopUp] = useState<ReactNode | null>(null);

  useEffect(()=>{
    document.body.style.overflow = popUp?'hidden':'auto';
  },[popUp])

  return (
    <context.Provider value={{ isAdmin, setPopUp }}>
      {children}
      {popUp ? <PopUp>{popUp}</PopUp> : null}
    </context.Provider>
  );
}
