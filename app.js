
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onItemHoverIn(e) {
    this.setState({
      hover: true
    });
  }
  onItemHoverOut(e) {
    this.setState({
      hover: false
    });
  }

  render() {
    //console.log(this.props) === {itemProp: 'kale'}, {itemProp: 'kiwi'}
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }
    return (
      <li 
        style={style} 
        onMouseEnter={this.onItemHoverIn.bind(this)} 
        onMouseLeave={this.onItemHoverOut.bind(this)}
      >
        {this.props.itemProp }
      </li> 
    )
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(mappedItem => <GroceryListItem key={mappedItem} itemProp={mappedItem}/>)}
  </ul>
);

ReactDOM.render(<GroceryList items={['broccoli','kiwi']} />, document.getElementById('app'));