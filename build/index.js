"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bigchaindb_driver_1 = require("bigchaindb-driver");
const endpoint = 'https://test.ipdb.io/api/v1/';
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = new bigchaindb_driver_1.Connection(endpoint);
    const id = '44aff48de21f92d8361708f6ef21dbb4774042962198646882d20e495a87778d';
    const tx = yield connection.getTransaction(id);
    console.log(tx.asset);
    console.log(tx.operation);
    switch (tx.operation) {
        case 'TRANSFER':
            console.log(tx.asset.id);
            break;
        case 'CREATE':
            console.log(tx.asset.data);
            break;
    }
});
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield main();
    });
})();
