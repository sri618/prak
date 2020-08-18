import Head from 'next/head';

export default ()=>{
    return(
        <div>
            <Head>
                <title>Ninja Ticket</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
            </Head>
            <header className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="social-network">
                                <li><a className="waves-effect waves-dark" href="#">Login</a></li>
                                <li><a className="waves-effect waves-dark" href="#"><span>|</span></a></li>
                                <li><a className="waves-effect waves-dark" href="#">Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <style jsx>{`
                .topbar{
                    background-color:#8B008B;
                  }
                  
                  .topbar .container .row {
                    margin:-7px;
                  }
                  
                  .topbar .container .row .col-md-12 { 
                    padding:0;
                  }
                  
                  .topbar p{
                    margin:0;
                    display:inline-block;
                    font-size: 12px;
                    color: #000000;
                  }
                  
                  .topbar p > i{
                    margin-right:5px;
                  }
                  .topbar p:last-child{
                    text-align:right;
                  } 
                  
                  .topbar li.topbar {
                      display: inline;
                      padding-right: 18px;
                      line-height: 52px;
                      transition: all .3s linear;
                  }
                  
                  .topbar li.topbar:hover {
                      color: #1bbde8;
                  }
                  
                  .topbar ul.info i {
                      color: #000000;
                      font-style: normal;
                      margin-right: 8px;
                      display: inline-block;
                      position: relative;
                      top: 4px;
                  }
                  
                  .topbar ul.info li {
                      float: right;
                      padding-left: 30px;
                      color: #000000;
                      font-size: 13px;
                      line-height: 44px;
                  }
                  
                  .topbar ul.info i span {
                      color: #aaa;
                      font-size: 13px;
                      font-weight: 400;
                      line-height: 50px;
                      padding-left: 18px;
                  }
                  
                  ul.social-network {
                    border:none;
                    margin:0;
                    padding:0;
                  }
                  
                  ul.social-network li {
                    border:none;  
                    margin:0;
                  }
                  
                  ul.social-network li i {
                    margin:0;
                  }
                  
                  ul.social-network li {
                      display:inline;
                      margin: 0 5px;
                      border: 0px solid #2D2D2D;
                      padding: 5px 0 0;
                      width: 32px;
                      display: inline-block;
                      text-align: center;
                      height: 32px;
                      vertical-align: baseline;
                      color: #000;
                  }
                  
                  ul.social-network {
                    list-style: none;
                    margin: 5px 0 10px -25px;
                    float: right;
                  }
                  .waves-effect {
                    position: relative;
                    cursor: pointer;
                    display: inline-block;
                    overflow: hidden;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    -webkit-tap-highlight-color: transparent;
                    vertical-align: middle;
                    z-index: 1;
                    will-change: opacity, transform;
                    transition: .3s ease-out;
                    color: #ffffff;
                }
            `}</style>
        </div>
    );
}