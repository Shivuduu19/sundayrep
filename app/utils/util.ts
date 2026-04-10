'use client'

import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";


export function useMintab() {

    const [isMD, setIsMD] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia("(min-width: 768px)");
        setIsMD(mql.matches);

        const handler = (e: MediaQueryListEvent) => setIsMD(e.matches);
        mql.addEventListener("change", handler);

        return () => mql.removeEventListener("change", handler);
    }, []);

    return isMD;
}


//   export isMD;   