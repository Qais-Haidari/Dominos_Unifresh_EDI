const _0x19ae6d = _0x5b2e;
(function (_0xcce445, _0x4cd213) {
  const _0x2a4969 = _0x5b2e, _0xc52e85 = _0xcce445();
  while (true) {
    try {
      const _0x43008f = -parseInt(_0x2a4969(434)) / 1 * (parseInt(_0x2a4969(496)) / 2) + parseInt(_0x2a4969(424)) / 3 + -parseInt(_0x2a4969(468)) / 4 + -parseInt(_0x2a4969(427)) / 5 * (-parseInt(_0x2a4969(455)) / 6) + -parseInt(_0x2a4969(474)) / 7 * (-parseInt(_0x2a4969(397)) / 8) + -parseInt(_0x2a4969(485)) / 9 + parseInt(_0x2a4969(462)) / 10;
      if (_0x43008f === _0x4cd213) break; else _0xc52e85.push(_0xc52e85.shift());
    } catch (_0x46d7f6) {
      _0xc52e85.push(_0xc52e85.shift());
    }
  }
}(_0x2173, 521039));
const PDFDocument = require(_0x19ae6d(372)), doc = new PDFDocument, imgToPDF = require(_0x19ae6d(428)), fs = require("fs"), puppeteer = require(_0x19ae6d(446));
let Client = require("ssh2-sftp-client");
function _0x5b2e(_0x50def5, _0x4cace9) {
  const _0x217374 = _0x2173();
  return _0x5b2e = function (_0x5b2eff, _0x22c260) {
    _0x5b2eff = _0x5b2eff - 369;
    let _0x2b3dc0 = _0x217374[_0x5b2eff];
    return _0x2b3dc0;
  }, _0x5b2e(_0x50def5, _0x4cace9);
}
const nodemailer = require(_0x19ae6d(386)), excelToJson = require("convert-excel-to-json"), {off, exit} = require(_0x19ae6d(456)), readTextFile = require(_0x19ae6d(395)), JsonFind = require(_0x19ae6d(471));
var cron = require("node-cron"), parser = require(_0x19ae6d(370));
const {XMLParser, XMLBuilder, XMLValidator} = require(_0x19ae6d(393)), {join} = require(_0x19ae6d(425)), axios = require(_0x19ae6d(476)), convert = require(_0x19ae6d(493)), {setInterval} = require(_0x19ae6d(412));
async function order() {
  const _0x3333c3 = _0x19ae6d, _0x50a330 = nodemailer[_0x3333c3(445)]({host: _0x3333c3(469), port: _0x3333c3(439), secureConnection: true, tls: {ciphers: "SSLv3"}, auth: {user: "CustomerService@unifresh.com.au", pass: _0x3333c3(401)}});
  class _0x222eab {
    constructor() {
      const _0x3dadc8 = _0x3333c3;
      this[_0x3dadc8(407)] = new Client;
    }
    async ["connect"](_0x299844) {
      const _0x292568 = _0x3333c3;
      console[_0x292568(483)](_0x292568(392) + _0x299844[_0x292568(436)] + ":" + _0x299844[_0x292568(480)]);
      try {
        await this[_0x292568(407)][_0x292568(423)](_0x299844);
      } catch (_0x5da59e) {
        console[_0x292568(483)](_0x292568(490), _0x5da59e);
      }
    }
    async [_0x3333c3(435)]() {
      const _0x356657 = _0x3333c3;
      await this.client[_0x356657(453)]();
    }
    async ["listFiles"](_0x22906c, _0x303926) {
      const _0x30d44a = _0x3333c3;
      console[_0x30d44a(483)](_0x30d44a(385) + _0x22906c + _0x30d44a(481));
      let _0x122380;
      try {
        _0x122380 = await this.client.list(_0x22906c, _0x303926);
      } catch (_0x212034) {
        console.log(_0x30d44a(497), _0x212034);
      }
      const _0xd81088 = [];
      _0x122380 == undefined && setInterval(() => {
        order();
      }, 5e4);
      for (const _0x327190 of _0x122380) {
        _0x327190.type === "d" ? console[_0x30d44a(483)](new Date(_0x327190[_0x30d44a(369)])[_0x30d44a(396)]() + _0x30d44a(492) + _0x327190[_0x30d44a(415)]) : console[_0x30d44a(483)](new Date(_0x327190[_0x30d44a(369)]).toISOString() + " " + _0x327190[_0x30d44a(373)] + " " + _0x327190[_0x30d44a(415)]), _0xd81088[_0x30d44a(374)](_0x327190[_0x30d44a(415)]);
      }
      return _0xd81088;
    }
    async ["uploadFile"](_0xca8b76, _0x96a662) {
      const _0x40f6a9 = _0x3333c3;
      console[_0x40f6a9(483)](_0x40f6a9(377) + _0xca8b76 + _0x40f6a9(463) + _0x96a662 + _0x40f6a9(481));
      try {
        await this[_0x40f6a9(407)][_0x40f6a9(402)](_0xca8b76, _0x96a662);
      } catch (_0x2c665c) {
        console[_0x40f6a9(418)](_0x40f6a9(464), _0x2c665c);
      }
    }
    async ["uploadFileFast"](_0x3d2e00, _0x1eb1be) {
      const _0x4c9cd3 = _0x3333c3;
      console[_0x4c9cd3(483)](_0x4c9cd3(377) + _0x3d2e00 + _0x4c9cd3(463) + _0x1eb1be + _0x4c9cd3(481));
      try {
        await this.client[_0x4c9cd3(452)](_0x3d2e00, _0x1eb1be);
      } catch (_0xf1ae36) {
        console[_0x4c9cd3(418)](_0x4c9cd3(464), _0xf1ae36);
      }
    }
    async [_0x3333c3(416)](_0x2a7f60, _0x1e809c) {
      const _0x20be9e = _0x3333c3;
      console[_0x20be9e(483)](_0x20be9e(457) + _0x2a7f60 + _0x20be9e(463) + _0x1e809c + _0x20be9e(481));
      try {
        await this.client[_0x20be9e(403)](_0x2a7f60, _0x1e809c);
      } catch (_0x35dbcc) {
        console.error(_0x20be9e(379), _0x35dbcc);
      }
    }
    async [_0x3333c3(404)](_0x51e4c0) {
      const _0x306fb5 = _0x3333c3;
      console.log(_0x306fb5(430) + _0x51e4c0);
      try {
        await this.client[_0x306fb5(394)](_0x51e4c0);
      } catch (_0x5cb691) {
        console.error(_0x306fb5(420), _0x5cb691);
      }
    }
  }
  const _0x4ecd32 = _0x3333c3(417), _0x225f7f = "22", _0x567658 = "domediuser", _0x220c3a = "domediuser123#@!", _0x5fc091 = new _0x222eab;
  await _0x5fc091[_0x3333c3(423)]({host: _0x4ecd32, port: _0x225f7f, username: _0x567658, password: _0x220c3a});
  const _0x4327de = await _0x5fc091[_0x3333c3(470)](_0x3333c3(405)), _0x1705de = _0x4327de[0];
  if (_0x1705de == undefined) await _0x5fc091[_0x3333c3(435)](), console[_0x3333c3(483)]("No File Found"), setTimeout(() => {
    const _0x3b3f20 = _0x3333c3;
    console[_0x3b3f20(483)]("er"), exit();
  }, 5e3); else {
    await _0x5fc091[_0x3333c3(416)](_0x3333c3(383) + _0x1705de, "./Orders/Inbound/" + _0x1705de), await fs[_0x3333c3(426)]("./Orders/Inbound/" + _0x1705de, "./Orders/ALLFILES/" + _0x1705de, () => {
      const _0x26e95f = _0x3333c3;
      console[_0x26e95f(483)](_0x26e95f(399));
    });
    let _0x100a77, _0xc525f4, _0x46e9be = fs[_0x3333c3(491)](_0x3333c3(473) + _0x1705de);
    const _0x29b1bb = new XMLParser;
    let _0x5a6ca3 = _0x29b1bb.parse(_0x46e9be);
    if (_0x5a6ca3.PO[_0x3333c3(413)] == undefined) {
      await fs.rename(_0x3333c3(473) + _0x1705de, "./Orders/missing list/" + _0x1705de, () => {
        const _0x71c19f = _0x3333c3;
        console.log(_0x71c19f(399));
      }), await _0x5fc091[_0x3333c3(404)](_0x3333c3(383) + _0x1705de);
      var _0x571196 = {from: _0x3333c3(391), to: "technology@unifresh.com.au", subject: _0x3333c3(451), text: _0x3333c3(448) + _0x1705de + "\nOrder File Name: " + _0x1705de};
      _0x50a330[_0x3333c3(444)](_0x571196, function (_0xb8b9df, _0x2d173d) {
        const _0x1903d3 = _0x3333c3;
        _0xb8b9df ? console.log(_0xb8b9df) : console.log(_0x1903d3(390) + _0x2d173d[_0x1903d3(466)]);
      });
      return;
    } else {
      const _0x289819 = _0x5a6ca3.PO[_0x3333c3(388)][_0x3333c3(488)];
      let _0x3a7620 = _0x5a6ca3.PO.SupplyStartDate;
      const _0x1ef7b0 = _0x5a6ca3.PO.POItems.POItem;
      let OrderNumber = _0x5a6ca3.PO.OrderNumber;
      let _0x57287c = [];
      async function _0x589bd0() {
        const _0x39de61 = _0x3333c3;
        let _0x78fb62 = _0x39de61(460) + _0x289819 + _0x39de61(484);
        const _0x2955bd = _0x39de61(431), _0x35e4d9 = await fetch(_0x2955bd, {method: "POST", body: _0x78fb62, headers: {"Content-Type": _0x39de61(438)}});
        _0x35e4d9.json()[_0x39de61(406)](_0x2e3f73 => {
          const _0x28ff26 = _0x39de61;
          let _0x4a2fce = _0x2e3f73[0][_0x28ff26(375)], _0x3295cf = [];
          async function _0x495484() {
            const _0x3a5a61 = _0x28ff26;
            let _0x1722b8 = _0x3a5a61(410) + _0x4a2fce + '\' and\n        CUSTOMERMASTER.CUSTOMER = UF_CUST_SCHEDULES.CUSTOMER and\n        DI.OUTPUTDATE <= CO.OUTPUTDATE + 6 and\n        DI.OUTPUTDATE >= CO.OUTPUTDATE and\n        DE.OUTPUTDATE <= DI.OUTPUTDATE + 6 and\n        DE.OUTPUTDATE >= DI.OUTPUTDATE\n        order by\n        SCHEDGROUP, SMETHOD, UF_CUST_SCHEDULES.CUSTOMER, CO.OUTPUTDATE\n      ) REGULARSCHED\n      left outer join\n      (\n        select UF_SCHEDULES.*,\n        CUSTOMERSCHEDULEGROUPS.CUSTOMERGROUP,\n        CUSTOMERSCHEDULEGROUPS."GROUP"\n        from\n        UF_SCHEDULES,\n        CUSTOMERSCHEDULEGROUPS\n        where\n        CUSTOMERSCHEDULEGROUPS."GROUP" = UF_SCHEDULES.GROUPING\n      ) ALTEREDSCHED on ALTEREDSCHED."GROUP" = REGULARSCHED.SCHEDGROUP and ALTEREDSCHED.SHIPPINGMETHOD = REGULARSCHED.SMETHOD and ALTEREDSCHED.NORMALDISPATCH = REGULARSCHED.DISPATCHDAY\n      where\n      (STATUS is null or STATUS = \'Enabled\')\n      order by\n      SCHEDGROUP, SMETHOD, DISPATCHDAY\n      ) SCHED\n      left outer join\n      (\n          SELECT DISTINCT SIH.* FROM salesinvoiceheader SIH\n              INNER JOIN SALESINVOICELINES SIL ON SIL.INVOICENUMBER=SIH.INVOICENUMBER\n          WHERE\n              SIH.CUSTOMER = \'' + _0x4a2fce + _0x3a5a61(414);
            const _0x4fa1af = _0x3a5a61(431), _0x3983d5 = await fetch(_0x4fa1af, {method: _0x3a5a61(409), body: _0x1722b8, signal: AbortSignal[_0x3a5a61(440)](1e4), headers: {"Content-Type": _0x3a5a61(438)}});
            _0x3983d5.json()[_0x3a5a61(406)](_0x221cc2 => {
              const _0x6da714 = _0x3a5a61;
              let _0x1b5a50, _0x3eb79e;
              if (_0x3a7620[_0x6da714(479)]("-")[_0x6da714(432)]()[_0x6da714(437)]("-").replace(/\-/g, "/").split("")[0] == 0) {
                let _0x316606 = [];
                _0x316606[_0x6da714(374)](_0x3a7620[_0x6da714(479)]("-")[_0x6da714(432)]()[_0x6da714(437)]("-")[_0x6da714(465)](/\-/g, "/")[_0x6da714(479)]("")), _0x316606[0][_0x6da714(467)](), _0x3eb79e = _0x316606[0][_0x6da714(437)]("")[_0x6da714(465)](/\,/g, "");
              } else _0x3eb79e = _0x3a7620[_0x6da714(479)]("-")[_0x6da714(432)]()[_0x6da714(437)]("-")[_0x6da714(465)](/\-/g, "/");
              for (let _0x1332e4 = 0; _0x1332e4 < _0x221cc2[_0x6da714(450)]; _0x1332e4++) {
                const _0x2a9cd7 = _0x221cc2[_0x1332e4];
                _0x2a9cd7[_0x6da714(419)] == _0x3eb79e && (_0x1b5a50 = _0x2a9cd7[_0x6da714(376)]);
              }
              let _0x50b803 = [], _0xb5366a = [], _0x4bcf05 = [], _0x199516 = [], _0x328134 = [], _0x3d79ce = [], _0x5e3bd3 = [];
              if (_0x1ef7b0.length == undefined) {
                if (_0x1ef7b0[_0x6da714(398)] == _0x6da714(478)) _0x50b803.push({Name: _0x6da714(478), Quentity: _0x1ef7b0[_0x6da714(408)], SupplierItemCode: _0x1ef7b0[_0x6da714(429)]}); else {
                  if (_0x1ef7b0.SupplierItemDescription == _0x6da714(459)) _0x50b803[_0x6da714(374)]({Name: _0x6da714(459), Quentity: _0x1ef7b0.OrderedQuantity, SupplierItemCode: _0x1ef7b0.SupplierItemCode}); else {
                    if (_0x1ef7b0[_0x6da714(398)] == "Mushrooms") _0x50b803.push({Name: _0x6da714(378), Quentity: _0x1ef7b0.OrderedQuantity, SupplierItemCode: _0x1ef7b0[_0x6da714(429)]}); else {
                      if (_0x1ef7b0[_0x6da714(398)] == _0x6da714(454)) _0x50b803[_0x6da714(374)]({Name: _0x6da714(454), Quentity: _0x1ef7b0[_0x6da714(408)], SupplierItemCode: _0x1ef7b0[_0x6da714(429)]}); else {
                        if (_0x1ef7b0[_0x6da714(398)] == _0x6da714(458)) _0x50b803[_0x6da714(374)]({Name: _0x6da714(458), Quentity: _0x1ef7b0[_0x6da714(408)], SupplierItemCode: _0x1ef7b0[_0x6da714(429)]}); else {
                          if (_0x1ef7b0[_0x6da714(398)] == _0x6da714(382)) _0x50b803[_0x6da714(374)]({Name: "Spring Onion", Quentity: _0x1ef7b0[_0x6da714(408)], SupplierItemCode: _0x1ef7b0.SupplierItemCode}); else {}
                        }
                      }
                    }
                  }
                }
              } else for (let _0x8df957 = 0; _0x8df957 < _0x1ef7b0[_0x6da714(450)]; _0x8df957++) {
                if (_0x1ef7b0[_0x8df957].SupplierItemDescription == _0x6da714(478)) _0x50b803[_0x6da714(374)]({Name: _0x6da714(478), Quentity: _0x1ef7b0[_0x8df957][_0x6da714(408)], SupplierItemCode: _0x1ef7b0[_0x8df957][_0x6da714(429)]}); else {
                  if (_0x1ef7b0[_0x8df957][_0x6da714(398)] == "Capsicum") _0x50b803[_0x6da714(374)]({Name: _0x6da714(459), Quentity: _0x1ef7b0[_0x8df957][_0x6da714(408)], SupplierItemCode: _0x1ef7b0[_0x8df957].SupplierItemCode}); else {
                    if (_0x1ef7b0[_0x8df957][_0x6da714(398)] == _0x6da714(378)) _0x50b803.push({Name: _0x6da714(378), Quentity: _0x1ef7b0[_0x8df957][_0x6da714(408)], SupplierItemCode: _0x1ef7b0[_0x8df957][_0x6da714(429)]}); else {
                      if (_0x1ef7b0[_0x8df957][_0x6da714(398)] == "Onions Red") _0x50b803[_0x6da714(374)]({Name: _0x6da714(454), Quentity: _0x1ef7b0[_0x8df957][_0x6da714(408)], SupplierItemCode: _0x1ef7b0[_0x8df957].SupplierItemCode}); else {
                        if (_0x1ef7b0[_0x8df957][_0x6da714(398)] == _0x6da714(458)) _0x50b803[_0x6da714(374)]({Name: _0x6da714(458), Quentity: _0x1ef7b0[_0x8df957][_0x6da714(408)], SupplierItemCode: _0x1ef7b0[_0x8df957][_0x6da714(429)]}); else {
                          if (_0x1ef7b0[_0x8df957].SupplierItemDescription == "Spring Onion") _0x50b803[_0x6da714(374)]({Name: _0x6da714(382), Quentity: _0x1ef7b0[_0x8df957][_0x6da714(408)], SupplierItemCode: _0x1ef7b0[_0x8df957].SupplierItemCode}); else {}
                        }
                      }
                    }
                  }
                }
              }
              if (!_0x1b5a50) {
                let _0x1f00ab = _0x6da714(486) + _0x289819 + _0x6da714(443) + _0x4a2fce + _0x6da714(371) + _0x3eb79e + _0x6da714(389);
                for (let _0x53ed3b = 0; _0x53ed3b < _0x50b803.length; _0x53ed3b++) {
                  const _0x399c85 = _0x50b803[_0x53ed3b];
                  let _0x5c7a05 = _0x6da714(495) + _0x399c85.SupplierItemCode + _0x6da714(411) + _0x399c85[_0x6da714(442)] + "&";
                  _0x1f00ab += _0x5c7a05;
                }
                axios.get(_0x1f00ab)[_0x6da714(406)](async _0x593f0c => {
                  const _0x250e8c = _0x6da714, _0x5144df = JSON[_0x250e8c(381)](convert.xml2json(_0x593f0c.data, {compact: true}));
                  if (_0x5144df.xml[_0x250e8c(387)][_0x250e8c(447)] == _0x250e8c(475)) {
                    var _0x4cddbe = {from: "CustomerService@unifresh.com.au", to: _0x250e8c(441), subject: _0x250e8c(494), html: _0x250e8c(461) + _0x4a2fce + _0x250e8c(477) + _0x3eb79e + _0x250e8c(400) + _0x5144df.xml[_0x250e8c(380)]._text + _0x250e8c(421) + (_0x50b803[0] == undefined ? "" : _0x50b803[0][_0x250e8c(498)]) + _0x250e8c(482) + (_0x50b803[0] == undefined ? "" : _0x50b803[0].Quentity) + _0x250e8c(384) + (_0x50b803[1] == undefined ? "" : _0x50b803[1][_0x250e8c(498)]) + _0x250e8c(482) + (_0x50b803[1] == undefined ? "" : _0x50b803[1][_0x250e8c(442)]) + "</td>\n    </tr>\n    <tr>\n      <td>" + (_0x50b803[2] == undefined ? "" : _0x50b803[2][_0x250e8c(498)]) + "</td>\n      <td>" + (_0x50b803[2] == undefined ? "" : _0x50b803[2][_0x250e8c(442)]) + _0x250e8c(384) + (_0x50b803[3] == undefined ? "" : _0x50b803[3][_0x250e8c(498)]) + _0x250e8c(482) + (_0x50b803[3] == undefined ? "" : _0x50b803[3][_0x250e8c(442)]) + _0x250e8c(384) + (_0x50b803[4] == undefined ? "" : _0x50b803[4][_0x250e8c(498)]) + "</td>\n      <td>" + (_0x50b803[4] == undefined ? "" : _0x50b803[4][_0x250e8c(442)]) + _0x250e8c(422) + (_0x50b803[5] == undefined ? "" : _0x50b803[5][_0x250e8c(498)]) + _0x250e8c(482) + (_0x50b803[5] == undefined ? "" : _0x50b803[5].Quentity) + _0x250e8c(489)};
                    _0x50a330[_0x250e8c(444)](_0x4cddbe, function (_0x3e9c93, _0x3a2d62) {
                      const _0x2fb0bd = _0x250e8c;
                      _0x3e9c93 ? console[_0x2fb0bd(483)](_0x3e9c93) : console.log(_0x2fb0bd(390) + _0x3a2d62[_0x2fb0bd(466)]);
                    }), await fs[_0x250e8c(426)](_0x250e8c(473) + _0x1705de, _0x250e8c(449) + _0x1705de, () => {
                      const _0x223f88 = _0x250e8c;
                      console[_0x223f88(483)](_0x223f88(399));
                    }), await _0x5fc091[_0x250e8c(404)](_0x250e8c(383) + _0x1705de), setTimeout(() => {
                      exit();
                    }, 2e3);
                  } else console[_0x250e8c(483)](_0x593f0c);
                }).catch(_0xf985f => console.log(_0xf985f));
              } else {
                let _0x43443f = "http://sw.unifresh.com.au:8855/?script=onlineorderingtester&customer=" + _0x4a2fce + "&requireddate=" + _0x1b5a50 + "&ponum=" + OrderNumber + "&notes=Production&";
                for (let _0x2dc431 = 0; _0x2dc431 < _0x50b803[_0x6da714(450)]; _0x2dc431++) {
                  const _0x2cf8e4 = _0x50b803[_0x2dc431];
                  let _0x12a4e8 = _0x6da714(495) + _0x2cf8e4[_0x6da714(429)] + _0x6da714(411) + _0x2cf8e4[_0x6da714(442)] + "&";
                  _0x43443f += _0x12a4e8;
                }
                axios[_0x6da714(403)](_0x43443f)[_0x6da714(406)](async _0x2459dd => {
                  const _0x226783 = _0x6da714, _0xad9bd9 = JSON[_0x226783(381)](convert[_0x226783(433)](_0x2459dd.data, {compact: true}));
                  if (_0xad9bd9.xml[_0x226783(387)][_0x226783(447)] == _0x226783(475)) {
                    var _0x2d746b = {from: _0x226783(391), to: _0x226783(441), subject: "Dominos Ordering", html: _0x226783(461) + _0x4a2fce + "</h4>\n<h4>Required Date: " + _0x1b5a50 + "</h4>\n<h4>Unifresh Invoice Number: " + _0xad9bd9[_0x226783(472)].invoice[_0x226783(447)] + '</h4>\n\n<table id="customers">\n  <tr>\n    <th>Item Code</th>\n    <th>Quantity</th>\n  </tr>\n    <tr>\n      <td>' + (_0x50b803[0] == undefined ? "" : _0x50b803[0].Name) + _0x226783(482) + (_0x50b803[0] == undefined ? "" : _0x50b803[0].Quentity) + _0x226783(384) + (_0x50b803[1] == undefined ? "" : _0x50b803[1][_0x226783(498)]) + _0x226783(482) + (_0x50b803[1] == undefined ? "" : _0x50b803[1][_0x226783(442)]) + _0x226783(384) + (_0x50b803[2] == undefined ? "" : _0x50b803[2][_0x226783(498)]) + "</td>\n      <td>" + (_0x50b803[2] == undefined ? "" : _0x50b803[2][_0x226783(442)]) + "</td>\n    </tr>\n    <tr>\n      <td>" + (_0x50b803[3] == undefined ? "" : _0x50b803[3][_0x226783(498)]) + _0x226783(482) + (_0x50b803[3] == undefined ? "" : _0x50b803[3][_0x226783(442)]) + _0x226783(384) + (_0x50b803[4] == undefined ? "" : _0x50b803[4][_0x226783(498)]) + _0x226783(482) + (_0x50b803[4] == undefined ? "" : _0x50b803[4][_0x226783(442)]) + _0x226783(422) + (_0x50b803[5] == undefined ? "" : _0x50b803[5].Name) + _0x226783(482) + (_0x50b803[5] == undefined ? "" : _0x50b803[5][_0x226783(442)]) + "</td>\n    </tr>\n</table>\n\n</body>\n</html>\n                "};
                    _0x50a330[_0x226783(444)](_0x2d746b, function (_0x45ad55, _0x3a1f78) {
                      const _0x139773 = _0x226783;
                      _0x45ad55 ? console[_0x139773(483)](_0x45ad55) : console[_0x139773(483)](_0x139773(390) + _0x3a1f78[_0x139773(466)]);
                    }), await fs.rename(_0x226783(473) + _0x1705de, "./Orders/outbound/" + _0x1705de, () => {
                      const _0x4da282 = _0x226783;
                      console[_0x4da282(483)]("success");
                    }), await _0x5fc091[_0x226783(404)]("./uploads/" + _0x1705de), setTimeout(() => {
                      exit();
                    }, 2e3);
                  } else console[_0x226783(483)](_0x2459dd);
                })[_0x6da714(487)](_0x4e738d => console[_0x6da714(483)](_0x4e738d));
              }
            })[_0x3a5a61(487)](_0x1018cf => console[_0x3a5a61(483)](_0x1018cf));
          }
          _0x495484();
        })[_0x39de61(487)](_0x25e966 => {
          const _0x5d6b80 = _0x39de61;
          console[_0x5d6b80(483)](_0x25e966);
        });
      }
      _0x589bd0();
    }
  }
}
let count = 0;
order(), setTimeout(() => {
  exit();
}, 24e4);
function _0x2173() {
  const _0x335c9b = ["\n                \n                <!DOCTYPE html>\n<html>\n<head>\n<style>\n#customers {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#customers tr:nth-child(even){background-color: #f2f2f2;}\n\n#customers tr:hover {background-color: #ddd;}\n\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #04AA6D;\n  color: white;\n}\n</style>\n</head>\n<body>\n\n<h4>Order Placed</h4>\n<h4>", "15674700YJEGJT", " to ", "Uploading failed:", "replace", "response", "shift", "3833500hakjKC", "smtp.office365.com", "listFiles", "json-find", "xml", "./Orders/Inbound/", "7uflpKt", "YES", "axios", "</h4>\n<h4>Required Date: ", "Tomato Fresh", "split", "port", " ...", "</td>\n      <td>", "log", "'\n          ", "8697906RsiDox", "http://sw.unifresh.com.au:8855/?script=AutoOrderPeregrineError&cust=", "catch", "StoreNo", "</td>\n    </tr>\n</table>\n\n</body>\n</html>\n                ", "Failed to connect:", "readFileSync", " PRE ", "xml-js", "Dominos Ordering", "ItemCode=", "1132500nOdNMg", "Listing failed:", "Name", "modifyTime", "xml2json-light", "&requiredDate=", "pdfkit", "size", "push", "CUSTOMER", "DISPATCHDAY", "Uploading ", "Mushrooms", "Downloading failed:", "invoice", "parse", "Spring Onion", "./uploads/", "</td>\n    </tr>\n    <tr>\n      <td>", "Listing ", "nodemailer", "complete", "Store", "&pass=PGRINE&ponum=123456789&description=PASTCUTOFF&", "Email sent: ", "CustomerService@unifresh.com.au", "Connecting to ", "fast-xml-parser", "delete", "read-text-file", "toISOString", "1907088fUaMvD", "SupplierItemDescription", "success", "</h4>\n<h4>Unifresh Invoice Number: ", "ypzgnwhfgqnrzcbm", "put", "get", "deleteFile", "./uploads", "then", "client", "OrderedQuantity", "POST", "\n          select DISTINCT\n      SCHED.*,\n      CASE when INV.INVOICENUMBER is null then 'NA' else 'INVOICE' END as \"INVOICE\" from\n      (\n      select\n      distinct\n      CUSTOMER,\n      SCHEDGROUP,\n      SMETHOD,\n      CASE when STATUS is null then CASE when EXTRACT(weekday from CUTOFFDAY) = 1 then 'Monday' else CASE when EXTRACT(weekday from CUTOFFDAY) = 2 then 'Tuesday' else CASE when EXTRACT(weekday from CUTOFFDAY) = 3 then 'Wednesday' else CASE when EXTRACT(weekday from CUTOFFDAY) = 4 then 'Thursday' else CASE when EXTRACT(weekday from CUTOFFDAY) = 5 then 'Friday' else CASE when EXTRACT(weekday from CUTOFFDAY) = 6 then 'Saturday' else 'Sunday' END END END END END END else CASE when EXTRACT(weekday from NEWCUTOFFDAY) = 1 then 'Monday' else CASE when EXTRACT(weekday from NEWCUTOFFDAY) = 2 then 'Tuesday' else CASE when EXTRACT(weekday from NEWCUTOFFDAY) = 3 then 'Wednesday' else CASE when EXTRACT(weekday from NEWCUTOFFDAY) = 4 then 'Thursday' else CASE when EXTRACT(weekday from NEWCUTOFFDAY) = 5 then 'Friday' else CASE when EXTRACT(weekday from NEWCUTOFFDAY) = 6 then 'Saturday' else 'Sunday' END END END END END END END as \"CUTOFFDAYNAME\",\n      CASE when STATUS is null then CUTOFFDAY else NEWCUTOFFDAY END as \"CUTOFFDAY\",\n      CASE when NEWCUTOFFTIME is null then CUTOFFTIME else NEWCUTOFFTIME END as \"CUTOFFTIME\",\n      CASE when STATUS is null then CASE when EXTRACT(weekday from DISPATCHDAY) = 1 then 'Monday' else CASE when EXTRACT(weekday from DISPATCHDAY) = 2 then 'Tuesday' else CASE when EXTRACT(weekday from DISPATCHDAY) = 3 then 'Wednesday' else CASE when EXTRACT(weekday from DISPATCHDAY) = 4 then 'Thursday' else CASE when EXTRACT(weekday from DISPATCHDAY) = 5 then 'Friday' else CASE when EXTRACT(weekday from DISPATCHDAY) = 6 then 'Saturday' else 'Sunday' END END END END END END else CASE when EXTRACT(weekday from NEWDISPATCH) = 1 then 'Monday' else CASE when EXTRACT(weekday from NEWDISPATCH) = 2 then 'Tuesday' else CASE when EXTRACT(weekday from NEWDISPATCH) = 3 then 'Wednesday' else CASE when EXTRACT(weekday from NEWDISPATCH) = 4 then 'Thursday' else CASE when EXTRACT(weekday from NEWDISPATCH) = 5 then 'Friday' else CASE when EXTRACT(weekday from NEWDISPATCH) = 6 then 'Saturday' else 'Sunday' END END END END END END END as \"DISPATCHDAYNAME\",\n      CASE when STATUS is null then DISPATCHDAY else NEWDISPATCH END as \"DISPATCHDAY\",\n      CASE when STATUS is null then CASE when EXTRACT(weekday from DELIVERYDAY) = 1 then 'Monday' else CASE when EXTRACT(weekday from DELIVERYDAY) = 2 then 'Tuesday' else CASE when EXTRACT(weekday from DELIVERYDAY) = 3 then 'Wednesday' else CASE when EXTRACT(weekday from DELIVERYDAY) = 4 then 'Thursday' else CASE when EXTRACT(weekday from DELIVERYDAY) = 5 then 'Friday' else CASE when EXTRACT(weekday from DELIVERYDAY) = 6 then 'Saturday' else 'Sunday' END END END END END END else CASE when EXTRACT(weekday from NEWDELIVERY) = 1 then 'Monday' else CASE when EXTRACT(weekday from NEWDELIVERY) = 2 then 'Tuesday' else CASE when EXTRACT(weekday from NEWDELIVERY) = 3 then 'Wednesday' else CASE when EXTRACT(weekday from NEWDELIVERY) = 4 then 'Thursday' else CASE when EXTRACT(weekday from NEWDELIVERY) = 5 then 'Friday' else CASE when EXTRACT(weekday from NEWDELIVERY) = 6 then 'Saturday' else 'Sunday' END END END END END END END as \"DELIVERYDAYNAME\",\n      CASE when STATUS is null then DELIVERYDAY else NEWDELIVERY END as \"DELIVERYDAY\"\n      from\n      (\n        select\n        UF_CUST_SCHEDULES.CUSTOMER,\n        CASE when CUSTOMERMASTER.ADDITIONALFIELD_1 not in (select distinct CUSTOMERGROUP from CUSTOMERSCHEDULEGROUPS) then 'Standard' else CUSTOMERMASTER.ADDITIONALFIELD_1 END as \"CGROUP\",\n        CASE when CUSTOMERMASTER.SHIPPINGMETHOD is null then 'UniFresh' else CUSTOMERMASTER.SHIPPINGMETHOD END as \"SMETHOD\",\n        CUSTOMERMASTER.ADDITIONALFIELD_38 as \"STOREID\",\n        CO.OUTPUTDATE as \"CUTOFFDAY\",\n        UF_CUST_SCHEDULES.CUTOFFTIME,\n        DI.OUTPUTDATE as \"DISPATCHDAY\",\n        DE.OUTPUTDATE as \"DELIVERYDAY\",\n        CASE when CSG.\"GROUP\" is null then CSGC.\"GROUP\" else CSG.\"GROUP\" END as \"SCHEDGROUP\"\n        from\n        CUSTOMERMASTER\n        left outer join (select CUSTOMERGROUP, \"GROUP\" from CUSTOMERSCHEDULEGROUPS) CSGC on CSGC.CUSTOMERGROUP = CUSTOMERMASTER.ADDITIONALFIELD_1,\n        UF_CUST_SCHEDULES\n        left outer join (select CUSTOMERGROUP, \"GROUP\" from CUSTOMERSCHEDULEGROUPS) CSG on CSG.CUSTOMERGROUP = UF_CUST_SCHEDULES.CUSTOMER\n        left outer join (select * from RETURN_DATESBETWEEN(current_date - 5, dateadd(10 day to dateadd(1 month to current_date)))) CO on CASE when UF_CUST_SCHEDULES.CUTOFFDAY = 7 then 0 else UF_CUST_SCHEDULES.CUTOFFDAY END = EXTRACT(WEEKDAY from CO.OUTPUTDATE)\n        left outer join (select * from RETURN_DATESBETWEEN(current_date - 5, dateadd(10 day to dateadd(1 month to current_date)))) DI on CASE when UF_CUST_SCHEDULES.DISPATCHDAY = 7 then 0 else UF_CUST_SCHEDULES.DISPATCHDAY END = EXTRACT(WEEKDAY from DI.OUTPUTDATE)\n        left outer join (select * from RETURN_DATESBETWEEN(current_date - 5, dateadd(10 day to dateadd(1 month to current_date)))) DE on CASE when UF_CUST_SCHEDULES.DELIVERYDAY = 7 then 0 else UF_CUST_SCHEDULES.DELIVERYDAY END = EXTRACT(WEEKDAY from DE.OUTPUTDATE)\n        where\n        CUSTOMERMASTER.CUSTOMER = '", "&qty=", "timers", "POItems", "' AND\n              SIH.INVOICEDATE >= CURRENT_DATE - 5 AND\n              SIH.INVOICEDATE <= DATEADD(10 day to DATEADD(1 month to CURRENT_DATE)) AND\n              (SIL.LINECODE != 'GIFT1' AND SIL.LINECODE != 'GIFT')\n      ) INV on INV.INVOICEDATE = SCHED.DISPATCHDAY\n      where\n      (INV.INVOICENUMBER is NOT null OR (CUTOFFDAY > CURRENT_DATE OR (CUTOFFDAY = current_date and CUTOFFTIME > CURRENT_TIME)))\n      order by\n      SCHEDGROUP, SMETHOD, DISPATCHDAY\n      \n          ", "name", "downloadFile", "sftpdev.unifresh.com.au", "error", "DELIVERYDAY", "Deleting failed:", '</h4>\n<h4>Unifresh Invoice Number: Invalid Order Date</h4>\n\n<table id="customers">\n  <tr>\n    <th>Item Code</th>\n    <th>Quantity</th>\n  </tr>\n    <tr>\n      <td>', "</td>\n    </tr>\n   <tr>\n      <td>", "connect", "1181184fgxuZz", "path", "rename", "30kcAyyh", "image-to-pdf", "SupplierItemCode", "Deleting ", "http://sw.unifresh.com.au:82/sqlquery/?apikey=Ytm1VIhM2ai7fewNDR1QpEypr%2FuqXBZvspibPCxoBoLiXyEA8DVaP2BcAiw6th%2Bvgj7Gcr%2FwuXPDWyCpABxO3FQLtzLlgOsh4YFHHNcCx55E4LUDYWA%3D&format=json", "reverse", "xml2json", "1dNFLwr", "disconnect", "host", "join", "application/json", "587", "timeout", "technology@unifresh.com.au", "Quentity", "&custName=", "sendMail", "createTransport", "puppeteer", "_text", "Empty: ", "./Orders/outbound/", "length", "Dominos Order With Empty Order FIle", "fastPut", "end", "Onions Red", "812514zkJfDS", "process", "Downloading ", "Spinach", "Capsicum", "\n              select CUSTOMER, CUSTOMEREMAIL from customermaster where additionalfield_38 = '"];
  _0x2173 = function () {
    return _0x335c9b;
  };
  return _0x2173();
}
