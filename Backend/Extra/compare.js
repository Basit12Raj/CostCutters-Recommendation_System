//Backend Code

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//<-------- MongoDB Connection----------->
mongoose
  .connect("mongodb://127.0.0.1:27017/costcutters", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connect");
  })
  .catch(() => {
    console.error("MongoDB Error".error);
  });

// Define a schema
const ProductSchema = new mongoose.Schema({
  Name: String,
  Image: String,
  Link: String,
  price: String,
});

// Create models for each collection
const Amazon = mongoose.model("Amazon", ProductSchema, "amazons");
const Flipkart = mongoose.model("Flipkart", ProductSchema, "flipkarts");
const Ebay = mongoose.model("Ebay", ProductSchema, "ebays");

// Endpoint to retrieve products from 'amazons'
app.get("/products", async (req, res) => {
  try {
    const products = await Amazon.find();
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Custom function to determine the best match......
// This function now returns only the Price and Image of the best match.....
const findBestMatch = (products, query) => {
  if (!products.length) return null;

  // Find the product that is the best match based on the criteria.
  const bestMatchProduct = products.reduce((a, b) => {
    const aMatchScore = Math.abs(a.Name.length - query.length);
    const bMatchScore = Math.abs(b.Name.length - query.length);
    return aMatchScore < bMatchScore ? a : b;
  });

  // Return only the Price and Image of the matched product.
  return {
    Price: bestMatchProduct.price,
    Image: bestMatchProduct.Image,
    Name: bestMatchProduct.Name,
    Link: bestMatchProduct.Link,
  };
};

// Endpoint for comparing products
app.get("/compare/:name", async (req, res) => {
  try {
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
    }

    const name = decodeURIComponent(req.params.name);
    const regex = new RegExp(escapeRegExp(name), "i");

    // Fetching all matching products from each collection
    const [amazonProducts, flipkartProducts, ebayProducts] = await Promise.all([
      Amazon.find({ Name: regex }).select("Name price Image Link"), // selecting specific fields
      Flipkart.find({ Name: regex }).select("Name price Image Link"), // selecting specific fields
      Ebay.find({ Name: regex }).select("Name price Image Link"), // selecting specific fields
    ]);

    // Selecting the best match from each set of results and getting only Price and Image
    const bestAmazonProduct = findBestMatch(amazonProducts, name);
    const bestFlipkartProduct = findBestMatch(flipkartProducts, name);
    const bestEbayProduct = findBestMatch(ebayProducts, name);

    res.json({
      amazonProduct: bestAmazonProduct,
      flipkartProduct: bestFlipkartProduct,
      ebayProduct: bestEbayProduct,
    });
  } catch (error) {
    console.error("Error in /compare/:name endpoint:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 5008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
