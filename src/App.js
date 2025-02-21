import React, { useState, useEffect } from 'react';

import logo from './resources/SecurBank_Logo_Main.svg';
import bell from './resources/bell.svg';
import avatar from './resources/avatar.png';
import './App.css';
import Articles from './components/articles';
import Accountbalance from './components/accountbalance';
import Transactions from './components/transactions';
import Expenses from './components/expenses';
import CreditCardDetails from './components/creditcarddetails';
import Footer from './components/footer';
import FetchContent from './api/contentrequest';
import FAQ from './components/faq';

import { Helmet } from 'react-helmet-async';

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const result = await FetchContent();
      setContent(result.data.dashboardByPath.item);
    };

    fetchContent();
  }, []);

  const itemId =  "urn:aemconnection:/content/dam/securbank/en/dashboard/account-dashboard/jcr:content/data/master";

  return (
    <div className="App">
      <Helmet>
        <meta name="urn:adobe:aue:system:aemconnection" content={'aem:'+process.env.REACT_APP_AEM_AUTHOR}></meta>
      </Helmet>
      <header className="App-header">
        <div className='header-alerts'>
            <p><strong>Alert!</strong> Scams are growing ever more complex and sophisticated. Learn more about protecting yourself from scams</p>
        </div>
        <div className='header-nav'>
          <div>
            <img src={logo} className="logo" alt="logo" />
            <div>
              <ul>
                <li><strong>Dashboard</strong></li>
                <li><a href="#">Saving Account</a></li>
                <li><a href="#">Transactions</a></li>
                <li><a href="#">Cards</a></li>
              </ul>
            </div>
            <div>
              <img src={bell} className="bell" alt="bell" />
              <img src={avatar} className="avatar" alt="avatar" />
              <div className='authFriendly'>Mark Szulc</div>
            </div>
          </div>
      </div>
        
      </header>
      <main >
        <div className='section' data-aue-resource={itemId} data-aue-type="reference" data-aue-filter="cf">
          <div><a href={content && content.bannerUrl}><img src={content && content.banner._publishUrl} className="banner" alt="banner" data-aue-prop="banner"  data-aue-type="media"  /></a></div>
          <div className='twocol'>
            <Accountbalance greeting={content && content.greeting} />
            <CreditCardDetails cardLabel={content && content.cardLabel}  />
          </div>
          <div className='twocol'>
            <Transactions transactionTitle={content && content.transactionTitle}/>
            <Expenses expensesTitle={content && content.expensesTitle} />
          </div>
          <div>
            <FAQ faq={content && content.articles} />
          </div>
          <div>
            <Articles articles={content && content.articles} />
          </div>
        </div>
      </main>

      <footer><Footer /></footer>
    </div>
  );
}

export default App;
