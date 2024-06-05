class hashmap{
    constructor(){
        this.arrSize=50;
        this.arr= new Array(this.arrSize).fill(null);
        this.loadFactor=0.75;
        this.occupied= this.load();
    }

    load(){
        const length=this.length();
        if(length/this.arr.length>=this.loadFactor){
            this.arrSize*=2;
            const oldArr=[...this.arr]
            this.arr=oldArr.concat(new Array(this.arrSize).fill(null));
        }
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
      } 
      check(value) {
        if (value < 0 || value >= this.arr.length) {
          throw new Error(`Trying to access index ${value}, which is out of bound`);
        }
      }

      set(key, value){
        let index=this.hash(key)
        arr[index]==value  ;
        console.log(
            `Hashcode: ${hashCode}; \n arr[hashcode]: ${this.arr[hashCode]}`
          );

          this.load();
      }
      get(key){
       
        this.check(key);
        if(!this.arr[key]) return null;
        return this.arr[key];

      }
      has(key){
        if(!this.arr[key]) return false;
        return true;
      }
      
      remove(key){
        if(!this.arr[key]) return false;

        this.arr.splice(key,1)
        return true;
      }

      length(){
        let counter=0;
        for(let i=0;i<this.arr.length;i++){
            if(!this.arr[i]==null){
                counter++
            }
            
        }
        return counter;
      }

      clear(){
        this.arr.fill(null);
      }

      keys(){
        let keysArr=[]
        for(let i=0;i<this.arr.length;i++){
            if(!this.arr[i]==null){
                keysArr.push(i);
            }
        }

        return keysArr;
      }
      values(){
        let keysArr=[]
        for(let i=0;i<this.arr.length;i++){
            if(!this.arr[i]==null){
                keysArr.push(this.arr[i]);
            }
        }

        return keysArr;
      }

      entries(){
        let keysArr=[]
        for(let i=0;i<this.arr.length;i++){
            if(!this.arr[i]==null){
                keysArr.push(i,this.arr[i]);
            }
        }

        return keysArr;
      }
}