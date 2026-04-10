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


function useIsDesktop() {

    const [isMD, setIsMD] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia("(min-width: 1024px)");
        setIsMD(mql.matches);

        const handler = (e: MediaQueryListEvent) => setIsMD(e.matches);
        mql.addEventListener("change", handler);

        return () => mql.removeEventListener("change", handler);
    }, []);

    return isMD;
}

//   const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");


export { useIsDesktop }
//   export isMD;   