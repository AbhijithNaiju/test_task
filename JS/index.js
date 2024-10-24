
let overlapedtask=[];
let overlapingtask=[];
// Sorting the array based on start time
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

for(i=0;i<data.length-1;i++)
{
  if(data[i].duration>Math.abs(data[i].start-data[i+1].start))
  {
    overlapingtask.push(i);
    overlapingtask.push(i+1);
    // if(overlapingtask.includes(i+1)==false)
    //   {
    //     overlapingtask.push(i+1);
    //   }  
  }
}

for(i=0;i<data.length;i++)
{
  flag=0
  var div = document.createElement("div");
  height = data[i].duration + "px";
  div.style.height = height;

if(overlapingtask.includes(i) && overlapingtask.includes(i-1)==false)
{
  flag=1;
  div.style.width="45%";
  div.style.left="45%";
}
else if(overlapingtask.includes(i) && overlapingtask.includes(i-1))
{
  if(flag==0)
  {
    div.style.width="45%";
    div.style.left="45%";
    flag=1;
  }
  else
  {
    div.style.width="45%";
    flag=0;
  }
}
else
{
  div.style.width="90%";
  flag=0;
}
  startingTime=data[i].start+"px";
  div.style.top = startingTime;
  div.innerHTML = data[i].title;
  div.classList.add("time_display");
  document.getElementById("timeStart").appendChild(div);
}