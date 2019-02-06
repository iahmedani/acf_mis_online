
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblCommodity').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblCommodity').insert([
        {
            "item_name": "MM Sachets",
            "item_desc": "Multiple Micro Nutrient Powder ",
            "item_unit": "Pac",
            "item_sub_unit": "Sch",
            "prog_type": "outreach"
        },
        {
            "item_name": "IFA Tablets",
            "item_desc": "IFA film coated tablets / PAC-1000",
            "item_unit": "Pac",
            "item_sub_unit": "Tab",
            "prog_type": "outreach"
        },
        {
            "item_name": "Zinc Tablets",
            "item_desc": "Zinc 20mg Tablets/PAC-100",
            "item_unit": "Pac",
            "item_sub_unit": "Tab",
            "prog_type": null
        },
        {
            "item_name": "RUTF",
            "item_desc": "Therapeutic spread, Sachet 92g/CAR-150",
            "item_unit": "Car",
            "item_sub_unit": "Sch",
            "prog_type": "otp"
        },
        {
            "item_name": "Amoxicilin Syrup",
            "item_desc": "Amoxicilin Syrup (Oral sus) 125mg/5ml/Bot-100ml",
            "item_unit": "Bot",
            "item_sub_unit": "Bot",
            "prog_type": "otp"
        },
        {
            "item_name": "Mebendazole Tablets",
            "item_desc": "Mebendazole 500mg Tabs/PAC of 1000",
            "item_unit": "Pac",
            "item_sub_unit": "Tab",
            "prog_type": "outreach"
        },
        {
            "item_name": "F-75 Therapeutic Diet",
            "item_desc": "F-75 Therapeutic Diet",
            "item_unit": "EA",
            "item_sub_unit": "EA",
            "prog_type": "sc"
        },
        {
            "item_name": "F-100 Therapeutic Diet",
            "item_desc": "F-100 Therapeutic Diet",
            "item_unit": "EA",
            "item_sub_unit": "EA",
            "prog_type": "sc"
        },
        {
            "item_name": "ReSomal",
            "item_desc": "ReSomal 42g Sachet for 1 liter/CAR-100",
            "item_unit": "EA",
            "item_sub_unit": "EA",
            "prog_type": "sc"
        },
        {
            "item_name": "Zinc Tube",
            "item_desc": "Zinc Tube 10%/TBE-100g",
            "item_unit": "TBE",
            "item_sub_unit": "TBE",
            "prog_type": null
        },
        {
            "item_name": "Mebendazole Tablets",
            "item_desc": "Mebendazole 500mg Tabs/PAC of 1000",
            "item_unit": "Pac",
            "item_sub_unit": "Tab",
            "prog_type": "otp"
        }
    ]);
    });
};
