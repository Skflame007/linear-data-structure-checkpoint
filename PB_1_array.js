const set1 = [2,1,7,9,10];

const set2 = [2,4,1,9,3,5];
var i= 0;
var j=0;
var y=0; x=0;
var sum =0;sum1=0;sum2=0;
var test1 = false, test2=false; 

for (let i=0;i<set1.length;i++)

{ x = set1[i]
   var Count =0; 
    for (let j=0;j<set2.length;j++)
    {
        if (x != set2[j])
        {
            Count++;
            test1 = true;
        
            console.log(`set1 ${i}`,x);
            console.log(`set2 ${j}`,set2[j]);
            
        }
        else 
        {
            test1 = false;
           console.log(`set1 ${i}`,x);
           console.log(`set2 ${j}`,set2[j]);
           
        }

        console.log(test1)

        

    }
        
    if (Count === set2.length)
    {
         sum1 += x;
        console.log("sum 1",sum1);
    }
        
       

}   

for (let i=0;i<set2.length;i++)

{ y = set2[i]
   var County =0; 
    for (let j=0;j<set1.length;j++)
    {
        if (y != set1[j])
        {
            County++;
            test2 = true;
        
            console.log(`set2 ${i}`,y);
            console.log(`set1 ${j}`,set1[j]);
            
        }
        else 
        {
            test2 = false;
          console.log(`set2 ${i}`,y);
           console.log(`set1 ${j}`,set1[j]);
           
        }

        console.log(test2)

        

    }

    if (County === set1.length)
    {
         sum2 += y;
        console.log("sum 2",sum2);
    }
        
       

}   
sum = sum1 + sum2;


console.log("LASTSUM",sum)
