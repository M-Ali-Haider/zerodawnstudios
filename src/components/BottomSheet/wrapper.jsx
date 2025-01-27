"use client";

import BurgerMenuSVG from "@/assets/Header/burgerMenu";
import { Drawer } from "vaul";

export default function BottomSheetWrapper({ children }) {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <BurgerMenuSVG className="w-8 h-8 xs:w-[38px] xs:h-[38px]" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="z-[51] fixed inset-0 bg-black/40" />
        <Drawer.Content className="z-[51] bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div
              aria-hidden
              className="mx-auto w-28 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
            />
            <Drawer.Title className="hidden">Bruh</Drawer.Title>
            <Drawer.Description className="hidden">
              Zero Dawns Bottom Sheet
            </Drawer.Description>
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
