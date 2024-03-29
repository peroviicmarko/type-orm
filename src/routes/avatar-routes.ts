import { Router } from "express";
import multer from "multer";
import { AvatarController } from "../controllers/avatar.controller";
import passport from "passport";
import { Environment } from "../configuration/environment";
import { authOptions } from "../core/passport";

const router = Router();

const controller = new AvatarController();

const maxFileSize = Environment.MAX_FILE_SIZE_IN_MB * 1024 * 1024;

router.route("/upload")
  .post(
    multer({
      limits: {
        fileSize: maxFileSize
      }
    }).single("file"),
    [passport.authenticate(Environment.AUTH_SCHEMA, authOptions)],
    controller.upload
  );

router.route("/remove")
  .delete(
    [passport.authenticate(Environment.AUTH_SCHEMA, authOptions)],
    controller.removeProfilePhoto
  );

router.route("/download")
  .get(
    [passport.authenticate(Environment.AUTH_SCHEMA, authOptions)],
    controller.download
  );

router.route("/preview")
  .delete(
    [passport.authenticate(Environment.AUTH_SCHEMA, authOptions)],
    controller.preview
  );


export default router;