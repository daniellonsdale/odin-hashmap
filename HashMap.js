import { LinkedList } from "./LinkedList.js";

export class HashMap {
    loadFactor;
    capacity;
    entries;
    arr;

    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.entries = 0;
        arr = new Array(capacity);
    }

    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    }

    set(key, value){
        this.checkCapacity();

        let hashCode = hash(key);

        if (!this.arr[hashCode]){
            this.arr[hashCode] = new LinkedList();
            this.arr[hashCode].append(key, value);
            this.entries++;
        }else if(this.arr[hashCode].containsKey(key)){
            this.arr[hashCode].changeValue(key, value);
        }else{
            this.arr[hashCode].append(key, value);
            this.entries++;
        }
    }

    checkCapacity(){
        if (this.loadFactor * this.capacity >= this.entries){
            this.grow();
        }
    }

    grow(){
        this.capacity *= 2;
        let arrCopy = structuredClone(this.arr);
        this.arr = new Array(this.capacity);
        
        arrCopy.array.forEach(element => {
            for (let i = 0; i < element.size(); i++){
                this.set(element.at(i).key, element.at(i).value);
            }
        });
    }

}