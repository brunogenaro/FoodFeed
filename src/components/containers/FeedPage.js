import React from 'react';

import Header from './Header';
import Feed from './Feed';
import MoreInfo from './MoreInfo';


class FeedPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active: '',
			moreinfo: ''
		}
	}

	render() {
		
	    return(

	    	<div>
	    		<Header />
	    		<Feed overlay={this.state.active} appState={this} />
	    		<MoreInfo moreinfo={this.state.moreinfo} overlay={this.state.active} />
	    	</div>

	    );
	}
}

export default FeedPage;
