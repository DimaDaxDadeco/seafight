export default class {
    constructor(lettersGenerator, BattlefieldService) {
        this.BattlefieldService = BattlefieldService;
        this.lettersGenerator = lettersGenerator;
        this.init();
    }

    init = () => {
        this.field = this.BattlefieldService.field;
        this.letters = [];
        this.field.forEach((item, i) => {
            this.letters.push(this.lettersGenerator(i + 1));
        });
    }
}