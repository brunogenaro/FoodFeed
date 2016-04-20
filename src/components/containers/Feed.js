import React from 'react';

import FeedItem from './FeedItem';

class Feed extends React.Component {

	componentDidMount() {
	   var msnry = new Masonry( '#feed', {
		    columnWidth: 100,
		    itemSelector: '.feed-item',
		    gutter: 1,
		    percentPosition: true
		});
	}

  exitOverlay() {

    var feedItem = document.querySelectorAll(".feed-item");

    for (var i = 0; i < feedItem.length; i++) {
      feedItem[i].className = "feed-item";
    }

    console.log(feedItem);

    this.props.appState.setState({
      active: '',
      moreinfo: ''
    });
  }



  render() {

  	let items = [
  		{
  			image: "src/images/image-1.jpg"
  		},
  		{
  			image: "src/images/image-2.jpg"
  		},
  		{
  			image: "src/images/image-3.jpg"
  		},
  		{
  			image: "src/images/image-4.jpg"
  		},
      {
        image: "src/images/image-5.jpg"
      },
      {
        image: "src/images/image-6.jpg"
      },
      {
        image: "src/images/image-7.jpg"
      },
      {
        image: "src/images/image-8.jpg"
      },
      {
        image: "src/images/image-9.jpg"
      },
      {
        image: "src/images/image-10.jpg"
      }
  	];

    let _this = this;
	
    return(

      <div>
      	<div id="feed">

        {
          items.map(function(item, index){

              return(
                <FeedItem appState={_this.props.appState} key={index} image={item.image} hashtag="#fourseason" title="Something here" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit urna non semper accumsan. Curabitur dignissim purus augue, a cursus elit lobortis sit amet." />
              )
            })
          }
  			
  			
  		</div>

      <div onClick={this.exitOverlay.bind(this)} className={'dark-overlay ' + this.props.overlay}></div>
    </div>

    );
  }
}

export default Feed;
