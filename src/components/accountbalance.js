import maskedbackground from '../resources/maskedbackground.svg';
import './accountbalance.css';

export default function Accountbalance({greeting}) {

    return (
        <div>
            <div>
                <h2 className="greeting" data-aue-prop="greeting" data-aue-type="text">{greeting}</h2>
                <p className='accountNoLabel'>Account Number</p>
                <p className='accountNo'>5122 6233 9544 3487</p>
            </div>
            <div className='accountbalance' style={{ backgroundImage: `url(${maskedbackground})` }}>
                <div className='balance'>
                    <p>Account Balance</p>
                    <h3>$1,920.00</h3>
                </div>
                <div className='options'>
                    <p>Make A Transfer</p>
                </div>
            </div>
        </div>
    )
}