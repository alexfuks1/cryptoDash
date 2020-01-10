import React from 'react';
class Modal extends React.Component{
    state={
        firstExchangeVal: 500,
    }
    handleExchange = (e) => {
        this.setState({ firstExchangeVal: e.target.value });
    }
    render(){
        const {modalCoin,firstExchangeVal} = this.props;
        return (
            <div className={this.props.show ? 'modal display-block' : 'modal display-none'}>
                 <div className="card card-style modal-main" style={{ width: '28rem', height: '17rem' }}>
                        <div class="card-body">
                            <div className="text-right">
                                <button type="button" class="btn btn-default btn-circle"/><i class="fas fa-times" onClick={this.props.handleClose} />
                            </div>
                            <h5 class="card-title text-center header-modal">Choose an amount</h5>
                                <span>{modalCoin.name}</span>
                            <input type="text" class="form-control shadow-none" value={firstExchangeVal/modalCoin.price} aria-describedby="basic-addon1" />
                            <span>USD</span>
                            <input type="text" class="form-control shadow-none" onChange={this.handleExchange} value={firstExchangeVal} aria-describedby="basic-addon1" />
                            <div className="text-center">
                                <button type="button" class="btn mt-3 btn-buy">Buy Now</button>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default Modal;