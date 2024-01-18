# 1. Query ข้อมูลจาก DB แล้วจัดให้อยู่ในรูปแบบที่กำหนด
### 1.1 สร้างไฟล์ .env และกำหนดค่าต่างๆ
```dotenv
MONGODB_URI=mongodb+srv://lohtester:MLjU7nEYl3Ek50NH@cluster0.knkingd.mongodb.net/tester
```

### 1.2 Query ข้อมูลจาก collections navigation แล้วจัดให้อยู่ในรูปแบบที่กำหนด ตัวอย่างรูปแบบข้อมูลที่ถูกจัดให้อยู่ในรูปแบบที่กำหนด อยุ่ในไฟล์ [navigation.json](./navigation.json)
#### Navigation Schema Type
collections name: navigations
```js
id: Number
key: String
name: String
type: String
icon: String
navigation_id: Number
comment: String
sequence: Number
active: Boolean
```

### 1.3 Query ข้อมูลจาก collections web_categories แล้วจัดให้อยู่ในรูปแบบที่กำหนด ตัวอย่างรูปแบบข้อมูลที่ถูกจัดให้อยู่ในรูปแบบที่กำหนด อยุ่ในไฟล์ [web_categories.json](./web_categories.json)
#### WebCategories Schema Type
collections base name: web_categories
```js
id: Number
title_th: String
title_en: String
parent_id: Number
link: String
image: String
status: String
sequence: Number
```


## License
[LEDONHOME](https://www.ledonhome.com)
