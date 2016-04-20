import React from 'react';

let appState;

class FeedItem extends React.Component {

	clickItem(e){
		e.currentTarget.className += " active";

		appState.setState({
			active: 'active'
		});
	}

	clickMoreInfo(){
		var moreInfo = document.getElementById("more-info");

		//moreInfo.className += " active";

		appState.setState({
			moreinfo: 'active'
		});
	}

  	render() {
	
	  	let image 	= this.props.image;
	  	let hashtag = this.props.hashtag;
	  	let title 	= this.props.title;
	  	let content = this.props.content;

	  	appState 	= this.props.appState;

	    return(

	    	<div className="feed-item" onClick={this.clickItem.bind(this)}>
	        	<a href="#">
	        		<img src={image} />
	        	</a>

	        	<div className="image-info">
	        		<h3>{ hashtag }</h3>
	        		<h4>{ title }</h4>

	        		<p>{ content }</p>

	        		<button onClick={this.clickMoreInfo.bind(this)}>More Info</button>
	        	</div>
	        </div>

	    );
  	}
}

export default FeedItem;
