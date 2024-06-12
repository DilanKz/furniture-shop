const Product = require("../models/ProductModel");

const productController = {

    getAllProducts: async function (req, res, next) {
        try {
            let allProducts = await Product.find();
            res.status(200).json({success: true, data: allProducts, message: "All products retrieved successfully"});
        } catch (error) {
            res.status(500).json({success: false, message: "Error retrieving products", error: error.message});
        }
    },

    postProduct: async function (req, res, next) {
        try {
            const product = req.body

            const newProduct = await Product.create({
                sku: product.sku,
                name: product.name,
                price: product.price,
                description: product.description,
                count: product.count,
                additionalData: product.additionalData,
                image1: product.image1,
                image2: product.image2,
                image3: product.image3,
                image4: product.image4,
                category: product.category,
                ratings: product.ratings,
                clicks: product.clicks
            })

            res.status(201).json({success: true, data: '', message: "Product created successfully"});
        } catch (error) {
            res.status(500).json({success: false, message: "Error creating product", error: error.message});
        }
    },

    getAllRequested: async function (req, res, next) {
        try {
            let requestedArticles = await Product.find({availability: "requested"});
            res.status(200).json({
                success: true,
                data: requestedArticles,
                message: "Requested articles retrieved successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error retrieving requested articles",
                error: error.message
            });
        }
    },

    deleteProduct: async function (req, res, next) {
        try {
            const {id} = req.params;
            let article = await Product.deleteOne({_id: id});

            if (article.deletedCount > 0) {
                res.status(200).json({success: true, data: '', message: "Product deleted successfully."});
            } else {
                res.status(404).json({success: false, data: '', message: "Product not found."});
            }
        } catch (error) {
            res.status(500).json({success: false, data: '', message: error.message});
        }
    },

    updateViews: async function (req, res, next) {
        try {
            let id = req.params.id;
            const updatedArticle = await Product.findByIdAndUpdate(
                id,
                {$inc: {clicks: 1}},
                {new: true}
            );

            if (!updatedArticle) {
                return res.status(404).json({success: false, data: '', message: 'Product not found'});
            }

            res.status(200).json({success: true, data: '', message: "Product click count incremented"});
        } catch (error) {
            res.status(500).json({success: false, data: '', message: error.message});
        }
    },

    getMostClickedProduct: async function (req, res, next) {
        try {
            const articles = await Product.find().sort({clicks: -1}).limit(10);
            res.status(200).json({
                success: true,
                data: articles,
                message: "Most clicked products retrieved successfully"
            });
        } catch (error) {
            res.status(500).json({success: false, data: '', message: error.message});
        }
    },

    getProductsByTags: async function (req, res, next) {
        try {
            const tags = req.body.tags;
            const articles = await Product.find({tags: {$in: tags}});
            res.status(200).json({success: true, data: articles, message: "Products retrieved successfully by tags"});
        } catch (error) {
            res.status(500).json({success: false, data: '', message: error.message});
        }
    },

    getRecentProducts: async function (req, res, next) {
        try {
            const articles = await Product.find().sort({postData: -1}).limit(10);
            res.status(200).json({success: true, data: articles, message: "Recent products retrieved successfully"});
        } catch (error) {
            res.status(500).json({success: false, data: '', message: error.message});
        }
    }
}

module.exports = productController;