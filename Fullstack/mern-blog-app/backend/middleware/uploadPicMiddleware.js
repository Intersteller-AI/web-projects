import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import grid from "gridfs-stream";

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

export { gfs, gridfsBucket };
