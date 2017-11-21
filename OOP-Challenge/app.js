class Mobile {
    constructor(name, imeiNum, processor) {
        this._name = name;
        this._imeiNum = imeiNum;
        this._processor = processor;
        this._simCard = 1;
    }

    dial() {
        return "Dialing number";
    }

    receiveMsg() {
        return "Message received";
    }

    sendMsg() {
        return "Sending Message via text";
    }

    get name() {
        return this.name;
    }

    get imeiNum() {
        return this.imeiNum;
    }

    get processor() {
        return this._processor;
    }

    set processor(processorName) {
        this._processor = processorName;
    }
}


// Inheritance
class SmartPhones extends Mobile {
    constructor(name, imeiNum, connectivity) {
        super(name, imeiNum);
        this._connectivity = connectivity;
        this._wifi = false;
    }

    // Polymorphism
    sendMsg() {
        return `Sending message via ${this._connectivity}`;
    }

    set wifi(hasWifi) {
        this._wifi = hasWifi;
    }

    get wifi() {
        return this._wifi;
    }

}

// Abstraction
let SamsungG6 = new Mobile("Samusung G6", 12233874073900, "Intel Phi-Atom", 2);
let iPhone6 = new SmartPhones("iPhone 6", 103383002798, "bluetooth");

export { SamsungG6, iPhone6}; 




















