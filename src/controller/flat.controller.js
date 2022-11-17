const flatRepository = require('../repository/flat.repository');

class flatController {
    addFlat(req, res) {
        let flat = req.body;
        flatRepository.addFlat(flat).then(output => {
            res.send(output);
        }).catch(err => {
            res.send(err);
        });
    }

    getFlat(req, res) {
        flatRepository.getFlat().then(output => {
            res.send(output);
        }).catch(err => {
            res.send(err);
        });
    }

    deleteFlat(req, res) {
        let deleteFlat = req.params.id;
        flatRepository.deleteFlat(deleteFlat).then(output => {
            res.send(output);
        });
    }

    updateFlat(req, res) {
        let flat = req.body;
        let id = req.params.id;
        flatRepository.updateFlat(id, flat).then(output => {
            res.send(output);
        });
    }

    getFlatById(req, res) {
        let id = req.params.id;
        flatRepository.getFlatById(id).then(output => {
            res.send(output);

        });
    }
}

module.exports = new flatController();