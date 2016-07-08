import React from 'react'
import ReactDOM from 'react-dom'
import Item from './Item.jsx'

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.displayData = [
    	{itemName:"name1",itemContent:"content"},
    	{itemName:"name2",itemContent:"content"},
    	{itemName:"name3",itemContent:"content"},
    	{itemName:"name4",itemContent:"content"}
    ];
  }

  render() {
  	//要素をループする際にはkey属性にuniqueなidをつけないとconsoleにwarningが出る
    return(
      <div className='commentBox'>
        Hello, world! I am a ItemList.
        {
        	this.displayData.map((el,index)=>
        		<Item key={el.itemName} itemName={el.itemName}>{el.itemContent}</Item>
        	)
        }
      </div>
    );
  }
}

ReactDOM.render(
  <ItemList />,
  document.getElementById('world'),
  ()=>
  	console.log("appendedItemList")
);
