export default class {
    constructor(BattlefieldService) {
        this.BattlefieldService = BattlefieldService;
        this.init();
    }

    init = () => {
        this.field = this.BattlefieldService.field;
    }
}