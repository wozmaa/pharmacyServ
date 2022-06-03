const Basket = require("../models/basket.model");
const Drug = require("../models/drug.model");
const Client = require("../models/client.model");

module.exports.basketController = {
    pushDrug: async (req, res) => {
        try {
            const basket = await Basket.findById(req.params.id);
            const drug = await Drug.findById(req.body.drug);
            const client = await Client.findById(basket.clientId)
            if(drug.recipe === true){
                if(client.hasRecipe === true){
                    await Basket.findByIdAndUpdate(req.params.id, {
                        $push: { drug: req.body.drug },
                        sum: basket.sum + drug.price,
                    });
                
                    res.json('лекарство добавлено')
                } else {
                    res.json('нету рецепта')
                } 
                    res.json('лекарство добавлено')
                }
                else {
                    await Basket.findByIdAndUpdate(req.params.id, {
                        $push: { drug: req.body.drug },
                        sum: basket.sun + drug.price,
                    })
            }
    }
    catch (e) {
        res.json(e)
    }
},
};
