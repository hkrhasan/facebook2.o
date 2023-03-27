const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//

// Http event
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send({ message: "Hello from Firebase!" });
});

// Firestore event

exports.signupUser = functions.firestore
  .document("user1/{docId}")
  .onCreate((snapshot, context) => {
    // Grab the current value of what was written to Firestore.
    const original = snapshot.data().original;

    // Access the parameter `{documentId}` with `context.params`
    functions.logger.log("Uppercasing", context.params.docId, original);
  });
