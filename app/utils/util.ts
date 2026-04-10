'use client'

import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";


export function useMintab() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isMD = useMediaQuery("(min-width: 768px)");

    return mounted ? isMD : false;
    // const isMD = useMediaQuery("(min-width: 768px)");
    // return isMD;
}


//   export isMD;   