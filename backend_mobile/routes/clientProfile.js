const routes = require('express').Router();
const db = require("../db")

routes.get('/dummy', (req, res) => {
  res.json({
    status: "success",
    restaurant: "dummy"
  });
});

routes.get('/dumbo', (req, res) => {
  res.json({
    status: "success",
    restaurant: "dumbo"
  });
});

routes.post("/updatedetails", async (req, res) => {
  try {
    console.log(`POST url: ${req.originalUrl}`)
    const { cl_uid, cl_fullname, cl_username, cl_curpj, cl_pjcode, cl_phonenum } = req.body
    console.log(req.body)
    const queryString = `UPDATE client SET cl_fullname='${cl_fullname.toUpperCase()}', cl_username='${cl_username}', cl_curpj='${cl_curpj}',cl_pjcode='${cl_pjcode}',cl_phonenum='${cl_phonenum}' WHERE cl_uid='${cl_uid}' RETURNING *`
    console.log(queryString)
    const query = await db.query(queryString)
    res.json(query.rows);
    console.log(query.rows);
  } catch (error) {
    console.error(error.message);
  }
});

routes.post("/updateproject", async (req, res) => {
  try {
    console.log(`POST url: ${req.originalUrl}`)
    const { cl_uid, cl_pjcode } = req.body
    const queryString = `UPDATE client SET cl_pjcode='{${cl_pjcode}}' WHERE cl_uid='${cl_uid}' RETURNING *`
    console.log(queryString)
    const query = await db.query(queryString)
    res.json(query.rows);
    console.log(query.rows);
  } catch (error) {
    console.error(error.message);
  }
});

routes.post("/changeproject", async (req, res) => {
  try {
    console.log(`POST url: ${req.originalUrl}`)
    const { cl_uid, cl_curpj } = req.body
    const queryString = `UPDATE client SET cl_curpj='${cl_curpj}' WHERE cl_uid='${cl_uid}' RETURNING *`
    console.log(queryString)
    const query = await db.query(queryString)
    res.json(query.rows);
    console.log(query.rows);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = routes;