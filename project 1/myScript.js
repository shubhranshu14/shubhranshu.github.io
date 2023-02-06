function clickEvent(first,last)
{
    if(first.value.length)
    {
      document.getElementById(last).focus();
      document.getElementById(last).style.borderColor = "lightblue";
        document.getElementById(last).style.boxShadow = "0px 5px 10px gray";
    }
   
}

       