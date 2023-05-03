import { createContext } from "react";

export const Keybinds: { [key: string]: () => void } = {};

export const KeybindsContext = createContext(Keybinds);
