const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

// Schema สำหรับ navigations
const navigationSchema = new mongoose.Schema({
  id: Number,
  key: String,
  name: String,
  type: String,
  icon: String,
  navigation_id: Number,
  comment: String,
  sequence: Number,
  active: Boolean,
});

const webCategorySchema = new mongoose.Schema({
  id: Number,
  title_th: String,
  title_en: String,
  parent_id: { type: Number, default: null },
  link: String,
  image: String,
  status: String,
  sequence: Number,
});

// Create a model
const Navigation = mongoose.model("Navigation", navigationSchema);
const WebCategory = mongoose.model("web_categories", webCategorySchema);

mongoose
  .connect(
    "mongodb+srv://lohtester:MLjU7nEYl3Ek50NH@cluster0.knkingd.mongodb.net/tester"
  )
  .then((value) => {
    console.info("Connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

// ฟังก์ชันสำหรับการจัดรูปแบบข้อมูล
const formatData = (data, parentId = null) => {
  return data
    .filter((item) => item.navigation_id === parentId)
    .map((item) => ({
      id: item.key,
      title: item.name,
      translate: item.comment,
      children: formatData(data, item.id),
      icon: item.icon,
      type: item.type,
    }));
};
const formatDataCat = (categories, parentId = null) => {
  return categories
    .filter((category) => category.parent_id === parentId)
    .map((category) => ({
      id: category.id,
      title_th: category.title_th,
      title_en: category.title_en,
      parent_id: category.parent_id,
      link: category.link,
      image: category.image,
      status: category.status,
      sequence: category.sequence,
      child: formatDataCat(categories, category.id), // ใช้การเรียกตัวเองเพื่อสร้างลำดับชั้น
    }));
};

app.get("/navigations", async (req, res) => {
  try {
    const navigations = await Navigation.find({});
    const formattedNavigations = formatData(navigations);
    res.json(formattedNavigations);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/web_categories", async (req, res) => {
  try {
    const webCategory = await WebCategory.find({});
    const formattedWebCategory = formatDataCat(webCategory);
    res.json(formattedWebCategory);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
