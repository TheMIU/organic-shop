const { productList } = require('../constants/const');
const Product = require('../model/Product');


const productController = {
    getAllProducts: async function (req, res, next) {
        //res.send(productList);
        try {
            const find = await Product.find();
            res.status(200).json(find);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    },

    saveProduct: async function (req, res, next) {
        try {
            const productData = req.body;
            const product = await Product.create(productData);
            res.status(200).json(product);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    },

    getProduct: async function (req, res, next) {
        try {
            const productId = req.params.id;
            const product = await Product.find({ id: productId });
            res.status(200).json(product);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    },

    updateProduct: async function (req, res, next) {
        try {
            const productId = req.params.id;
            const productData = req.body;

            const updatedProduct = await Product.findOneAndUpdate({ id: productId }, productData, { new: true }); // updated product eka return true
            if (!updatedProduct) {
                return res.status(404).json({ error: 'product not found' });
            }
            res.status(200).json(updatedProduct);

        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    },

    deleteProduct: async function (req, res, next) {
        try {
            const productId = req.params.id;
            const result = await Product.deleteOne({ id: productId });

            if (result.deletedCount == 0) {
                return res.status(404).json({ error: 'product not found' });
            }
            res.status(200).json({message:'Product deleted success'});

        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    }
}

module.exports = productController;