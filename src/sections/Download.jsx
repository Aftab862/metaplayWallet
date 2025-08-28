import React from "react";
import MobileDownload from "../components/MobileDownload";
import WebDownload from "../components/WebDownload";
import { Alert, Snackbar } from "@mui/material";

const Download = () => {
    const [snackbars, setSnackbars] = React.useState([]);

    const handleClick = () => {
        setSnackbars((prev) => {
            // limit max 3 snackbars
            const newSnackbars = [...prev, { id: Date.now(), message: "Coming Soon!" }];
            if (newSnackbars.length > 3) {
                newSnackbars.shift(); // remove oldest
            }
            return newSnackbars;
        });
    };

    const handleClose = (id) => (event, reason) => {
        if (reason === "clickaway") return;
        setSnackbars((prev) => prev.filter((snack) => snack.id !== id));
    };

    return (
        <>
            {snackbars.map((snack) => (
                <Snackbar
                    key={snack.id}
                    open
                    autoHideDuration={3000}
                    onClose={handleClose(snack.id)}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    <Alert onClose={handleClose(snack.id)} variant="filled" severity="info" sx={{ width: "100%" }}>
                        {snack.message}
                    </Alert>
                </Snackbar>
            ))}

            <MobileDownload handleClick={handleClick} />
            <WebDownload handleClick={handleClick} />
        </>
    );
};

export default Download;
