import React from "react";
import {
  TextField,
  Divider,
  Avatar,
  Grid,
  Paper,
} from "@material-ui/core";

import "./ViewingFeedback.css";
import MSlogo from '../Gallery/Memes/birdarms.png'
import { Button } from "reactstrap";
const imgLink =
  "https://cf-images.us-east-1.prod.boltdns.net/v1/static/854081161001/e7c0a8f2-4b0b-40e7-858f-47de21dc8dcb/794143eb-4285-434e-8a08-820dab64c65b/1280x720/match/image.jpg";
const imgLink2 =
  "http://cdn.facilityexecutive.com/wp-content/uploads/bird-x-qb4-strobe.jpg";
const imgLink3 = "https://upload.wikimedia.org/wikipedia/commons/f/fb/Maye_Musk_in_2015.jpg";

export default function ViewingFeedback() {
  return (
    <div className="ViewingFeedback-root">
      <div className="title-bar">
        <div>Critique</div>
      </div>

      <div className="ViewingFeedback-page-body">
        <div style={{ height: "100%", display: "flex" }}>
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "nowrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginRight: "200px",
              }}
            >
              <Paper
                style={{
                  width: "auto",
                  height: "100%",
                  textAlign: "left",
                }}
              >
                <img
                  src={MSlogo}
                  alt="dynamo"
                  style={{
                    width: "570px",
                    height: "100%",
                  }}
                />
              </Paper>
            </div>

            <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
              <Paper
                style={{
                  padding: "10px 20px",
                  width: "100%",
                  height: "100%",
                  paddingTop: "20px"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div style={{ overflowY: "auto", height: "100%", overflowX: "hidden" }}>
                    <Grid
                      container
                      spacing={2}
                      style={{ textAlign: "right", height: "110px" }}
                    >
                      <Grid item>
                        <Avatar
                          alt="ELON"
                          src={imgLink}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </Grid>

                      <Grid item xs zeroMinWidth>
                        <h4
                          style={{ margin: 0, textAlign: "left", color: "red" }}
                        >
                          He Buddy Man
                        </h4>
                        <p style={{ textAlign: "left" }}>
                          Wow great image! Reminds me of the time when I was
                          drawing theoretical chicken art!{" "}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                          posted 54 minutes ago
                        </p>
                      </Grid>
                    </Grid>

                    <GridDivider />

                    <Grid
                      container
                      spacing={2}
                      style={{ textAlign: "right", height: "110px" }}
                    >
                      <Grid item>
                        <Avatar
                          alt="ELON"
                          src={imgLink2}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </Grid>

                      <Grid item xs zeroMinWidth>
                        <h4
                          style={{ margin: 0, textAlign: "left", color: "red" }}
                        >
                          BIRDBLASTER
                        </h4>
                        <p style={{ textAlign: "left" }}>
                          I support your artwork. Consider adding your signature
                          to your artworks.{" "}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                          posted 6 hours ago
                        </p>
                      </Grid>
                    </Grid>

                    <GridDivider />

                    <Grid
                      container
                      wrap="unwrap"
                      spacing={2}
                      style={{ textAlign: "right", height: "110px" }}
                    >
                      <Grid item>
                        <Avatar
                          alt="ELON"
                          src={imgLink3}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </Grid>

                      <Grid item xs zeroMinWidth>
                        <h4
                          style={{ margin: 0, textAlign: "left", color: "red" }}
                        >
                          SheBuddyWoman
                        </h4>
                        <p style={{ textAlign: "left" }}>
                          I believe if you added some lens flare this would be
                          much better...{" "}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                          posted 3 days ago
                        </p>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Paper>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

function GridDivider() {
  return <Divider variant="fullWidth" style={{ margin: "10px 0 20px 0" }} />;
}
