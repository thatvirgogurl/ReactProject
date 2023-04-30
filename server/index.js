const express = require("express");
const app = express();

//app.use(cors())
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Monalisamishra:MDYlL3MKtGxQa59a@cluster0.7zrfpkj.mongodb.net/monalisaMishra_db"
);

//.....................for connect frontend with backend............//
const cors = require("cors");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
//..................................................................//

//.............................REGISTER........................//
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const secretKey = "mona@lisa";
const User = require("./models/User");

app.post("/register", async (req, res) => {
  //   res.json('okkk')
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

//.............................lOGIN........................//
const jwt = require("jsonwebtoken");

app.post("/login", async (req, res) => {
  //   res.json('okkk')
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({
      username,
    });
    const passwordOk = bcrypt.compareSync(password, userDoc.password);
    if (passwordOk) {
      jwt.sign({ username, id: userDoc._id }, secretKey, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id:userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json("wrong credential");
    }

    //res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

//..................................Profile........................//
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secretKey, {}, (err, info) => {
    if(err)  throw err;
    res.json(info);
  });
  //res.json(req.cookies);
});
//.......................Logout.........................//
app.post("/logout", (req, res) => {
  res.cookie("token","").json("ok");
});

//mongodb+srv://Monalisamishra:MDYlL3MKtGxQa59a@cluster0.7zrfpkj.mongodb.net/monalisaMishra_db//
//................................createPOst.......................//
const multer=require('multer')
const uploadMiddware=multer({dest:'upload/'})
app.use('/upload',express.static(__dirname+'/upload'))
const fs=require('fs')
const Post=require('./models/Post')

app.post('/post',uploadMiddware.single('file'),async(req,res)=>{
  const {originalname,path}=req.file;
  const parts=originalname.split('.')
  const ext=parts[parts.length-1];
 const newPath=path+'.'+ext
  fs.renameSync(path,newPath)

   const { token } = req.cookies;
  jwt.verify(token, secretKey, {}, async(err, info) => {
    if(err)  throw err;
   // res.json(info);
    const {title,summary,content}=req.body;
 const postDoc = await Post.create({
   title,
   summary,
   content,
   cover: newPath,
   author: info.id,
 });
 res.json({ postDoc });
  });
})
//............................getPost............//
app.get('/post',async(req,res)=>{
 const posts=await Post.find().populate('author',['username']).sort({createdAt:-1}).limit(20);
 res.json(posts)
})
//......................getPostfromParams...........................//
app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["username"]);
  res.json(postDoc);
  
});
//......................UpdatePost.....................//
// Update post
app.put('/post', uploadMiddware.single('file'), async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
  }

  const { token } = req.cookies;
  jwt.verify(token, secretKey, {}, async (err, info) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;
    const postDoc = await Post.findById(id);
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json('you are not the author');
    }
    postDoc.title = title;
    postDoc.summary = summary;
    postDoc.content = content;
    if (newPath) {
      postDoc.cover = newPath;
    }
    await postDoc.save();

    res.json(postDoc);
  });
});

//....................................................................//
app.get("/test", async (req, res) => {
  res.json("okk");
});
app.listen(4000);
