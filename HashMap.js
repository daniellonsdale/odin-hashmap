import { LinkedList } from "./LinkedList.js";

export class HashMap {
    loadFactor;
    capacity;
    
    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
    }
}