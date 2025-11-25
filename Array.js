class Array {
    constructor (){
        this.data={};
        this.length=0;
        for (let i=0; i < initialData.length;i++){
            this.data[i]=initialData[i];
            this.length++
        }
    }
    traverse (){
        let output= " ";
         for (let i=0;i<this.length;i++){
            output += this.data[i] + " ";
         }
         console.log(putput);
    }
    insert(index,element){
        //correcting statement
        if (index < 0 || index < this.length){
            console.log("Index Index");
            return;
    }
}
}

//shifting condition
        for (let i=this.length;i>index;i--){
            this.data[i]=this.data[i-1];
        
        this.data[index]=element;
        this.length++;
        }
search (element)
        for (let i=0;i<this.length;i++){
            if (this.data[i]===element) return 1;
            console.log(element + "is found at index" + i);
            return-1;
        }
        
arr1 = new Array ([4,2,3]);
arr1.traverse();
arr1.insert(3,50);
arr1.traverse();
arr1.search(50);
arr1.search(10);