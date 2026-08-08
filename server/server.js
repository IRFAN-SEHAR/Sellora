import express from "express"
import dotenv from "dotenv"
import path from "path"
import bodyParser , {urlencoded} from "body-parser"
import cors from "cors"
import pg from "pg"
import session from "express-session"
import passport from "passport"
import { Strategy } from "passport-local"
import GoogleStrategy from "passport-google-oauth20"
import multer from "multer"
import bcrypt , {hash , hashSync} from "bcrypt"
const app = express();
app.use(express.json());
const port = 3000;
app.listen(port , "0.0.0.0" , ()=>{
    console.log(`this app is listening on ${port}`);
});

