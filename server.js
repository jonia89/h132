const app = require("./app");
const port = require("./port")
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
