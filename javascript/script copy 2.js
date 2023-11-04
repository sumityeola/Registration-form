let list = [
  {
    name: "Sai",
    batch: "React",
    time: "12.00 pm",
  },
  {
    name: "Neha",
    batch: "Java",
    time: "12.00 pm",
  },
  {
    name: "Om",
    batch: ".Net",
    time: "12.00 pm",
  },
]; // JSON array

class Restaurant {
  name = "";
  constructor(_name) {
    this.name = _name;
  }
  printData() {
    console.log(this.name);
  }
}

let restaurant1 = new Restaurant("Hotel Swad");
restaurant1.printData();

let restaurant2 = new Restaurant("KFC");
restaurant2.printData();
