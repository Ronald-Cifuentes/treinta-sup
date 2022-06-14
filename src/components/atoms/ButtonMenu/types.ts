import React from "react";
import { MenuItems } from "../SpecialLineTabs/types";

export interface PropTypesButtonMenu {
    onChange?: (value: React.SetStateAction<number>) => void;
    optionsMenu?: Array<MenuItems>;
    setAnchorEl?: (value: React.SetStateAction<null | HTMLButtonElement>) => void;
    anchorEl?: HTMLButtonElement | null
}