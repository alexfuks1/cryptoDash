import React from 'react';
import Modal from './Modal';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstExchangeVal: 500,
            show: false,
            modalCoin:[]
        }

    }    
    handleExchange = (e) => {
        this.setState({ firstExchangeVal: e.target.value });
    }
    showModal = (coin) => {
        this.setState({ show: true,modalCoin:coin});
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };
    render() {
        return (
            <div class="container">
                {this.props.setCoins.map((coin, i) => <div key={i}>
                    <div class="row row-cols-2 row-cols-sm-2 row-cols-md-4 mb-5">
                        <div class="col">
                            <div className="card card-style" style={{ width: '15rem', height: '16rem' }}>
                                <div class="card-body">
                                    <h5 class="card-title text-center revice">Receive</h5>
                                    <p class="card-text text-center price">
                                        {100/coin.price}
                                    </p>
                                    <h5 class="card-title text-center mt-3 pay">Pay</h5>
                                    <h3 class="card-text text-center price-title">100 USD</h3>
                                    <div className="text-center">
                                        <button type="button" onClick={() => this.showModal(coin,i)} class="btn mt-3 btn-buy">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card card-style" style={{ width: '15rem', height: '16rem' }}>
                                <div class="card-body">
                                    <h5 class="card-title text-center revice">Receive</h5>
                                    <p class="card-text text-center price">
                                        {500/coin.price}
                                    </p>
                                    <h5 class="card-title text-center mt-3 pay">Pay</h5>
                                    <h3 class="card-text text-center price-title">500 USD</h3>
                                    <div className="text-center">
                                        <button type="button" onClick={() => this.showModal(coin,i)} class="btn mt-3 btn-buy">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card card-style" style={{ width: '15rem', height: '16rem' }}>
                                <div class="card-body">
                                    <h5 class="card-title text-center revice">Receive</h5>
                                    <p class="card-text text-center price">
                                        {1000/coin.price}
                                    </p>
                                    <h5 class="card-title text-center mt-3 pay">Pay</h5>
                                    <h3 class="card-text text-center price-title">1000 USD</h3>
                                    <div className="text-center">
                                        <button type="button" onClick={() => this.showModal(coin,i)} class="btn mt-3 btn-buy">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card card-style" style={{ width: '15rem', height: '16rem' }}>
                                <div class="card-body">
                                    <h5 class="card-title text-center revice">Choose an amount</h5>
                                    <span>{coin.name}</span>
                                    <input type="text" class="form-control shadow-none" value={this.state.firstExchangeVal/coin.price} aria-describedby="basic-addon1" />
                                    <span>{this.props.exchange}</span>
                                    <input type="text" class="form-control shadow-none" onChange={this.handleExchange} value={this.state.firstExchangeVal} aria-describedby="basic-addon1" />
                                    <div className="text-center">
                                        <button type="button" onClick={() => this.showModal(coin,i)} class="btn mt-3 btn-buy">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal firstExchangeVal={this.state.firstExchangeVal} show={this.state.show} handleClose={this.hideModal} modalCoin={this.state.modalCoin}/>
                </div>)}
            </div>
        )
    }
}
export default Card;
