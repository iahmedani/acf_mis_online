
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblGeoUC').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblGeoUC').insert([
        {
            "ucName" : "Oderolal",
            "created_at" : "2018-09-28T05:42:44Z",
            "updated_at" : "2018-09-28T05:42:44Z",
            "isActive" : 1,
            "tehsil_id" : 1
        },
        {
            "ucName" : "Bhakha Khel",
            "created_at" : "2018-09-28T05:43:09Z",
            "updated_at" : "2018-09-28T05:43:09Z",
            "isActive" : 1,
            "tehsil_id" : 2
        },
        {
            "ucName" : "Lahore",
            "created_at" : "2018-09-28T05:43:30Z",
            "updated_at" : "2018-09-28T05:43:30Z",
            "isActive" : 1,
            "tehsil_id" : 3
        },
        {
            "ucName" : "Achini",
            "created_at" : "2018-09-28T05:43:51Z",
            "updated_at" : "2018-09-28T05:43:51Z",
            "isActive" : 1,
            "tehsil_id" : 2
        },
        {
            "ucName" : "Bazid Khel",
            "created_at" : "2018-09-28T05:44:06Z",
            "updated_at" : "2018-09-28T05:44:06Z",
            "isActive" : 1,
            "tehsil_id" : 2
        },
        {
            "ucName" : "Musazai",
            "created_at" : "2018-09-28T05:44:30Z",
            "updated_at" : "2018-09-28T05:44:30Z",
            "isActive" : 1,
            "tehsil_id" : 2
        },
        {
            "ucName" : "Pajjagai",
            "created_at" : "2018-09-28T05:44:45Z",
            "updated_at" : "2018-09-28T05:44:45Z",
            "isActive" : 1,
            "tehsil_id" : 2
        },
        {
            "ucName" : "Surozai",
            "created_at" : "2018-09-28T05:45:00Z",
            "updated_at" : "2018-09-28T05:45:00Z",
            "isActive" : 1,
            "tehsil_id" : 2
        },
        {
            "ucName" : "Tahkal Payan 1",
            "created_at" : "2018-09-28T05:45:15Z",
            "updated_at" : "2018-09-28T05:45:15Z",
            "isActive" : 1,
            "tehsil_id" : 2
        },
        {
            "ucName" : "Bhanoth",
            "created_at" : "2019-04-17T10:57:04Z",
            "updated_at" : "2019-04-17T10:57:04Z",
            "isActive" : 1,
            "tehsil_id" : 7
        },
        {
            "ucName" : "Bhit Shah",
            "created_at" : "2019-04-17T10:57:04Z",
            "updated_at" : "2019-04-17T10:57:04Z",
            "isActive" : 1,
            "tehsil_id" : 7
        },
        {
            "ucName" : "Fateh M Shah Ajnani",
            "created_at" : "2019-04-17T10:57:04Z",
            "updated_at" : "2019-04-17T10:57:04Z",
            "isActive" : 1,
            "tehsil_id" : 7
        },
        {
            "ucName" : "Karam Khan Nizamani",
            "created_at" : "2019-04-17T10:57:04Z",
            "updated_at" : "2019-04-17T10:57:04Z",
            "isActive" : 1,
            "tehsil_id" : 7
        },
        {
            "ucName" : "Khandoon",
            "created_at" : "2019-04-17T10:57:04Z",
            "updated_at" : "2019-04-17T10:57:04Z",
            "isActive" : 1,
            "tehsil_id" : 7
        },
        {
            "ucName" : "Mukhdoom Joon Landhyion",
            "created_at" : "2019-04-17T10:57:04Z",
            "updated_at" : "2019-04-17T10:57:04Z",
            "isActive" : 1,
            "tehsil_id" : 7
        },
        {
            "ucName" : "Bao Dero",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Bau Khan Pathan",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Fakir Nooh Hothiani",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Jeandal Kot",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Khyber",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "M Hussain Hingoro",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Matiari",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Nobat Mari",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Odero lal Station",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Odero lal Village",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Palijani",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Sekhat",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Shah Alam Shah je Wasi",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Tajpur",
            "created_at" : "2019-04-17T10:57:37Z",
            "updated_at" : "2019-04-17T10:57:37Z",
            "isActive" : 1,
            "tehsil_id" : 13
        },
        {
            "ucName" : "Abdul Wahid Buriro",
            "created_at" : "2019-04-17T10:57:57Z",
            "updated_at" : "2019-04-17T10:57:57Z",
            "isActive" : 1,
            "tehsil_id" : 16
        },
        {
            "ucName" : "Bhali Dino Kaka",
            "created_at" : "2019-04-17T10:57:57Z",
            "updated_at" : "2019-04-17T10:57:57Z",
            "isActive" : 1,
            "tehsil_id" : 16
        },
        {
            "ucName" : "Faqeer Abad",
            "created_at" : "2019-04-17T10:57:57Z",
            "updated_at" : "2019-04-17T10:57:57Z",
            "isActive" : 1,
            "tehsil_id" : 16
        },
        {
            "ucName" : "M Ramzan Uner",
            "created_at" : "2019-04-17T10:57:57Z",
            "updated_at" : "2019-04-17T10:57:57Z",
            "isActive" : 1,
            "tehsil_id" : 16
        },
        {
            "ucName" : "Saeedabad Old",
            "created_at" : "2019-04-17T10:57:57Z",
            "updated_at" : "2019-04-17T10:57:57Z",
            "isActive" : 1,
            "tehsil_id" : 16
        },
        {
            "ucName" : "Shahmeer Raho",
            "created_at" : "2019-04-17T10:57:57Z",
            "updated_at" : "2019-04-17T10:57:57Z",
            "isActive" : 1,
            "tehsil_id" : 16
        },
        {
            "ucName" : "Sikandarabad",
            "created_at" : "2019-04-17T10:57:57Z",
            "updated_at" : "2019-04-17T10:57:57Z",
            "isActive" : 1,
            "tehsil_id" : 16
        },
        {
            "ucName" : "Zair Pir",
            "created_at" : "2019-04-17T10:57:57Z",
            "updated_at" : "2019-04-17T10:57:57Z",
            "isActive" : 1,
            "tehsil_id" : 16
        },
        {
            "ucName" : "Amrot Sharif",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Bambehar",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Chatto Mangi",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Dakhan",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Gaheja",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Garhi Yaseen",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Jindo Dero",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Madeji",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Mirzapur",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Nim",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Noshero Abro",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Panah Odho",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Waryaso",
            "created_at" : "2019-04-17T10:58:15Z",
            "updated_at" : "2019-04-17T10:58:15Z",
            "isActive" : 1,
            "tehsil_id" : 5
        },
        {
            "ucName" : "Garhi Dakho",
            "created_at" : "2019-04-17T10:58:39Z",
            "updated_at" : "2019-04-17T10:58:39Z",
            "isActive" : 1,
            "tehsil_id" : 10
        },
        {
            "ucName" : "Garhi Tegho",
            "created_at" : "2019-04-17T10:58:39Z",
            "updated_at" : "2019-04-17T10:58:39Z",
            "isActive" : 1,
            "tehsil_id" : 10
        },
        {
            "ucName" : "Khanpur",
            "created_at" : "2019-04-17T10:58:39Z",
            "updated_at" : "2019-04-17T10:58:39Z",
            "isActive" : 1,
            "tehsil_id" : 10
        },
        {
            "ucName" : "Mahmooda Bagh",
            "created_at" : "2019-04-17T10:58:39Z",
            "updated_at" : "2019-04-17T10:58:39Z",
            "isActive" : 1,
            "tehsil_id" : 10
        },
        {
            "ucName" : "Mian Sahib",
            "created_at" : "2019-04-17T10:58:39Z",
            "updated_at" : "2019-04-17T10:58:39Z",
            "isActive" : 1,
            "tehsil_id" : 10
        },
        {
            "ucName" : "Pir Bux Shujrah",
            "created_at" : "2019-04-17T10:58:39Z",
            "updated_at" : "2019-04-17T10:58:39Z",
            "isActive" : 1,
            "tehsil_id" : 10
        },
        {
            "ucName" : "Rahim Abad",
            "created_at" : "2019-04-17T10:58:39Z",
            "updated_at" : "2019-04-17T10:58:39Z",
            "isActive" : 1,
            "tehsil_id" : 10
        },
        {
            "ucName" : "Shabirabad",
            "created_at" : "2019-04-17T10:58:39Z",
            "updated_at" : "2019-04-17T10:58:39Z",
            "isActive" : 1,
            "tehsil_id" : 10
        },
        {
            "ucName" : "Thairo",
            "created_at" : "2019-04-17T10:58:39Z",
            "updated_at" : "2019-04-17T10:58:39Z",
            "isActive" : 1,
            "tehsil_id" : 10
        },
        {
            "ucName" : "Zarkhail",
            "created_at" : "2019-04-17T10:58:39Z",
            "updated_at" : "2019-04-17T10:58:39Z",
            "isActive" : 1,
            "tehsil_id" : 10
        },
        {
            "ucName" : "Abdo",
            "created_at" : "2019-04-17T10:58:56Z",
            "updated_at" : "2019-04-17T10:58:56Z",
            "isActive" : 1,
            "tehsil_id" : 12
        },
        {
            "ucName" : "Bhirkan",
            "created_at" : "2019-04-17T10:58:56Z",
            "updated_at" : "2019-04-17T10:58:56Z",
            "isActive" : 1,
            "tehsil_id" : 12
        },
        {
            "ucName" : "Chak",
            "created_at" : "2019-04-17T10:58:56Z",
            "updated_at" : "2019-04-17T10:58:56Z",
            "isActive" : 1,
            "tehsil_id" : 12
        },
        {
            "ucName" : "Habib Kot @ Ruk",
            "created_at" : "2019-04-17T10:58:56Z",
            "updated_at" : "2019-04-17T10:58:56Z",
            "isActive" : 1,
            "tehsil_id" : 12
        },
        {
            "ucName" : "Lakhi",
            "created_at" : "2019-04-17T10:58:56Z",
            "updated_at" : "2019-04-17T10:58:56Z",
            "isActive" : 1,
            "tehsil_id" : 12
        },
        {
            "ucName" : "Mungrani",
            "created_at" : "2019-04-17T10:58:56Z",
            "updated_at" : "2019-04-17T10:58:56Z",
            "isActive" : 1,
            "tehsil_id" : 12
        },
        {
            "ucName" : "Rustam",
            "created_at" : "2019-04-17T10:58:56Z",
            "updated_at" : "2019-04-17T10:58:56Z",
            "isActive" : 1,
            "tehsil_id" : 12
        },
        {
            "ucName" : "Sehwani",
            "created_at" : "2019-04-17T10:58:56Z",
            "updated_at" : "2019-04-17T10:58:56Z",
            "isActive" : 1,
            "tehsil_id" : 12
        },
        {
            "ucName" : "Sher Kot",
            "created_at" : "2019-04-17T10:58:56Z",
            "updated_at" : "2019-04-17T10:58:56Z",
            "isActive" : 1,
            "tehsil_id" : 12
        },
        {
            "ucName" : "Taib",
            "created_at" : "2019-04-17T10:58:56Z",
            "updated_at" : "2019-04-17T10:58:56Z",
            "isActive" : 1,
            "tehsil_id" : 12
        },
        {
            "ucName" : "Wazirabad",
            "created_at" : "2019-04-17T10:58:56Z",
            "updated_at" : "2019-04-17T10:58:56Z",
            "isActive" : 1,
            "tehsil_id" : 12
        },
        {
            "ucName" : "Hamayoon",
            "created_at" : "2019-04-17T10:59:23Z",
            "updated_at" : "2019-04-17T10:59:23Z",
            "isActive" : 1,
            "tehsil_id" : 18
        },
        {
            "ucName" : "Jaggan",
            "created_at" : "2019-04-17T10:59:23Z",
            "updated_at" : "2019-04-17T10:59:23Z",
            "isActive" : 1,
            "tehsil_id" : 18
        },
        {
            "ucName" : "Jahan Wah",
            "created_at" : "2019-04-17T10:59:23Z",
            "updated_at" : "2019-04-17T10:59:23Z",
            "isActive" : 1,
            "tehsil_id" : 18
        },
        {
            "ucName" : "Janno",
            "created_at" : "2019-04-17T10:59:23Z",
            "updated_at" : "2019-04-17T10:59:23Z",
            "isActive" : 1,
            "tehsil_id" : 18
        },
        {
            "ucName" : "Karan",
            "created_at" : "2019-04-17T10:59:23Z",
            "updated_at" : "2019-04-17T10:59:23Z",
            "isActive" : 1,
            "tehsil_id" : 18
        },
        {
            "ucName" : "Lodra",
            "created_at" : "2019-04-17T10:59:23Z",
            "updated_at" : "2019-04-17T10:59:23Z",
            "isActive" : 1,
            "tehsil_id" : 18
        },
        {
            "ucName" : "Sultan Kot",
            "created_at" : "2019-04-17T10:59:23Z",
            "updated_at" : "2019-04-17T10:59:23Z",
            "isActive" : 1,
            "tehsil_id" : 18
        },
        {
            "ucName" : "UC-8",
            "created_at" : "2019-04-17T10:59:23Z",
            "updated_at" : "2019-04-17T10:59:23Z",
            "isActive" : 1,
            "tehsil_id" : 18
        },
        {
            "ucName" : "Begna Mori",
            "created_at" : "2019-04-17T10:59:46Z",
            "updated_at" : "2019-04-17T10:59:46Z",
            "isActive" : 1,
            "tehsil_id" : 8
        },
        {
            "ucName" : "Gul Mohammad Baran",
            "created_at" : "2019-04-17T10:59:46Z",
            "updated_at" : "2019-04-17T10:59:46Z",
            "isActive" : 1,
            "tehsil_id" : 8
        },
        {
            "ucName" : "Karr Malik",
            "created_at" : "2019-04-17T10:59:46Z",
            "updated_at" : "2019-04-17T10:59:46Z",
            "isActive" : 1,
            "tehsil_id" : 8
        },
        {
            "ucName" : "Kothi",
            "created_at" : "2019-04-17T10:59:46Z",
            "updated_at" : "2019-04-17T10:59:46Z",
            "isActive" : 1,
            "tehsil_id" : 8
        },
        {
            "ucName" : "Mughal been",
            "created_at" : "2019-04-17T10:59:46Z",
            "updated_at" : "2019-04-17T10:59:46Z",
            "isActive" : 1,
            "tehsil_id" : 8
        },
        {
            "ucName" : "Mureed Khoso",
            "created_at" : "2019-04-17T10:59:46Z",
            "updated_at" : "2019-04-17T10:59:46Z",
            "isActive" : 1,
            "tehsil_id" : 8
        },
        {
            "ucName" : "Bachal Gugho",
            "created_at" : "2019-04-17T11:00:08Z",
            "updated_at" : "2019-04-17T11:00:08Z",
            "isActive" : 1,
            "tehsil_id" : 14
        },
        {
            "ucName" : "Banu",
            "created_at" : "2019-04-17T11:00:08Z",
            "updated_at" : "2019-04-17T11:00:08Z",
            "isActive" : 1,
            "tehsil_id" : 14
        },
        {
            "ucName" : "Darhya Khan Soho",
            "created_at" : "2019-04-17T11:00:08Z",
            "updated_at" : "2019-04-17T11:00:08Z",
            "isActive" : 1,
            "tehsil_id" : 14
        },
        {
            "ucName" : "Darro",
            "created_at" : "2019-04-17T11:00:08Z",
            "updated_at" : "2019-04-17T11:00:08Z",
            "isActive" : 1,
            "tehsil_id" : 14
        },
        {
            "ucName" : "Jhoke Sharif",
            "created_at" : "2019-04-17T11:00:08Z",
            "updated_at" : "2019-04-17T11:00:08Z",
            "isActive" : 1,
            "tehsil_id" : 14
        },
        {
            "ucName" : "Laiqpur",
            "created_at" : "2019-04-17T11:00:08Z",
            "updated_at" : "2019-04-17T11:00:08Z",
            "isActive" : 1,
            "tehsil_id" : 14
        },
        {
            "ucName" : "Mehar Shah",
            "created_at" : "2019-04-17T11:00:08Z",
            "updated_at" : "2019-04-17T11:00:08Z",
            "isActive" : 1,
            "tehsil_id" : 14
        },
        {
            "ucName" : "Mirpur Bathoro",
            "created_at" : "2019-04-17T11:00:08Z",
            "updated_at" : "2019-04-17T11:00:08Z",
            "isActive" : 1,
            "tehsil_id" : 14
        },
        {
            "ucName" : "Choohar Jamali",
            "created_at" : "2019-04-17T11:00:26Z",
            "updated_at" : "2019-04-17T11:00:26Z",
            "isActive" : 1,
            "tehsil_id" : 17
        },
        {
            "ucName" : "Dolatpur",
            "created_at" : "2019-04-17T11:00:26Z",
            "updated_at" : "2019-04-17T11:00:26Z",
            "isActive" : 1,
            "tehsil_id" : 17
        },
        {
            "ucName" : "Googani",
            "created_at" : "2019-04-17T11:00:26Z",
            "updated_at" : "2019-04-17T11:00:26Z",
            "isActive" : 1,
            "tehsil_id" : 17
        },
        {
            "ucName" : "Jungo Jalbani",
            "created_at" : "2019-04-17T11:00:26Z",
            "updated_at" : "2019-04-17T11:00:26Z",
            "isActive" : 1,
            "tehsil_id" : 17
        },
        {
            "ucName" : "Ladyun",
            "created_at" : "2019-04-17T11:00:26Z",
            "updated_at" : "2019-04-17T11:00:26Z",
            "isActive" : 1,
            "tehsil_id" : 17
        },
        {
            "ucName" : "Ali Bahr",
            "created_at" : "2019-04-17T11:00:43Z",
            "updated_at" : "2019-04-17T11:00:43Z",
            "isActive" : 1,
            "tehsil_id" : 19
        },
        {
            "ucName" : "Bello",
            "created_at" : "2019-04-17T11:00:43Z",
            "updated_at" : "2019-04-17T11:00:43Z",
            "isActive" : 1,
            "tehsil_id" : 19
        },
        {
            "ucName" : "Bijora",
            "created_at" : "2019-04-17T11:00:43Z",
            "updated_at" : "2019-04-17T11:00:43Z",
            "isActive" : 1,
            "tehsil_id" : 19
        },
        {
            "ucName" : "Jaar",
            "created_at" : "2019-04-17T11:00:43Z",
            "updated_at" : "2019-04-17T11:00:43Z",
            "isActive" : 1,
            "tehsil_id" : 19
        },
        {
            "ucName" : "Keenjhar",
            "created_at" : "2019-04-17T11:00:43Z",
            "updated_at" : "2019-04-17T11:00:43Z",
            "isActive" : 1,
            "tehsil_id" : 19
        },
        {
            "ucName" : "Sujawal",
            "created_at" : "2019-04-17T11:00:43Z",
            "updated_at" : "2019-04-17T11:00:43Z",
            "isActive" : 1,
            "tehsil_id" : 19
        },
        {
            "ucName" : "Began Jarwar",
            "created_at" : "2019-04-17T11:00:58Z",
            "updated_at" : "2019-04-17T11:00:58Z",
            "isActive" : 1,
            "tehsil_id" : 4
        },
        {
            "ucName" : "Chamber I",
            "created_at" : "2019-04-17T11:00:58Z",
            "updated_at" : "2019-04-17T11:00:58Z",
            "isActive" : 1,
            "tehsil_id" : 4
        },
        {
            "ucName" : "Chamber II",
            "created_at" : "2019-04-17T11:00:58Z",
            "updated_at" : "2019-04-17T11:00:58Z",
            "isActive" : 1,
            "tehsil_id" : 4
        },
        {
            "ucName" : "Dad Jarwar",
            "created_at" : "2019-04-17T11:00:58Z",
            "updated_at" : "2019-04-17T11:00:58Z",
            "isActive" : 1,
            "tehsil_id" : 4
        },
        {
            "ucName" : "Sanjer Chang",
            "created_at" : "2019-04-17T11:00:58Z",
            "updated_at" : "2019-04-17T11:00:58Z",
            "isActive" : 1,
            "tehsil_id" : 4
        },
        {
            "ucName" : "Dasori",
            "created_at" : "2019-04-17T11:01:13Z",
            "updated_at" : "2019-04-17T11:01:13Z",
            "isActive" : 1,
            "tehsil_id" : 9
        },
        {
            "ucName" : "Jhando Mari",
            "created_at" : "2019-04-17T11:01:13Z",
            "updated_at" : "2019-04-17T11:01:13Z",
            "isActive" : 1,
            "tehsil_id" : 9
        },
        {
            "ucName" : "Mir Abad",
            "created_at" : "2019-04-17T11:01:13Z",
            "updated_at" : "2019-04-17T11:01:13Z",
            "isActive" : 1,
            "tehsil_id" : 9
        },
        {
            "ucName" : "Missan",
            "created_at" : "2019-04-17T11:01:13Z",
            "updated_at" : "2019-04-17T11:01:13Z",
            "isActive" : 1,
            "tehsil_id" : 9
        },
        {
            "ucName" : "Piyaro Lund",
            "created_at" : "2019-04-17T11:01:13Z",
            "updated_at" : "2019-04-17T11:01:13Z",
            "isActive" : 1,
            "tehsil_id" : 9
        },
        {
            "ucName" : "Tando Soomro",
            "created_at" : "2019-04-17T11:01:13Z",
            "updated_at" : "2019-04-17T11:01:13Z",
            "isActive" : 1,
            "tehsil_id" : 9
        },
        {
            "ucName" : "Bukera Sharif",
            "created_at" : "2019-04-17T11:01:32Z",
            "updated_at" : "2019-04-17T11:01:32Z",
            "isActive" : 1,
            "tehsil_id" : 20
        },
        {
            "ucName" : "Dhingano Bozdar",
            "created_at" : "2019-04-17T11:01:32Z",
            "updated_at" : "2019-04-17T11:01:32Z",
            "isActive" : 1,
            "tehsil_id" : 20
        },
        {
            "ucName" : "Nasar Pur",
            "created_at" : "2019-04-17T11:01:32Z",
            "updated_at" : "2019-04-17T11:01:32Z",
            "isActive" : 1,
            "tehsil_id" : 20
        },
        {
            "ucName" : "Pak Sanghar",
            "created_at" : "2019-04-17T11:01:32Z",
            "updated_at" : "2019-04-17T11:01:32Z",
            "isActive" : 1,
            "tehsil_id" : 20
        },
        {
            "ucName" : "Shaikh Moosa",
            "created_at" : "2019-04-17T11:01:32Z",
            "updated_at" : "2019-04-17T11:01:32Z",
            "isActive" : 1,
            "tehsil_id" : 20
        },
        {
            "ucName" : "Tando Allahyar I",
            "created_at" : "2019-04-17T11:01:32Z",
            "updated_at" : "2019-04-17T11:01:32Z",
            "isActive" : 1,
            "tehsil_id" : 20
        },
        {
            "ucName" : "Tando Allahyar II",
            "created_at" : "2019-04-17T11:01:32Z",
            "updated_at" : "2019-04-17T11:01:32Z",
            "isActive" : 1,
            "tehsil_id" : 20
        },
        {
            "ucName" : "Tando Allahyar III",
            "created_at" : "2019-04-17T11:01:32Z",
            "updated_at" : "2019-04-17T11:01:32Z",
            "isActive" : 1,
            "tehsil_id" : 20
        },
        {
            "ucName" : "Tando Allahyar IV",
            "created_at" : "2019-04-17T11:01:32Z",
            "updated_at" : "2019-04-17T11:01:32Z",
            "isActive" : 1,
            "tehsil_id" : 20
        },
        {
            "ucName" : "Garho",
            "created_at" : "2019-04-17T11:01:50Z",
            "updated_at" : "2019-04-17T11:01:50Z",
            "isActive" : 1,
            "tehsil_id" : 6
        },
        {
            "ucName" : "Khann",
            "created_at" : "2019-04-17T11:01:50Z",
            "updated_at" : "2019-04-17T11:01:50Z",
            "isActive" : 1,
            "tehsil_id" : 6
        },
        {
            "ucName" : "Kotri Allah Rakhio Shah",
            "created_at" : "2019-04-17T11:01:50Z",
            "updated_at" : "2019-04-17T11:01:50Z",
            "isActive" : 1,
            "tehsil_id" : 6
        },
        {
            "ucName" : "Mehar",
            "created_at" : "2019-04-17T11:01:50Z",
            "updated_at" : "2019-04-17T11:01:50Z",
            "isActive" : 1,
            "tehsil_id" : 6
        },
        {
            "ucName" : "Udasi",
            "created_at" : "2019-04-17T11:01:50Z",
            "updated_at" : "2019-04-17T11:01:50Z",
            "isActive" : 1,
            "tehsil_id" : 6
        },
        {
            "ucName" : "Keti Bandar",
            "created_at" : "2019-04-17T11:02:07Z",
            "updated_at" : "2019-04-17T11:02:07Z",
            "isActive" : 1,
            "tehsil_id" : 11
        },
        {
            "ucName" : "Kharo Chann",
            "created_at" : "2019-04-17T11:02:07Z",
            "updated_at" : "2019-04-17T11:02:07Z",
            "isActive" : 1,
            "tehsil_id" : 11
        },
        {
            "ucName" : "Boohara",
            "created_at" : "2019-04-17T11:02:23Z",
            "updated_at" : "2019-04-17T11:02:23Z",
            "isActive" : 1,
            "tehsil_id" : 15
        },
        {
            "ucName" : "Chow Bandi",
            "created_at" : "2019-04-17T11:02:23Z",
            "updated_at" : "2019-04-17T11:02:23Z",
            "isActive" : 1,
            "tehsil_id" : 15
        },
        {
            "ucName" : "Dhabejee",
            "created_at" : "2019-04-17T11:02:23Z",
            "updated_at" : "2019-04-17T11:02:23Z",
            "isActive" : 1,
            "tehsil_id" : 15
        },
        {
            "ucName" : "Gharo",
            "created_at" : "2019-04-17T11:02:23Z",
            "updated_at" : "2019-04-17T11:02:23Z",
            "isActive" : 1,
            "tehsil_id" : 15
        },
        {
            "ucName" : "Ghulamullah",
            "created_at" : "2019-04-17T11:02:23Z",
            "updated_at" : "2019-04-17T11:02:23Z",
            "isActive" : 1,
            "tehsil_id" : 15
        },
        {
            "ucName" : "Gujjo",
            "created_at" : "2019-04-17T11:02:23Z",
            "updated_at" : "2019-04-17T11:02:23Z",
            "isActive" : 1,
            "tehsil_id" : 15
        },
        {
            "ucName" : "Haji Ghirano",
            "created_at" : "2019-04-17T11:02:23Z",
            "updated_at" : "2019-04-17T11:02:23Z",
            "isActive" : 1,
            "tehsil_id" : 15
        },
        {
            "ucName" : "Karampur",
            "created_at" : "2019-04-17T11:02:23Z",
            "updated_at" : "2019-04-17T11:02:23Z",
            "isActive" : 1,
            "tehsil_id" : 15
        },
        {
            "ucName" : "Mirpur Sakro",
            "created_at" : "2019-04-17T11:02:23Z",
            "updated_at" : "2019-04-17T11:02:23Z",
            "isActive" : 1,
            "tehsil_id" : 15
        },
        {
            "ucName" : "Sukhpur",
            "created_at" : "2019-04-17T11:02:23Z",
            "updated_at" : "2019-04-17T11:02:23Z",
            "isActive" : 1,
            "tehsil_id" : 15
        },
        {
            "ucName" : "Chatto Chand",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        },
        {
            "ucName" : "Doomani",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        },
        {
            "ucName" : "Jhirck",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        },
        {
            "ucName" : "Jhumpir",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        },
        {
            "ucName" : "Jungshahi",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        },
        {
            "ucName" : "Kala Kot",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        },
        {
            "ucName" : "Kalri",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        },
        {
            "ucName" : "Makali",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        },
        {
            "ucName" : "Ongar",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        },
        {
            "ucName" : "Sonda",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        },
        {
            "ucName" : "Tando Hafiz Shah",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        },
        {
            "ucName" : "Thatta 1",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        },
        {
            "ucName" : "Thatta 2",
            "created_at" : "2019-04-17T11:02:39Z",
            "updated_at" : "2019-04-17T11:02:39Z",
            "isActive" : 1,
            "tehsil_id" : 21
        }
    ]);
    });
};
