const billRepository = require('../repository/bill.repository');

class BillController{
    getBill(req,res){
        billRepository.getBill().then(output => {
            res.send(output);
        });
    }

    addBill(req,res){
        let Bill = req.body;
        billRepository.addBill(Bill).then(output=>{
            res.send(output);
        });
    }
    updateBill(req,res){
        let id = req.params.id;
        let bill = req.body;
        billRepository.updateBill(id,bill).then(output => {
            res.send(output);
        });
    }

    deleteBill(req,res){
        let id = req.params.id;
        billRepository.deleteBill(id).then(output =>{
            res.send(output);
        });
    }
}

module.exports = new BillController();