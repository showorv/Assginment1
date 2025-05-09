

function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false){
        // console.log( input.toLowerCase());
        return input.toLowerCase()
    }else{
        // console.log( input.toUpperCase());
        return input.toUpperCase()
    }
}

formatString("Hello",false)




function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const filterting = items.filter((item)=> item.rating >=4)
    // console.log(filterting);
    
    return filterting;
    
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 6 },
    { title: "Book C", rating: 5.0 }
  ];
  
  filterByRating(books); 



  function concatenateArrays<T>(...arrays: T[][]): T[]{
    const concat = arrays.flat()
    // console.log(concat);
    
    return concat;

    
  }

concatenateArrays<string>(["a", "b"], ["c"]);     
concatenateArrays<number>([1, 2], [3, 4], [5]); 
 



class Vehicle{
    private make: string;
    year: number;

    constructor( make: string, year: number){
        this.make = make
        this.year = year
    }

    getInfo(){
        console.log(`"Make: ${this.make}, Year:${this.year}"`);
        
    }
}

class Car extends Vehicle{
    private model: string;

    constructor(make: string, year: number,model:string){
        super(make,year);
        this.model = model;
    }

    getModel(){
        console.log(`"Model: ${this.model}"`);
        
    }

}

const mycar = new Car ("Toyota", 2020, "Corolla");
mycar.getInfo()
mycar.getModel()




function processValue(value: string | number): number {
    if(typeof value === "string"){
        // console.log(value.length);
        return value.length;
        
    }else {
        // console.log(value*2);

        return value*2;
        
    }
}

processValue("hello"); 
processValue(20);      




interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{

            if(products.length === 0) return null 

            const highPrice = products.reduce((acc, curr)=> curr.price > acc.price ? curr : acc)
            // console.log(highPrice);
            return highPrice; 
            
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  getMostExpensiveProduct(products); 



  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if( day=== Day.Sunday){
        // console.log("Weekend");
        return "weekend"
        
    }else{
        // console.log("weekday");
        return "weekday"
        
    }
  }

getDayType(Day.Monday);   
getDayType(Day.Sunday);  




async function squareAsync(n: number): Promise<number>{
    return new Promise<number>((resolve, reject)=>{
        if( n < 0){
           reject("Negative number not allowed");
            
        }else{
            setTimeout(() => {
            resolve(n*n);
               
            }, 1000);
        }
    })
}

squareAsync(4).then(console.log);       
squareAsync(-3).catch(console.error);  
