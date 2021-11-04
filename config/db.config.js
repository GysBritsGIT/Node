module.exports = {
    HOST: "34.123.191.162",
    USER: "root",
    PASSWORD: "Passw0rd",
    DB: "PhotoAlbum",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };