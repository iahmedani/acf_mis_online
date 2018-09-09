const express = require("express");
const router = express.Router();
const isAdminLog = require("../../config/auth/authType").isAdminLog;
const knex = require("../../db/knex");
const async = require("async");

router.get("/", (req, res) => {
  res.render("warehouse/index");
});

router.get("/Country", (req, res) => {
  // var c_code = req.body.country_code;
  // if (!c_code) res.json({ msg: "Please provide country code" });
  knex("tblCountry")
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(e => res.json({ msg: "db error" }));
  // res.json([{ country_code: "pakistan" }]);
});

router.post("/Country", (req, res) => {
  var c_code = req.body.country_code;
  if (!c_code) res.json({ msg: "Please provide country code" });
  knex("tblCountry")
    .insert({ country_code: c_code })
    .then(result => {
      res.json({ msg: "sucess" });
    })
    .catch(e => res.json({ msg: "db error" }));
});
router.get("/Base", (req, res) => {
  // var c_code = req.body.country_code;
  // if (!c_code) res.json({ msg: "Please provide country code" });
  console.log(req.body);
  knex("tblBase")
    .then(result => {
      console.log(result);

      res.json(result);
    })
    .catch(e => res.json({ msg: "db error" }));
  // res.json([{ country_code: "pakistan" }]);
});

router.post("/Base", (req, res) => {
  var b_code = req.body.base_code;
  if (!b_code) res.json({ msg: "Please provide country code" });
  knex("tblBase")
    .insert({ base_code: b_code })
    .returning("base_code")
    .then(result => {
      res.json(result[0]);
    })
    .catch(e => res.json({ msg: "db error" }));
});

router.get("/Dept", (req, res) => {
  knex("tblDept")
    .then(result => res.json(result))
    .catch(e => res.json(e));
});

router.post("/Dept", (req, res) => {
  var d_code = req.body.dept_code;
  knex("tblDept")
    .insert("dept_code", d_code)
    .then(result => res.json(result))
    .catch(e => res.json(e));
});

router.get("/Project", (req, res) => {
  knex("tblProject")
    .then(result => res.json(result))
    .catch(e => res.json(e));
});

router.post("/Project", (req, res) => {
  var p_code = req.body.proj_code;
  var p_desc = req.body.proj_desc;
  knex("tblProject")
    .insert({ proj_code: p_code, proj_desc: p_desc })
    .then(result => res.json(result))
    .catch(e => res.json(e));
});

router.post("/stocks", (req, res) => {
  var qry = req.body;
  console.log(qry)
  knex('dn_stock_outv4')
    .then(result => res.json(result))
    .catch(e => res.json(e));
});

router.post('/checks', (req, res) => {
  var data = req.body;
  var outData = {};
  outData.out_qty = data.out_qty;
  delete data.out_qty;
  outData.item_batch = data.item_batch;
  delete data.item_batch;
  outData.out_unit = data.out_unit;
  delete data.out_unit;
  delete data.qty_delivered;
  delete data.obs_delivered;
  delete data.country_code;
  delete data.base_code;
  delete data.dept_code;
  delete data.pr_num;
  delete data.pr_line;
  delete data.item_name;
  delete data.shipper_sig;

  var delData = data;

  knex('tblDelNote')
    .insert(delData)
    .returning('delNote_id')
    .then(result => {
      var outDataNew = [];
      if (Array.isArray(outData.out_qty)) {
        outData.out_qty.forEach((el, index)=>{
          outDataNew.push({ delNote_id_fk: result, stockIn_id_fk: outData.item_batch[index], out_qty: outData.out_qty[index], out_unit: outData.out_unit[index]})
        })
      }
      knex('tblStockOut')
        .insert(outDataNew)
        .then(result => {
          res.json({msg:'success'})
        })       
    })
    .catch(e => {
      res.json(e)
    })
})

router.get("/stockIn", (req, res) => {
  async.series(
    {
      country: cb => {
        knex("tblCountry")
          .then(result => cb(null, result))
          .catch(e => cb(e));
      },
      dept: cb => {
        knex("tblDept")
          .then(result => cb(null, result))
          .catch(e => cb(e));
      },
      base: cb => {
        knex("tblBase")
          .then(result => cb(null, result))
          .catch(e => cb(e));
      },
      project: cb => {
        knex("tblProject")
          .then(result => cb(null, result))
          .catch(e => cb(e));
      }
    },
    function (err, results) {
      if (!err) {
        res.render("warehouse/stockIn", { results: JSON.stringify(results) });
      } else {

        res.render("warehouse/stockIn", { results: { msg: 'db error' } })
      }
    }
  );
});

router.post('/stockIn', (req, res) => {
  var stock = req.body;
  console.log(stock)

  knex('tblLogIn')
    .insert(stock)
    .then(result => {
      res.json(result)
    })
    .catch(e=>res.json(e))
})

router.get("/stockOut", (req, res) => {
  res.render("warehouse/delNote");
});

router.get('/dnReports', (req, res) => {
  knex('tblDelNote')
    .then(result => {
      res.render('warehouse/dnReports', {results: result})
    }).catch(e => res.json(e))
})

router.get('/dnReports/:reportNum', (req, res) => {
  async.series({
    delNote: cb => {
      knex('tblDelNote')
        .where('delNote_id', req.params.reportNum)
        .then(result => cb(null, result))
        .catch(e=>cb(e))
    },
    out: cb => {
      knex('dn_report_v1')
        .where('delNote_id_fk', req.params.reportNum)
        .then(result => cb(null, result))
        .catch(e => cb(e)) 
    }
  }, (err, results) => {
    if (err) {
      res.json(e)
    } else {
      console.log(results)
      res.render('warehouse/dnReport', {result: results})
    }
  })
})

module.exports = router;
