for (var counter = 1; counter <= 100; counter++)


{
    var not_prime = false;


    for (var div = 2; div <= (counter - 1); div++) 


    {
        if (counter % div === 0) 
        {not_prime = true;}
    }


    if (not_prime === false) 
    {console.log(counter);}
}