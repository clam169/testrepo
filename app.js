const fs = require("fs");
const file_path = "myfile.txt"

fs.writeFile("myfile.txt", "hello", (err) => {
    if (err) {
        return console.log(err);
    } else {
        fs.readFile("myfile.txt", (encoding = "utf-8"), (err, data) => {
            if (err) {
                return console.log(err);
            } else {
                fs.writeFile("myfile.txt", (data + "hi"), (err) => {
                    if (err) {
                        return console.log(err);
                    } else {
                        fs.readFile("myfile.txt", (encoding = "utf-8"), (err, data) => {
                            if (err) {
                                return console.log(err);
                            } else {
                                console.log(data);
                            }
                        })
                    
                    }
                })
            }
    
        })
    }
})
