
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
let simultanius = [];
for (let i = 0; i < data.length; i++) {
  simultanius[i] = 1; 
}
for (let i = 0; i < data.length-1; i++) 
{
  if(Number(data[i].start+data[i].duration)>Number(data[i+1].start))
  {
    simultanius[i]=2;
    simultanius[i+1]=2;
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
  width=(90/simultanius[i])+"%"
  if(simultanius[i]>1)
  {
    if(leftPosition==0)
      leftPosition=simultanius[i];
    leftPosition--
    left=(90/(simultanius[i]))*leftPosition + "%";
    div.style.left=left;
  }
  div.style.width=width;
  document.getElementById("timeStart").appendChild(div);
}