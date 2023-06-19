class ElectricDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    };
    //метод, который определяет прибор, как включен
    electricDeviceOn() {
        console.log(`Прибор ${this.name} включен в розетку`);
        this.isPlugged = true;
    };

    //метод, который определяет прибор, как выключен
    electricDeviceOff() {
        console.log(`Прибор ${this.name} выключен из розетки`);
        this.isPlugged = false;
    };
};
//Определяем первый прибор со свойствами
class Lamp extends ElectricDevice {
    constructor(name, brand, voltage, power, light) {
        super(name, power);
        this.name = name;
        this.brand = brand;
        this.voltage = voltage;
        this.power = power;
        this.light = light;
    };
}
    
//Lamp = new ElectricDevice();

//Определяем второй прибор со свойствами
class Computer extends ElectricDevice {
    constructor(name, brand, voltage, power, operative_memory, memory, varieti) {
        super(name, power);
        this.name = name;
        this.brand = brand;
        this.voltage = voltage;
        this.operative_memory = operative_memory;
        this.memory = memory;
        this.varieti = varieti;
    };
}
//Computer = new ElectricDevice();

//Экземпляр лампы
const table_Lamp = new Lamp('Настольная лампа', 'Космос', 220, 6, 'холодный');
//компьютера
const personal_Computer = new Computer('PC', 'Dell', 220, 1000, 16, 20000, "настольный")
//включить
personal_Computer.electricDeviceOn();
//отключить
table_Lamp.electricDeviceOff();
 //вызываем
console.log(table_Lamp);
console.log(personal_Computer);