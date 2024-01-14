const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
  // write code here
	// dont change function name

try {   
    const content = await fs.readFile(filename, "utf-8");
    return content;
  } catch (error) {
    console.error("Error", error.message);
    throw error;
  }
};


module.exports =  reader ;
