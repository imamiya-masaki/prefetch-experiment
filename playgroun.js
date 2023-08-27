const json = {
   data: []
}

const createBigJson = () => {
  const num = 1000000;
  for (let i = 0; i < num; i++) {
    json.data.push({
      "name1": "hogehoge",
      "name2": "fugafuga"
    })
  }
}

const fs = require('fs')
createBigJson()
fs.writeFileSync("./big.json", JSON.stringify(json))