class VendingMachine {
    constructor(firstCandy,secondCandy,firstChips){
        this.firstCandy = firstCandy;
        this.secondCandy = secondCandy;
        this.firstChips = firstChips;  
        this.firstCandyStock = 5;
        this.secondCandyStock = 5;
        this.firstChipsStock = 5;
    }
    render() {
        return`
              <div>${this.firstCandy}</div>
              <div>${this.firstCandyStock}</div>
              <div>${this.secondCandy}</div>
              <div>${this.secondCandyStock}</div>
              <div>${this.firstChips}</div>
              <div>${this.firstChipsStock}</div>
              `;  
            }
    orderFirstCandy() {
       if(this.firstCandyStock > 0){
            this.firstCandyStock --;
        } else{
            alert("Sold Out");
            };
        }
    orderSecondCandy() {
        if(this.secondCandyStock > 0){
            this.secondCandyStock --;
        } else{
            alert("Sold Out");
            };
          }
    orderFirstChip() {
        if(this.firstChipsStock > 0){
            this.firstChipsStock --;
        } else{
            alert("Sold Out");
            };
          }
        
}


let newVendingMachine = new VendingMachine("Hershey", "Reese's", "Cheetos");
let vendingMachineDiv = document.getElementById("vendingMachineDiv");
vendingMachineDiv.innerHTML = newVendingMachine.render();

function getFirstCandy() {
    newVendingMachine.orderFirstCandy();
    vendingMachineDiv.innerHTML = newVendingMachine.render();
}
function getSecondCandy() {
    newVendingMachine.orderSecondCandy();
    vendingMachineDiv.innerHTML = newVendingMachine.render();
}
function getFirstChip() {
    newVendingMachine.orderFirstChip();
    vendingMachineDiv.innerHTML = newVendingMachine.render();
}