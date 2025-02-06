const getHome = (req, res) => {
    res.status(200).render("home");
}

export default {getHome};