import React from 'react';
import Navbar from './organisms/Navbar'
import MeetupCard from './components/MeetupCard'
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">

          <div class="card my-3 bg-light">
            <div class="card-body">
              <div className="row">
                <div className="col-auto">
                  <img src="https://via.placeholder.com/200" alt=""/>
                </div>
                <div className="col">
                  <h2>Hacktiv8 Meetup</h2>
                  <table className="table w-50">
                    <tr>
                      <td>Location</td>
                      <td>Jakarta, Indonesia</td>
                    </tr>
                    <tr>
                      <td>Members</td>
                      <td>1234</td>
                    </tr>
                    <tr>
                      <td>Organizers</td>
                      <td>Lorem ipsum</td>
                    </tr>
                  </table>
                  <button type="button" class="btn btn-primary">Join Us</button>
                </div>
              </div>
            </div>
          </div>

          <h1>Next Meetup</h1>
          <div className="card mx-3 mb-3 bg-light">
            <div className="card-body">
              Awesome meetup and event
              <p className="text-secondary">25 January 2019</p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>

          <h1>About Meetup</h1>
          <div className="card mx-3 mb-3 bg-light">
            <div className="card-body">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <h1>Members</h1>
            <a href="#">See all</a>
          </div>
          <div className="card mx-3 mb-3 bg-light">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img src="https://via.placeholder.com/80" className="rounded-circle" alt=""/>
                </div>
                <div className="col">
                  <strong>Organizers</strong><br/>
                  Adhy Wiranata &nbsp;&nbsp;&nbsp;&nbsp; 4 others
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <h1>Past Meetups</h1>
            <a href="#">See all</a>
          </div>
          <div className="row row-cols-3">
            <MeetupCard date="27 November 2017" content="#39 JakartaJS April Meetup with kumparan" visitor="139" />
            <MeetupCard date="27 October 2017" content="#38 JakartaJS April Meetup with Blibli" visitor="138" />
            <MeetupCard date="27 September 2017" content="#37 JakartaJS April Meetup with Hacktiv8" visitor="137" />
          </div>

        </div>
      </div>
    )
  }
}

export default App;
