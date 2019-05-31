import axios from 'axios'


componentDidMount() {
  axios
  .get('https://sandbox-api.brewerydb.com/v2/',{
    params:{
      apikey: "d1202111af60f9eb7cd4ae68c32eb604",
      abv: 6,
      isOrganic: 'Y',
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}
