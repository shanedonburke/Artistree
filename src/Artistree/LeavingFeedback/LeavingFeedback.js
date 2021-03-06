import React from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  TextField,
  Divider,
  Avatar,
  Grid,
  Paper,
  Modal,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./LeavingFeedback.css";
import { Button } from "reactstrap";
const imgLink =
  "https://cf-images.us-east-1.prod.boltdns.net/v1/static/854081161001/e7c0a8f2-4b0b-40e7-858f-47de21dc8dcb/794143eb-4285-434e-8a08-820dab64c65b/1280x720/match/image.jpg";
const imgLink2 =
  "https://preview.redd.it/cfd0qlpofcb01.jpg?auto=webp&s=b2b0b996ec334bcddc3088037130e9dba186ded0";
const imgLink3 = "https://i.redd.it/kc9sfn0jgnwz.jpg";
const imgLink4 = "https://cyberpunk2077.wiki.fextralife.com/file/Cyberpunk-2077/johnny-silverhand-npc-cyberpunk-2077-wiki-guide.png";
const imgLink5 = "https://i.redd.it/whgfzo54b62z.jpg"

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "1000px",
    height: "600px",
    backgroundColor: "#f7e9d6",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "calc(50% - 300px)",
    left: "calc(50% - 500px)",
    borderRadius: "10px",
  },
}));

export default function LeavingFeedback() {
  const { state } = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const classes = useStyles();

  return (
    <div className="LeavingFeedback-root">
      <Modal open={modalIsOpen}>
        <div className={classes.paper}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <div className="report-col">
                <h4>Reason for reporting:</h4>
                <RadioGroup>
                  <FormControlLabel
                    value="nudity"
                    control={<Radio />}
                    label="Nudity"
                  />
                  <FormControlLabel
                    value="unoriginal"
                    control={<Radio />}
                    label="Unoriginal"
                  />
                  <FormControlLabel
                    value="offensive"
                    control={<Radio />}
                    label="Offensive/Derogatory"
                  />
                  <FormControlLabel
                    value="spam"
                    control={<Radio />}
                    label="Spam"
                  />
                  <FormControlLabel
                    value="illegal"
                    control={<Radio />}
                    label="Illegal content"
                  />
                  <div style={{ display: "flex" }}>
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other:"
                    />
                    <TextField variant="outlined" size="small" placeholder="Reason"></TextField>
                  </div>
                </RadioGroup>
              </div>
              <div className="report-col">
                <h4 style={{ marginBottom: "20px" }}>
                  Explain your reasoning:
                </h4>
                <TextField multiline rows={20} variant="outlined" style={{width: "100%"}} placeholder="Write a few sentences explaining why you are reporting this submission" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button
                style={{ width: "100px", backgroundColor: "#969696" }}
                onClick={() => setModalIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                style={{ width: "100px", backgroundColor: "red" }}
                onClick={() => setModalIsOpen(false)}
              >
                Report
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      <div className="title-bar">
        <div>Critique</div>
      </div>

      <div className="LeavingFeedback-page-body">
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
                  height: "570px",
                  textAlign: "left",
                }}
              >
                <img
                  src={state.image}
                  alt="dynamo"
                  style={{
                    width: "570px",
                    height: "100%",
                  }}
                />
              </Paper>
              <div style={{ display: "flex" }}>
                <Button
                  className="heart-button"
                  onClick={() => setLiked(!liked)}
                >
                  <span className="material-icons heart-icon">
                    {liked ? "favorite" : "favorite_border"}
                  </span>
                </Button>
                <Button
                  style={{ width: "100px", height: "42px", backgroundColor: "red" }}
                  onClick={() => setModalIsOpen(!modalIsOpen)}
                >
                  Report
                </Button>
              </div>
            </div>

            <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
              <Paper
                style={{
                  padding: "10px 20px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <h4>
                  Critique this artwork. Be sure to follow the Critiquing 
                  <Link to="/eula"><a href="#"> Guidelines</a>!</Link>
                </h4>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div style={{ margin: "20px 0" }}>
                    <TextField
                      id="standard-basic"
                      label="Leave a Critique"
                      multiline
                      rows={4}
                      variant="outlined"
                      fullWidth
                    />
                    <Button
                      color="primary"
                      style={{ marginTop: "10px", float: "right" }}
                    >
                      Submit
                    </Button>
                  </div>

                  <div style={{ overflowY: "auto", height: "100%" }}>
                    <Grid
                      container
                      wrap="nowrap"
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
                      wrap="nowrap"
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
                          R1TCH13R0CKS
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
                      wrap="nowrap"
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
                          BirdsArentReal42
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

                    <GridDivider />

                    <Grid
                      container
                      wrap="nowrap"
                      spacing={2}
                      style={{ textAlign: "right", height: "110px" }}
                    >
                      <Grid item>
                        <Avatar
                          alt="ELON"
                          src={imgLink4}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </Grid>

                      <Grid item xs zeroMinWidth>
                        <h4
                          style={{ margin: 0, textAlign: "left", color: "red" }}
                        >
                          SlamHammy
                        </h4>
                        <p style={{ textAlign: "left" }}>
                          THIS IMAGE SLAPS!!!!!
                          {" "}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                          posted 12 days ago
                        </p>
                      </Grid>
                    </Grid>

                    <GridDivider />

                    <Grid
                      container
                      wrap="nowrap"
                      spacing={2}
                      style={{ textAlign: "right", height: "110px" }}
                    >
                      <Grid item>
                        <Avatar
                          alt="ELON"
                          src={imgLink5}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </Grid>

                      <Grid item xs zeroMinWidth>
                        <h4
                          style={{ margin: 0, textAlign: "left", color: "red" }}
                        >
                          SHLOPJALOPPY
                        </h4>
                        <p style={{ textAlign: "left" }}>
                          I'm not particularly a fan of this... However, the shading is great. +1
                          {" "}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                          posted 12 days ago
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
