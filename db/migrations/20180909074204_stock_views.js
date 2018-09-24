exports.up = function(knex, Promise) {
  return knex.schema.raw(`create view total_stock_out as  
SELECT        stockIn_id_fk, SUM(out_qty) AS total_out_qty
FROM            tblStockOut
GROUP BY stockIn_id_fk`).raw(`create view dn_stock as
SELECT        tblLogIn.stockIn_id, tblLogIn.country_code, tblLogIn.base_code, tblLogIn.dept_code, tblLogIn.proc_req, tblLogIn.proc_line, tblLogIn.proj_code, tblLogIn.cat, tblLogIn.item_desc, tblLogIn.exp_date, 
                         SUM(total_stock_out.total_out_qty) AS total_out, SUM(tblLogIn.in_qty) AS total_in
FROM            total_stock_out INNER JOIN
                         tblLogIn ON total_stock_out.stockIn_id_fk = tblLogIn.stockIn_id
GROUP BY tblLogIn.stockIn_id, tblLogIn.country_code, tblLogIn.base_code, tblLogIn.dept_code, tblLogIn.proc_req, tblLogIn.proc_line, tblLogIn.proj_code, tblLogIn.cat, tblLogIn.item_desc, tblLogIn.exp_date, tblLogIn.dept_code, tblLogIn.proc_req, tblLogIn.proc_line, tblLogIn.proj_code, tblLogIn.item_desc, tblLogIn.in_qty, tblLogIn.exp_date, tblLogIn.base_code, tblLogIn.dept_code, tblLogIn.proc_req, tblLogIn.proc_line, tblLogIn.proj_code, tblLogIn.unit, tblLogIn.exp_date`);
};

exports.down = function(knex, Promise) {
  return knex.schema.raw("DROP VIEW dn_stock").raw("DROP VIEW total_stock_out");
};

exports.config = { transaction: false };