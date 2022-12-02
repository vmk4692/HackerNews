const api_url =
  "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
const getpi = async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  const data = await response.json();
  let latestDataArr = [];
  data.map((dat) => {
    latestDataArr = [
      ...latestDataArr,
      `https://hacker-news.firebaseio.com/v0/item/${dat}.json?print=pretty`,
    ];
  });
  var sn =1;
  for (const value of latestDataArr.slice(0,10)) {
    var finaldata = value;
    fetch(finaldata)
      .then((response) => response.json())
      .then((dataview) => {
        var news = document.getElementById("news");

        var a = document.createElement("a");
		a.setAttribute('class','manage-titlecl');
        a.innerHTML = `<h4>${sn++}. ${dataview.title} <h4>`;
        a.href = `${dataview.url}`;
        a.setAttribute("target", "_blank");
        news.appendChild(a);
      });
  }
       window.addEventListener('scroll',function(){
      var sy =this.window.scrollY;
if(sy>=0){
  for (const value of latestDataArr) {
    var finaldata = value;
    fetch(finaldata)
      .then((response) => response.json())
      .then((dataview) => {
        var news = document.getElementById("news");

        var a = document.createElement("a");
		a.setAttribute('class','manage-titlecl');
        a.innerHTML = `<h4>${sn++}. ${dataview.title} <h4>`;
        a.href = `${dataview.url}`;
        a.setAttribute("target", "_blank");
        news.appendChild(a);
      });
  }
}
     })

  
  return latestDataArr;
};
getpi();
