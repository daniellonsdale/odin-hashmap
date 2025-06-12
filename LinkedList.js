import { Node } from "./Node.js";

export class LinkedList{
    head;
    constructor(){
        this.head = new Node();
    }
    append(value){
        let newNode = new Node(value);
        if (this.head.nextNode === null){
            this.head.nextNode = newNode;
        }else{
            let cur = this.head.nextNode;
            while (cur.nextNode != null) {
                cur = cur.nextNode;
            }
            cur.nextNode = newNode;
        }
    }
    prepend(value){
        let newNode = new Node(value);
        newNode.nextNode = this.head.nextNode;
        this.head.nextNode = newNode;
    }
    size(){
        let sum = 0;
        let cur = this.head.nextNode;
        while (cur != null) {
            sum++;

            cur = cur.nextNode;
        }
        return sum;
    }
    getHead(){
        if(this.head.nextNode){
            return this.head.nextNode;
        }else{
            return null;
        }
    }
    getTail(){
        let cur = this.head;
        while (cur.nextNode != null) {
            cur = cur.nextNode;
        }
        return cur;
    }
    at(index){
        let cur = this.head.nextNode;
        for (let i = 0; i <= index; i++) {
            if (i == index){
                return cur;
            }
            cur = cur.nextNode;
        }
    }
    pop(){
        let cur = this.head;
        while (cur.nextNode.nextNode != null) {
            cur = cur.nextNode;
        }
        cur.nextNode = null;
    }
    contains(value){
        let cur = this.head;
        let bool = false;
        while (cur != null) {
            if(cur.value === value){
                bool = true;
            }
            cur = cur.nextNode;
        }
        return bool;
    }
    find(value){
        let cur = this.head;
        let curIndex = -1;
        while (cur != null) {
            if(cur.value === value){
                return curIndex;
            }
            cur = cur.nextNode;
            curIndex++;
        }
        return null;
    }
    toString(){
        let output = "";
        let cur = this.head.nextNode;
        while (cur != null) {
            output += "( ";
            output += cur.value;
            output += " ) -> ";

            cur = cur.nextNode;
        }
        output += "null";
        return output;
    }
}