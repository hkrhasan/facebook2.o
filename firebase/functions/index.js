const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//

// Http event
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send({ message: "Hello from Firebase!" });
// });

// Firestore event

exports.signupUser = functions.firestore
  .document("user1/{docId}")
  .onCreate(async (snapshot, context) => {
    // Grab the current value of what was written to Firestore.
    const data = snapshot.data();

    const userRecord = await admin.auth().createUser({
      email: data.email,
      password: data.password,
      displayName: data.firstName,
      uid: context.params.docId,
    });

    functions.logger.log("user created ", userRecord.uid);
  });
