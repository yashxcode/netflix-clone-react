import React from "react"
import Main from "../components/Main"
import Row from "../components/Row"
import requests from "../Requests"

const Home = () => {
    console.log(requests.requestAnime)
  return (
    <div>
        <Main />
        <Row rowId="1" title="Popular" fetchURL={requests.requestPopular} />
        <Row rowId="2" title="Upcoming" fetchURL={requests.requestUpcoming} />
        <Row rowId="3" title="Trending Now" fetchURL={requests.requestTrending} />
        <Row rowId="4" title="Animated Movies" fetchURL={requests.requestAnimation} />
        <Row rowId="5" title="Top rated" fetchURL={requests.requestTopRated} />
    </div>
  )
}

export default Home