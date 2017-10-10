var axios = require('axios');

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log('Document Ready');

    axios.get('/api/beers')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};