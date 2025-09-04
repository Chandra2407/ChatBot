import { EventEmitter } from "events";

function Pizza() {
    EventEmitter.call(this)

    this.order = function (size = "", topping = "") {
        this.emit("order-pizza", size, topping)
    }
}

Object.setPrototypeOf(Pizza.prototype, EventEmitter.prototype)

export default Pizza
