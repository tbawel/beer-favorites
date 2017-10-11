class BeerList extends React.Component {

  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentWillMount() {
    axios.get('/api/beers')
      .then((response) => {
        this.setState({
          beers: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let beerItems = this.state.beers.map( (beer) => {
      return <li>{ beer.name }</li>
    });
    
    return (
      <ul>
        { beerItems }
      </ul>
    );
  }
}

ReactDOM.render(
  <BeerList />,
  document.getElementById('beers')
);