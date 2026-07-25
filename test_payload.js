const { convertToModelMessages } = require('ai');
const messages = [{"parts":[{"type":"text","text":"Tell me about your work experience."}],"id":"xyGAh32Vho2jYgmN","role":"user"}];
const res = convertToModelMessages(messages);
console.log(res instanceof Promise ? "Promise" : "Not a Promise");
