function fun() 
{
  let dataX = 10; 
 
  if(true) 
  {
    let dataY = 20; 
 
    console.log(dataX); //Output 10
    console.log(dataY); //Output 20
  }
   
  console.log(dataX); //Output 10
  console.log(dataY); //dataY is 'undefined'
}
 
fun();