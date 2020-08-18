import React,{Component} from 'react';

export default class extends Component {
    constructor(props){
        super(props);

        this.state = {
            status: [],
            text: ""            
        };
    }
    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        let statusBaru = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            status: state.status.concat(statusBaru),
            text: ""
        }));
    };
    render() {
        return(
        <div>
          <div id="container">
              <div id="konten">
                  <form className="post-status" onSubmit={this.handleSubmit}>
                      <textarea
                      className="Status-baru"
                      onChange={this.handleChange}
                      value={this.state.text}
                      placeholder="Ada kabar apa hari ini ?"
                      ></textarea>
                      <button className="post">Kirim</button>
                      <div className="clear"></div>
                  </form>
                  <Status status={this.state.status} />
              </div>
          </div>
        </div>
        );
    }
}
class Status extends React.Component {
    tanggal() {
        var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        var myDays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        var thisDay = date.getDay(),
            thisDay = myDays[thisDay];
        var yy = date.getYear();
        var year = (yy < 1000) ? yy + 1900 : yy;
        var tgl = thisDay + ', ' + day + ' ' + months[month] + ' ' + year;
        return (
            tgl
        );
    };
    render() {
        return(
            <div>
                <div>
                    {this.props.status.map(item => (
                    <div className="status">
                        <div className="profil-status">
                            <img src="modules/Img/Image/images (6).jpeg " className="gmb" alt="profil"></img>
                            <h5>Sri Hastuti </h5>
                            <p>{this.tanggal()}</p>    
                        </div>
                        <div className="isi-status" key={item.id}>{item.text}</div>
                        <br/>
                        <LikeKomen />
                    </div>
                    ))}
                </div>
            </div>
        );
    }
}
class Komentari extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comment: [],
            kata: ""
        };
    }
    handleChang = event => {
        this.setState({
            kata: event.target.value
        });
    };
    handleSub = event => {
        event.preventDefault();
        if (this.state.kata.length === 0) {
            return;
        }
        let commentBaru = {
            kata: this.state.kata,
            id: Date.now()
        };
        this.setState(state => ({
            comment: state.comment.concat(commentBaru),
            kata: ""
        }));
    };
    render(){
        return(
            <div>
                <div className="komen">
                    <Komen comment={this.state.comment} />
                    <form className="komen" onSubmit={this.handleSub}>
                        <textarea 
                        id="Komentari"
                        onChange={this.handleChang}
                        value={this.state.kata}
                        placeholder="komentari"
                        ></textarea>
                        <button id="balas">Balas</button>
                    </form>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
}
class Komen extends React.Component {
    tanggal() {
        var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        var myDays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        var thisDay = date.getDay(),
            thisDay = myDays[thisDay];
        var yy = date.getYear();
        var year = (yy < 1000) ? yy + 1900 : yy;
        var tgl = thisDay + ', ' + day + ' ' + months[month] + ' ' + year;
        return (
            tgl
        );
    };
    render(){
        return(
            <div>
                <div>
                    {this.props.comment.map(item => (
                    <div>
                        <div className="profil-komen">
                            <img src="modules/Img/Image/images (6).jpeg" className="gmb" alt="profil"></img>
                            <h5>Sri Hastuti</h5>
                            <p>{this.tanggal()}</p>    
                        </div>
                        <div className="isi-komen" key={item.id}>{item.kata}</div>
                        <br/>
                    </div>
                    ))}
                </div>
            </div>
        );
    }
}

class LikeKomen extends React.Component {
    state = {
        visible: false
    }

    render(){
        return(
            <div>
                <div>
                    <a className="komen" onClick={() => {this.setState({ visible: !this.state.visible })}}>Komentar</a>
                    {this.state.visible ? <Komentari /> : null}
                </div>
            </div>
        );
    }
}

