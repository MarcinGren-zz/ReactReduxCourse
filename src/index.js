import React, { Component } from 'react'
import ReactDOM from 'react-dom' // we need that to render 
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyDgv28sKssNF3slJlrZiqIonV8gpv3Rfvk'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('longboards')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos, 
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })} //props.onVideoSelect in VideoList
                    videos={this.state.videos} /> 
            </div>
        ) //videos={} above is passing prop - it will arrive as an argument in the function. In class obj its available everywhere
    }
}

// Create a new component which should produce some html
 //same as const App = function() {return <div>hi</div>}
// const App = () => {
//     return (
//     <div>
//         <SearchBar />
//     </div>
//     )
// }
// ALWAYS ONE COMPONENT PER FILE
// Take this generated html and put it into DOM
ReactDOM.render(<App />, document.querySelector('.container')) //we render it on DOM not just React()

