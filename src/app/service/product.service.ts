import { Injectable } from '@angular/core';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      'Ziifgoweyl',
      'assets/img/headphone.jpg',
      8345,
      7093,
      'Siemens',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Gvikczjxpz',
      'assets/img/headphone.jpg',
      2935,
      2142,
      'Beats',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Wditvtrjjx',
      'assets/img/headphone.jpg',
      3280,
      2460,
      'Siemens',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Zlijjitnox',
      'assets/img/headphone.jpg',
      6480,
      4082,
      'Samsung',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Ztsyvinnbb',
      'assets/img/headphone.jpg',
      6109,
      3482,
      'Apple',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Axkwsivfdb',
      'assets/img/headphone.jpg',
      7294,
      5981,
      'Beats',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Miocgxuzaa',
      'assets/img/headphone.jpg',
      5781,
      3584,
      'Apple',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Gnqjjteypz',
      'assets/img/headphone.jpg',
      9417,
      6497,
      'Samsung',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Jlbjljoefg',
      'assets/img/headphone.jpg',
      1773,
      1666,
      'Samsung',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Snpjbglhyw',
      'assets/img/headphone.jpg',
      7741,
      6889,
      'Samsung',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Xmuitegilp',
      'assets/img/headphone.jpg',
      1846,
      1181,
      'Apple',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Zehbhsjsgh',
      'assets/img/headphone.jpg',
      8459,
      5498,
      'Apple',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Jgmfsukaio',
      'assets/img/headphone.jpg',
      8170,
      6617,
      'Beats',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Xfjrdniyqg',
      'assets/img/headphone.jpg',
      9168,
      6600,
      'Samsung',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Bldywkipwk',
      'assets/img/headphone.jpg',
      670,
      522,
      'Apple',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Aluzkeaorw',
      'assets/img/headphone.jpg',
      5137,
      4006,
      'Samsung',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Pcbceatdib',
      'assets/img/headphone.jpg',
      5920,
      3907,
      'Siemens',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Ismavjngeq',
      'assets/img/headphone.jpg',
      9713,
      9130,
      'Apple',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Hduercbxyh',
      'assets/img/headphone.jpg',
      9640,
      8194,
      'Beats',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Ojpqhgsmvg',
      'assets/img/headphone.jpg',
      6376,
      5292,
      'Samsung',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Kgcjhsxmhi',
      'assets/img/headphone.jpg',
      9864,
      8877,
      'Siemens',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Sjeabpjeoi',
      'assets/img/headphone.jpg',
      3448,
      1827,
      'Apple',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Dwzdkwfzdg',
      'assets/img/headphone.jpg',
      9700,
      7954,
      'Apple',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Yhxmuyddmy',
      'assets/img/headphone.jpg',
      4653,
      3908,
      'Beats',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Xbstgorcxt',
      'assets/img/headphone.jpg',
      3296,
      2702,
      'Samsung',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Etghlrpttw',
      'assets/img/headphone.jpg',
      7308,
      6431,
      'Beats',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Szjlpkqjhs',
      'assets/img/headphone.jpg',
      9499,
      9404,
      'Siemens',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Ockknpkbvu',
      'assets/img/headphone.jpg',
      10194,
      9990,
      'Siemens',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Wpeefnpkux',
      'assets/img/headphone.jpg',
      3021,
      2598,
      'Apple',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Xxmgcfzhyj',
      'assets/img/headphone.jpg',
      9781,
      9487,
      'Samsung',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Htnjcjndeg',
      'assets/img/headphone.jpg',
      9386,
      5162,
      'Apple',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Zddovwgyfy',
      'assets/img/headphone.jpg',
      6142,
      3562,
      'Samsung',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Utqdxxcyfl',
      'assets/img/headphone.jpg',
      3409,
      2215,
      'Apple',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Gsihednrnq',
      'assets/img/headphone.jpg',
      8444,
      4644,
      'Beats',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Ivwtqccbfd',
      'assets/img/headphone.jpg',
      9500,
      8835,
      'Apple',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Lrrkomclnl',
      'assets/img/headphone.jpg',
      669,
      582,
      'Beats',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Baxmotmvqr',
      'assets/img/headphone.jpg',
      8600,
      7052,
      'Siemens',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Wqwflavlga',
      'assets/img/headphone.jpg',
      7833,
      7441,
      'Samsung',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Svbpwsnlou',
      'assets/img/headphone.jpg',
      7939,
      4445,
      'Samsung',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Fenfyxjfwx',
      'assets/img/headphone.jpg',
      520,
      358,
      'Beats',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Gjlflopgbl',
      'assets/img/headphone.jpg',
      7145,
      5287,
      'Samsung',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Zxusznzikc',
      'assets/img/headphone.jpg',
      1351,
      1067,
      'Samsung',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Opbrjdboyd',
      'assets/img/headphone.jpg',
      2032,
      1320,
      'Samsung',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Ntvfbrppsh',
      'assets/img/headphone.jpg',
      4821,
      2603,
      'Siemens',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Ldufaglyjy',
      'assets/img/headphone.jpg',
      2153,
      1141,
      'Siemens',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Kvgpzlehep',
      'assets/img/headphone.jpg',
      2457,
      1916,
      'Beats',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Phzkcogwny',
      'assets/img/headphone.jpg',
      5672,
      5331,
      'Siemens',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Jiczvjpbst',
      'assets/img/headphone.jpg',
      6982,
      5655,
      'Samsung',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Pzlscmxyks',
      'assets/img/headphone.jpg',
      873,
      515,
      'Beats',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Yqordwevhz',
      'assets/img/headphone.jpg',
      4605,
      3223,
      'Beats',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Vhjatgeqnw',
      'assets/img/headphone.jpg',
      8186,
      5975,
      'Beats',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Otjmudqgxo',
      'assets/img/headphone.jpg',
      3982,
      2508,
      'Samsung',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Tobtvcpfnq',
      'assets/img/headphone.jpg',
      9232,
      8955,
      'Apple',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Flkyaxfzcs',
      'assets/img/headphone.jpg',
      6715,
      4633,
      'Beats',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Lnhzbrgsok',
      'assets/img/headphone.jpg',
      2657,
      2550,
      'Siemens',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Ujwgaoljwx',
      'assets/img/headphone.jpg',
      9016,
      8024,
      'Siemens',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Htvongpzmt',
      'assets/img/headphone.jpg',
      3232,
      1745,
      'Siemens',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Zvubyasksc',
      'assets/img/headphone.jpg',
      5912,
      5143,
      'Siemens',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Zxikdaqbts',
      'assets/img/headphone.jpg',
      2046,
      1882,
      'Apple',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Hwaufnzsjx',
      'assets/img/headphone.jpg',
      7071,
      6363,
      'Beats',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Azteueirwz',
      'assets/img/headphone.jpg',
      7474,
      6950,
      'Siemens',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Nmzbnjdykl',
      'assets/img/headphone.jpg',
      879,
      518,
      'Samsung',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Iqpezzygzb',
      'assets/img/headphone.jpg',
      3860,
      2470,
      'Samsung',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Kqovzrhznc',
      'assets/img/headphone.jpg',
      3499,
      2939,
      'Beats',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Bqkjcrrzle',
      'assets/img/headphone.jpg',
      2171,
      1280,
      'Beats',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Gfuzrdophd',
      'assets/img/headphone.jpg',
      5310,
      5097,
      'Siemens',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Bzxuxvmnqr',
      'assets/img/headphone.jpg',
      5739,
      4132,
      'Beats',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Qblfbbipvc',
      'assets/img/headphone.jpg',
      1280,
      1062,
      'Samsung',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Tlcsgvqwtx',
      'assets/img/headphone.jpg',
      1033,
      640,
      'Beats',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Hsessknanm',
      'assets/img/headphone.jpg',
      7543,
      4601,
      'Samsung',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Dyddgkbcoa',
      'assets/img/headphone.jpg',
      656,
      596,
      'Beats',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Xvwoaqvkib',
      'assets/img/headphone.jpg',
      8325,
      4495,
      'Beats',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Jxelvcjjgi',
      'assets/img/headphone.jpg',
      1019,
      784,
      'Beats',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Hoqifraeeu',
      'assets/img/headphone.jpg',
      9234,
      6925,
      'Siemens',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Ygkfoqtlan',
      'assets/img/headphone.jpg',
      3046,
      2254,
      'Apple',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Tohydpjyhh',
      'assets/img/headphone.jpg',
      9588,
      5177,
      'Beats',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Nixenwtbcy',
      'assets/img/headphone.jpg',
      3726,
      1937,
      'Samsung',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Rxzukwlxhb',
      'assets/img/headphone.jpg',
      2103,
      1156,
      'Apple',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Npngseazyt',
      'assets/img/headphone.jpg',
      6098,
      5122,
      'Siemens',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Mhorwzkhvg',
      'assets/img/headphone.jpg',
      7035,
      4291,
      'Samsung',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Omehhkvffg',
      'assets/img/headphone.jpg',
      7424,
      6236,
      'Samsung',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Fjwkgkzata',
      'assets/img/headphone.jpg',
      7002,
      3921,
      'Apple',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Aqexqhzzdh',
      'assets/img/headphone.jpg',
      5050,
      2878,
      'Beats',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Mgvpqapqud',
      'assets/img/headphone.jpg',
      2761,
      1656,
      'Apple',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Vwmyeyzcrx',
      'assets/img/headphone.jpg',
      10464,
      7952,
      'Apple',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Qipayikvxv',
      'assets/img/headphone.jpg',
      6467,
      4914,
      'Siemens',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Bdcqhzdilm',
      'assets/img/headphone.jpg',
      6678,
      6076,
      'Siemens',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Szoguywxkq',
      'assets/img/headphone.jpg',
      3503,
      3047,
      'Samsung',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Jqelpdictm',
      'assets/img/headphone.jpg',
      4291,
      2746,
      'Beats',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Ebvqiiqcgc',
      'assets/img/headphone.jpg',
      9590,
      9494,
      'Beats',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Qtwdcupmcl',
      'assets/img/headphone.jpg',
      3928,
      2592,
      'Beats',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Mdzeefknfz',
      'assets/img/headphone.jpg',
      10166,
      9556,
      'Apple',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Wvxnyraqcj',
      'assets/img/headphone.jpg',
      8835,
      5035,
      'Siemens',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Anfsisvuus',
      'assets/img/headphone.jpg',
      7738,
      5029,
      'Apple',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Denxvyueny',
      'assets/img/headphone.jpg',
      9694,
      6301,
      'Siemens',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Mlqlziuijy',
      'assets/img/headphone.jpg',
      993,
      714,
      'Siemens',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Pihjtcjdhn',
      'assets/img/headphone.jpg',
      7859,
      6601,
      'Beats',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Oocaqqhmzv',
      'assets/img/headphone.jpg',
      1423,
      1024,
      'Siemens',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Biklekbgsi',
      'assets/img/headphone.jpg',
      10021,
      8918,
      'Siemens',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Rvxxyyupti',
      'assets/img/headphone.jpg',
      4605,
      3407,
      'Beats',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Qydbmhgjfe',
      'assets/img/headphone.jpg',
      10146,
      7710,
      'Apple',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Aaruzakuqd',
      'assets/img/headphone.jpg',
      10187,
      6315,
      'Samsung',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Mkqxdohbxw',
      'assets/img/headphone.jpg',
      7959,
      5571,
      'Samsung',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Xigodecxoc',
      'assets/img/headphone.jpg',
      10173,
      8850,
      'Beats',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Xsymhujcrz',
      'assets/img/headphone.jpg',
      1143,
      857,
      'Samsung',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Rupaewfzto',
      'assets/img/headphone.jpg',
      7663,
      5440,
      'Siemens',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Rdwdrffuvn',
      'assets/img/headphone.jpg',
      2451,
      1862,
      'Beats',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Qsuocylsgo',
      'assets/img/headphone.jpg',
      8759,
      6744,
      'Siemens',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Awfkifyljq',
      'assets/img/headphone.jpg',
      8651,
      5969,
      'Samsung',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Hqdrxhyutu',
      'assets/img/headphone.jpg',
      8492,
      6538,
      'Samsung',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Odpedlpnrj',
      'assets/img/headphone.jpg',
      9604,
      9123,
      'Beats',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Rufkwgrfqn',
      'assets/img/headphone.jpg',
      10130,
      9015,
      'Beats',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Djrwbbbwrt',
      'assets/img/headphone.jpg',
      1889,
      1152,
      'Samsung',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Zbzyimkpes',
      'assets/img/headphone.jpg',
      1334,
      920,
      'Siemens',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Vfxaheduxg',
      'assets/img/headphone.jpg',
      5355,
      2945,
      'Samsung',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Yxphjuqusc',
      'assets/img/headphone.jpg',
      4901,
      3871,
      'Beats',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Quaipejntr',
      'assets/img/headphone.jpg',
      1326,
      1140,
      'Samsung',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Otuzwufklx',
      'assets/img/headphone.jpg',
      2963,
      1955,
      'Apple',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Zjfnkfoyxx',
      'assets/img/headphone.jpg',
      9194,
      8826,
      'Samsung',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Whmzjutbma',
      'assets/img/headphone.jpg',
      5400,
      4698,
      'Beats',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Jumroxxctl',
      'assets/img/headphone.jpg',
      8734,
      5065,
      'Samsung',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Opvcdbpjxm',
      'assets/img/headphone.jpg',
      7583,
      4777,
      'Samsung',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Fnvnmcholg',
      'assets/img/headphone.jpg',
      4387,
      4343,
      'Siemens',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Akzjzlxuim',
      'assets/img/headphone.jpg',
      958,
      651,
      'Apple',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Dbkghamjtl',
      'assets/img/headphone.jpg',
      4526,
      4526,
      'Samsung',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Ufxqxggrov',
      'assets/img/headphone.jpg',
      2206,
      1323,
      'Apple',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Tsmzkdovfl',
      'assets/img/headphone.jpg',
      6396,
      5116,
      'Apple',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Xsowxibqsk',
      'assets/img/headphone.jpg',
      1025,
      625,
      'Apple',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Cuumbsvnts',
      'assets/img/headphone.jpg',
      6115,
      4341,
      'Samsung',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Zhqhogealr',
      'assets/img/headphone.jpg',
      5472,
      3775,
      'Samsung',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Bfohovvdhr',
      'assets/img/headphone.jpg',
      4230,
      3172,
      'Beats',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Dxknmvnlwb',
      'assets/img/headphone.jpg',
      6731,
      4980,
      'Apple',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Xwyhdithpu',
      'assets/img/headphone.jpg',
      10022,
      9921,
      'Beats',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Jyitdsduei',
      'assets/img/headphone.jpg',
      9722,
      8847,
      'Beats',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Haajuhfwnj',
      'assets/img/headphone.jpg',
      7228,
      5565,
      'Beats',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Dfbshazaik',
      'assets/img/headphone.jpg',
      1445,
      1011,
      'Beats',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Tbyqxqvxmw',
      'assets/img/headphone.jpg',
      5682,
      3636,
      'Samsung',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Iixtwcqtwb',
      'assets/img/headphone.jpg',
      3662,
      2966,
      'Samsung',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Pgoqiauznu',
      'assets/img/headphone.jpg',
      6872,
      3848,
      'Apple',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Lqooaeidgu',
      'assets/img/headphone.jpg',
      3160,
      2306,
      'Siemens',
      'Wheat',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Aarejqdwee',
      'assets/img/headphone.jpg',
      5990,
      5870,
      'Apple',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Rhmrcujrhq',
      'assets/img/headphone.jpg',
      5523,
      3645,
      'Siemens',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Uiixvhlpjf',
      'assets/img/headphone.jpg',
      2373,
      1471,
      'Siemens',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Oykcjwrtzj',
      'assets/img/headphone.jpg',
      6768,
      5685,
      'Siemens',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Pgsyxbjyki',
      'assets/img/headphone.jpg',
      802,
      665,
      'Beats',
      'Yellow',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Albelcumtj',
      'assets/img/headphone.jpg',
      10218,
      9196,
      'Siemens',
      'Pink',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Cruejaddvb',
      'assets/img/headphone.jpg',
      10277,
      9865,
      'Beats',
      'Black',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Lhffhtmdir',
      'assets/img/headphone.jpg',
      6966,
      4458,
      'Beats',
      'Blue',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Lzimohhhra',
      'assets/img/headphone.jpg',
      1490,
      1072,
      'Samsung',
      'Red',
      'assets/img/stars.JPG'
    ),
    new Product(
      'Lxicgsreai',
      'assets/img/headphone.jpg',
      8458,
      8119,
      'Apple',
      'Red',
      'assets/img/stars.JPG'
    ),
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
