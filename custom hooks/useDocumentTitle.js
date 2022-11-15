import React, { useEffect } from "react";

function useDocumentTitle(titleString) {
    useEffect(() => {
        document.title = titleString;
    }, []);
}

export { useDocumentTitle };