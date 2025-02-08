import fs from "fs";

const getHome = (req, res) => {
    fs.readFile("./data/category.json", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const categories = JSON.parse(data);
        res.status(200).render("home", { categories });
    });
}

export default {getHome};