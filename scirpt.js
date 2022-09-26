function getComputerChoice()
{
    let number=parseInt(Math.random()*(3-0)+0);
    if(number==0)
    {
        return "Rock";
    }else if(number==1)
    {
        return "Paper"
    }else{
        return "Scissors"
    }

}

console.log(getComputerChoice());