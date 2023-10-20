class GuessingGame {
    constructor() {
        this.minNum;
        this.maxNum;
        this.currentNum; //текущее значение
    }

    //устанавливаем диапазон чисел для угадывания
    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }

    guess() {
        this.currentNum = Math.round((this.minNum + this.maxNum) / 2);
        return this.currentNum;
    }

    //если число меньше 
    lower() {
        this.maxNum = this.currentNum - 1; //уменьшаем максимальное значение диапазона
    }
    //если число больше
    greater() {
        this.minNum = this.currentNum + 1; //увеличиваем минимальное значение диапазона
    }
}

module.exports = GuessingGame;
