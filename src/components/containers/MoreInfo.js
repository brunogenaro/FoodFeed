import React from 'react';


class MoreInfo extends React.Component {


  render() {
	
  	let image 	= this.props.image;
  	let hashtag = this.props.hashtag;
  	let title 	= this.props.title;
  	let content = this.props.content;

    return(

    	<div id="more-info" className={"more-info " + this.props.moreinfo}>
    	   <h1>More Info</h1>
      </div>

    );
  }
}

export default MoreInfo;
