export default class BattlefieldService {
    constructor() {
        this.init();
    }

    init = () => {
        this.field = JSON.parse(localStorage.field);
    }
}