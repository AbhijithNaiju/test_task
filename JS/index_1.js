for(i=0;i<data.length;i++)
{
  for(j=0;j<(data.length-1-i);j++)
  {
    if(Number(data[j].start)>Number(data[j+1].start))
    {
      temp=data[j];
      data[j]=data[j+1]
      data[j+1]=temp;
    }
  }
}
simultanius = [];
for (i = 0; i < data.length; i++) 
{
  simultanius[i] = 1; 
}
for (i = 0; i < data.length; i++) {
  for (j = i+1; j < data.length; j++) 
  {
    if (Number(data[i].start) + Number(data[i].duration) > Number(data[j].start)) 
    { 
      k=j;
      while(k>=i)      
      {
        if(simultanius[k]<(j-i)+1)
        {
          simultanius[k]= (j-i)+1;
        }
        k--;
      }
      if(simultanius[j]<simultanius[j-1])
      {
        simultanius[j]=simultanius[j-1];
      }
    }
  }
}
leftPosition=0;
for(i=0;i<data.length;i++)
{
  var div = document.createElement("div");
  height = data[i].duration + "px";
  div.style.height = height;
  startingTime=data[i].start+"px";
  div.style.top = startingTime;
  div.innerHTML = data[i].title;
  div.classList.add("time_display");
  if(simultanius[i]>1)
  {
    if(leftPosition==0)
      leftPosition=simultanius[i];
    leftPosition--
    if(simultanius[i]<simultanius[i+1] && Number(data[i].start) + Number(data[i].duration) > Number(data[i+1].start))
    {
      width=((90/simultanius[i+1])*(simultanius[i+1]-1))+"%";
      left=(90/(simultanius[i+1]))*leftPosition + "%";
    }
    else if(simultanius[i]<simultanius[i-1]  && Number(data[i-1].start) + Number(data[i-1].duration) > Number(data[i].start))
    {
      width=((90/simultanius[i-1])*(simultanius[i-1]-1))+"%";
      left=(90/(simultanius[i]-1))*leftPosition + "%";
    }
    else
    {
      width=(90/simultanius[i])+"%"
      left=(90/(simultanius[i]))*leftPosition + "%";
    }
    div.style.left=left;
  }
  else
  {
    width="90%"
  }
  
  div.style.width=width;
  document.getElementById("timeStart").appendChild(div);
}