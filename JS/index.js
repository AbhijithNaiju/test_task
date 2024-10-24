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
flag=1;
widthDivision=1;
for(i=0;i<data.length;i++)
{
  var div = document.createElement("div");
  height = data[i].duration + "px";
  div.style.height = height;
  startingTime=data[i].start+"px";
  div.style.top = startingTime;
  div.innerHTML = data[i].title;
  div.classList.add("time_display");
  if((i<data.length-1 && Number(data[i].start+data[i].duration)>Number(data[i+1].start)) || (i>0 && Number(data[i-1].start+data[i-1].duration)>Number(data[i].start)))
  {
    left=(45)*flag + "%";
    div.style.left=left;
    if(flag==1)
    {
      flag=0;
    }
    else
    {
      flag=1;
    }
    widthDivision=2;
  }
  else
  {
    flag=1;
    widthDivision=1;
  }
  width=(90/widthDivision)+"%"
  div.style.width=width;
  document.getElementById("timeStart").appendChild(div);
}