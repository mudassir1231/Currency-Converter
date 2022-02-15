import ExchangeRate from "./ExchangeRate";

var c1="BTC",c2="BTC";

function setChosenPrimaryCurrency(x){
c1=x;
console.log(c1)
}
function setChosenSecondaryCurrency(y){
c2=y    
}



const CurrencyConverter = () => {

    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA','INR' ]
    // const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    // const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    // const [amount, setAmount] = useState(1)
    // const [exchangedData, setExchangedData] = useState({
    //     primaryCurrency: 'BTC',
    //     secondaryCurrency: 'BTC',
    //     exchangeRate: 0
    // })


    return (
        <section classNameName="soc">
            <br></br>
            <div class="loader" id="loader"  ></div>
            <div className="main" id="main">
            <center>
            <br></br><br></br>
                            
                            <input
                                id="t1"
                                type="number"
                                className="t1"
                                // value={amount}
                                // onChange={(e) => setAmount(e.target.value)}
                            />
                            <select
                                // value={c1}
                                name="currency-option-1"
                                className="currency-options"
                                id="c1"
                                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                            >
                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                            </select>

                            
                            <br></br><br></br>

                            
                            <input
                                id="t2"
                                name="currency-amount-2"
                                className="t2"
                                // value={result}
                                disabled={true}
                            />
                            <select
                                name="currency-option-2"
                                className="currency-options"
                                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                            >
                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}

                            </select>

                            <br></br><br></br>

         

                    <button onClick={convert}>convert</button>
            
            <br></br><br></br><br></br>
            </center>
            </div>    
        </section>
      );
}
 


function convert(){

    // var load = document.getElementById("loader");
    // var mai = document.getElementById("main");
    
    var t1 = document.getElementById("t1").value;


    if(t1!=null){
    // var ic1 = document.getElementById("c1").value;
    // console.log(c1+c2);
    
    if(c1!=c2){

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {

        if (this.readyState === this.DONE) {
            const json= JSON.parse(this.responseText);
            const rate=json['Realtime Currency Exchange Rate']['5. Exchange Rate'];
            console.log(rate);
            document. getElementById("t2").value=t1*rate;
            // ic2=1;
            // console.log(this.responseText);

        }
    });
    
    xhr.open("GET", "https://alpha-vantage.p.rapidapi.com/query?from_currency="+c1+"&function=CURRENCY_EXCHANGE_RATE&to_currency="+c2);
    xhr.setRequestHeader("x-rapidapi-host", "alpha-vantage.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "3b7b8d2bd5msh046980c4c515905p18fae5jsn97a5500eb4b2");
    
    xhr.send();
    
    }
    else{
        
        document. getElementById("t2").value=t1;
        // alert("both are same")
    }


}
    
    
    }



export default CurrencyConverter;











