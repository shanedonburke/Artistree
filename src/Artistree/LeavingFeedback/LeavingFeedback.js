import React from 'react';
import { useLocation } from 'react-router-dom';
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";


import './LeavingFeedback.css'
const imgLink =
    "https://cf-images.us-east-1.prod.boltdns.net/v1/static/854081161001/e7c0a8f2-4b0b-40e7-858f-47de21dc8dcb/794143eb-4285-434e-8a08-820dab64c65b/1280x720/match/image.jpg";

export default function LeavingFeedback() {
    const { state } = useLocation();

    return (
        <div className="LeavingFeedback-root">
            <div className="title-bar">
                <div>Critique</div>
            </div>

            <div className="LeavingFeedback-page-body">
                <div style={{ padding: 14 }} className="App">
                    <h1>Comments</h1>
                    <div style={{ textAlign: 'left' }}><img src={state.image} width="600" height="600" alt="MonkeImage" /></div>
                    <Paper style={{ padding: "10px 20px", marginTop: 10, width: "500px" }}>
                        <Grid container wrap="wrap" spacing={2} justifyContent="flex-end" alignContent="flex-end" alignItems="flex-e">
                            <Grid item>
                                <Avatar alt="Remy Sharp" src={imgLink} />
                            </Grid>
                            <Grid justifyContent="left" item xs zeroMinWidth>
                                <h4 style={{ margin: 0, textAlign: "left" }}>He Buddy Man</h4>
                                <p style={{ textAlign: "left" }}>
                                    Wow great image! Reminds me of the time when I was drawing theoretical chicken art!{" "}
                                </p>
                                <p style={{ textAlign: "left", color: "gray" }}>
                                    posted 54 minutes ago
            </p>
                            </Grid>
                        </Grid>
                        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                    </Paper>

                </div>


            </div>

        </div>
    );
}