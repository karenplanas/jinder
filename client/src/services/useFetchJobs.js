var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Basic MTc2NzVkZDUtNzFiNS00YmJkLTg5YWQtOTU4OGY5YzZkOGZhIDo="
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
