class Queue{
    constructor(){
        this.data={};
        this.frontIndex = 0;
        this.readIndex = -1;
    }

    enqueue(element){
        this.readIndex++
        this.data[this.readIndex] = element;   
    }

    traverse(){
        let output = " ";
        for (let i=this.frontIndex;i <= this.readIndex;i++){
            output += this.data[i] + " ";
        }

        console.log(output);
    }
}

//
let queue1 = new Queue();
queue1.enqueue(4);
queue1.enqueue(3);
queue1.enqueue(2);
queue1.traverse();