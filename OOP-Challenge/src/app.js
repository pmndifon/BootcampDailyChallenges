class MobilePhone {
    constructor(name, imeiNum, simSlot) {
        // Abstraction
        this._name = name;
        this._imeiNum = imeiNum;
        this._simSlot = simSlot;
        this._batteryLife = 100;
    }

    dial() {
        this.batteryLife = Math.floor(Math.random() * 50 + 1);
        return `${this.name} Caling! Battery life is now ${this.batteryLife} percent`;
    }

    shareFile() {
        return 'File sharing with bluetooth';
    }

    set batteryLife(value) {
        this._batteryLife -= value;
    }

    get batteryLife() {
        return (this._batteryLife <= 0) ? `0 Percent! Phone is dead! Please charge it!` : this._batteryLife;
    }

    get name() {
        return this._name;
    }

    get simSlot() {
        return this._slimSlot;
    }
}


// Inheritance is at play here
class SmartPhone extends MobilePhone {
    constructor(name, imeiNum, batteryLife, camera) {
        super(name, imeiNum, batteryLife);
        this._camera = camera;
        this._browsers = ['Chrome'];
    }

    // Browser method
    browse() {
        this.batteryLife = Math.floor(Math.random() * 80 + 1);
        return `${this.name} browsing! Battery life now ${this.batteryLife} percent`;
    }

    // File sharing method
    shareFile() {
        return 'File Sharing with wifi';
    }

    // Setter methods
    set browsers(browserName) {
        this._browsers.push(browserName);
    }

    // Getter methods
    get browsers() {
        return this._browsers;
    }
}

export { MobilePhone, SmartPhone };