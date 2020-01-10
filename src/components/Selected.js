import React from 'react';
import Card from './Card';

class Selected extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'BTC',
            exchange: 'USD',
            setCoins: [],
            co:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEx = this.handleEx.bind(this);
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }
    handleEx=(e)=>{
        this.setState({exchange: e.target.value})
    }
    componentDidMount = () => {
        this.fetchCoins();
    }
    fetchCoins() {
        fetch(`https://api.nomics.com/v1/currencies/ticker?key=3e0e53e2a8c5c32e5954722910adcdef&ids=${this.state.value}&interval=1d,30d&convert=${this.state.exchange}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ setCoins: data });
            });

    }
    componentDidUpdate(prevProps) {
        this.fetchCoins();
    }
    render() {
        const checkPrice = this.state.setCoins.map((check,i)=>{
            return check.price;
        })
        if(checkPrice < checkPrice){
           alert('true');
        }
        return (
            <div className="cointainer">
                <div class="d-flex justify-content-center">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <select id="firstVal"
                                    defaultValue={this.state.value}
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    class="form-control btn-dropdown shadow-none"
                                >
                                    <option value="BTC">Bitcoin BTC</option>
                                    <option value="ETC">Ethereum ETH</option>
                                    <option value="LTC">Litecoin LTC</option>
                                    <option value="XRP">Ripple XRP</option>
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group" id="firstVal">
                                <select
                                    defaultValue={this.state.handleEx}
                                    onChange={this.handleEx}
                                    value={this.state.exchange}
                                    class="form-control btn-dropdown shadow-none"
                                >   
                                    <option value="USD">United States Dollar USD</option>
                                    <option value="EUR">Euro</option>
                                    <option value="ILS">ILS Israeli Shekel</option>
                                    <option value="GBP">GBP British Pound</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <p className="text-center">Prices include fees. Additional charges for methods of payment may apply</p>
                <Card setCoins={this.state.setCoins} exchange={this.state.exchange} />
            </div>
        )
    }
}
export default Selected;