const contactModel = require("../models/contact/contactModel")

const contactForm = async (req, res) => {

    try {
        const {name, email, message} = req.body;

        const contact = await contactModel.create({
            name,
            email,
            message
        });

        res.status(200).json({contact});

    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = contactForm;