export default class ArrangementCtrl {

    constructor(BattlefieldService) {
        this.BattlefieldService = BattlefieldService;
        this.init();
    }

    init = () => {
        this.field = this.BattlefieldService.field;
    };
}