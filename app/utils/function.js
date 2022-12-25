function deleteFileInPublic(fileAddress) {
  const pathFile = path.join(__dirname, "..", "..", "public", fileAddress);
  if (fs.existsSync(pathFile)) fs.unlinkSync(pathFile);
}
function listOfImagesFromRequest(files, fileUploadPath) {
  if (files?.length > 0) {
    return files.map((file) =>
      path.join(fileUploadPath, file.filename).replace(/[\\\\]/gm, "/")
    );
  }
  return [];
}
function copyObject(object) {
  return JSON.parse(JSON.stringify(object));
}
function RandomNumberGenerator() {
  return Math.floor(Math.random() * 90000 + 10000);
}
module.exports = {
  deleteFileInPublic,
  listOfImagesFromRequest,
  copyObject,
  RandomNumberGenerator,
};
