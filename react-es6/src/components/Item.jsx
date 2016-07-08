import React from 'react'

export default class Item extends React.Component {
  render() {
    return(
      <div className='item'>
        {this.props.itemName} {this.props.children}
      </div>
    );
  }
}
