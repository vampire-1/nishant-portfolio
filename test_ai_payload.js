const { convertToModelMessages } = require('ai');
try {
  convertToModelMessages({ text: "Hello" });
} catch (e) {
  console.log("Error 1:", e.message);
}
try {
  convertToModelMessages(undefined);
} catch (e) {
  console.log("Error 2:", e.message);
}
