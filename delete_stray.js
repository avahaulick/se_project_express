const fs = require('fs');
const files = [
  'postman/collections/WTWR API Test Suite/New Request.request.yaml',
  'postman/collections/WTWR API Test Suite/New Request-1.request.yaml'
];
files.forEach(f => {
  try {
    fs.unlinkSync(f);
    console.log('Deleted:', f);
  } catch (e) {
    console.log('Error:', f, e.message);
  }
});
