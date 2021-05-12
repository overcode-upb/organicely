import * as functions from "firebase-functions";

export const redirectOauth = functions.https.onRequest((req, res) => {
  res.redirect("https://www.google.com/");
});
