// // Step 1: Open a terminal (CTRL + ~ if you are using vs code)
// // Step 2: Run "npm install" (This will install all the dependencies)
// // Step 3: Run "node app.js"
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// app.use(cors());



// app.get('/', (req, res) => {
// 	res.send('Working...')
// });

// let response1 = {
// 	code: 0,
// 	message: 'ok',
// 	data: [
// 	  {
// 		contract_address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
// 		decimals: 18,
// 		name: 'Binance USD',
// 		symbol: 'BUSD',
// 		logos: [Array],
// 		urls: [Array],
// 		current_usd_price: 3.75,
// 		balance: '0x341824c7e1ea4361'
// 	  }
// 	],
// 	next_page: null,
// 	count: 1
//   };

// async function getAssetsValue(add){
// 	var requestOptions = {
// 		method: 'get',
// 		headers: { 'accepts': 'application/json', 
// 		"x-api-key": "demo",
// 		"Access-Control-Allow-Origin" : '*',
// 		"Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS"
// 	},
// 	  };
	  
// 	  let url = "https://api.chainbase.online/v1/account/tokens?chain_id=1&address="+add;
// 	  axios(url, requestOptions)
// 		.then((response) => {

// 			// Cast the response to the response template mentioned above response1
//   			// console.log(response.data);
// 			app.get('/get-assets-value', (req, res) => {
// 				res.json(response.data);
// 			})

// 			// TODO:
// 			// check the count value
// 			console.log(response.data.count);
// 			// then add the "current_usd_price" value coming in each object of the data array. The array length will be equal to the count fetched above
// 			let totalValue = 0;
// 			for (let i = 0; i < response.data.count; i++) {
// 			if (response.data.data[i] && response.data.data[i].current_usd_price) {
// 				const price = response.data.data[i].current_usd_price;
// 				totalValue += price;
// 			}
// 			}
// 			let isGreaterThan50 = false;
// 			if(totalValue > 50){
// 				isGreaterThan50 = true;
// 			}
// 			// if this total value is more than 50 dollar then it should return true, else false
// 			app.get('/total-value', (req, res) => {
// 				res.json({
// 					'total value': totalValue,
// 					'is greater than 50': isGreaterThan50
// 				});
// 			})
			
// 		});
// }

// getAssetsValue("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");

// let response2 = {
// 	"code": 0,
// 	"message": "ok",
// 	"data": [{
// 		block_number: 17265521,
//       block_timestamp: '2023-05-15T13:37:59Z',
//       burnt_fee: 1240247800323000,
//       contract_address: '',
//       cumulative_gas_used: 4984691,
//       effective_gas_price: 61060419063,
//       from_address: '0x32143a02fb6484d18c79fa0401c9bf760dd3de68',
//       gas: 50000,
//       gas_price: 61060419063,
//       gas_used: 21000,
//       input: '0x',
//       max_fee_per_gas: 999000000000,
//       max_priority_fee_per_gas: 2001000000,
//       nonce: 77538,
//       saving_fee: 19696731199677000,
//       status: 1,
//       to_address: '0x4868f1b29e3bef7e65aae55dde59fb9963220c00',
//       transaction_hash: '0xe3be05975c0387de80aff912e7404ddc2707ca65efd308231a2a993b16f51751',
//       transaction_index: 46,
//       tx_fee: 1282268800323000,
//       type: 2,
//       value: '72415390000000000'
// 	},{}],
// 	"next_page": 2,
// 	"count": 1951
//   };
// // GET transaction history
// async function getTxHistory(add){
	  
// 		var requestOptions = {
// 		  method: 'get',
// 		  headers: { 'accepts': 'application/json', 
// 		  "x-api-key": "demo",
// 		  'Access-Control-Allow-Origin' : '*' },
// 		  //data: data,
// 		};
// 		let url = "https://api.chainbase.online/v1/account/txs?chain_id=1&address="+add+"&from_block=0"
// 		axios(url, requestOptions)
//   .then((response) => {
	
// 	// let count = x.count;
//     // console.log(response.data);

// 	// TODO:
// 			// Cast the response to the response template mentioned above response2
// 			app.get('/get-transaction-history', (req, res) => {
// 				res.json(response.data);
// 			})

// 			// **** I have added this endpoint:
// 			// check the time coming here: response.data.data[response.data.count - 1].block_timestamp
// 				const dateString = response.data.data[response.data.count - 1].block_timestamp;

// 				// if its older than 3 months / 90 days, then return true, else false
// 				const date = new Date(dateString);
// 				const currentDate = new Date();
// 				const is90DaysOld = false;
// 				// Calculate the difference in days
// 				const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
// 				let daysDiff = Math.round(Math.abs((currentDate - date) / oneDay));

// 				console.log("Number of days:", daysDiff);
// 				if (daysDiff > 90){
// 					is90DaysOld = true;
// 				}
		
// 			app.get('/get-time', (req, res) => {
// 				res.json({
// 					'date': response.data.data[response.data.count - 1].block_timestamp,
// 					'is90DaysOld': is90DaysOld
// 				});
// 			})

// 			// check the count value
// 			// then check only the first object of the data array. The array length will be equal to the count fetched above
// 			// in this first object check the field "block_number"
// 			// then send this block number to the function below "getTimeByBlockNum"
// 			// if it returns true then return true else false
//   });

// }

// getTxHistory("0x4868F1B29e3bEF7e65AaE55dDe59Fb9963220C00");

// async function getTimeByBlockNum(){
// 	//const web3Instance = new Web3(window['ethereum']);
// 	//let block = await web3Instance.eth.getBlock(number);
// 	//let date = block.timestamp * 1000
// 	let date = new Date("2023-05-15T13:37:59Z");
// 	console.log("dd");
// 	console.log(date)
// 	let now = Date.now()
// 	console.log(now)
// 	let difference = now - date
// 	console.log(difference)

// 	var daysDifference = Math.floor(difference/1000/60/60/24);
//     difference -= daysDifference*1000*60*60*24

//     var hoursDifference = Math.floor(difference/1000/60/60);
//     difference -= hoursDifference*1000*60*60

//     var minutesDifference = Math.floor(difference/1000/60);
//     difference -= minutesDifference*1000*60

//     var secondsDifference = Math.floor(difference/1000);

//     // console.log('difference = ' + 
//     //   daysDifference + ' day/s ' + 
//     //   hoursDifference + ' hour/s ' + 
//     //   minutesDifference + ' minute/s ' + 
//     //   secondsDifference + ' second/s ');

// 	if(daysDifference >= 90)
// 		console.log("eligible")
// 	else console.log("not eligible")
// }

// app.listen(process.env.PORT || 8080, ()=>{
// 	console.log('listening on port 8080');
// } )


// // *********** MUST READ ***********

// // From the above endpoints,
// // website will only use two of them: /get-time and '/total-value'
// // call them from airdropEligibility function in script.js of website



const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
	res.send('Working...')
});

// Endpoint to get assets value
app.get('/get-assets-value/:address', (req, res) => {
	const address = req.params.address;
	getAssetsValue(address)
		.then((response) => {
			res.json(response.data);
		})
		.catch((error) => {
			res.status(500).json({ error: error.message });
		});
});

// Endpoint to get total value
app.get('/total-value/:address', (req, res) => {
	const address = req.params.address;
	getAssetsValue(address)
		.then((response) => {
			const totalValue = calculateTotalValue(response.data);
			const isGreaterThan50 = totalValue > 50;
			res.json({
				'total value': totalValue,
				'is greater than 50': isGreaterThan50
			});
		})
		.catch((error) => {
			res.status(500).json({ error: error.message });
		});
});

// Endpoint to get transaction history
app.get('/get-date-info/:address', (req, res) => {
	const address = req.params.address;
	getTxHistory(address)
		.then((response) => {
			const is90DaysOld = checkIf90DaysOld(response.data);
			res.json({
				'date': response.data.data[response.data.count - 1].block_timestamp,
				'is90DaysOld': is90DaysOld
			});
		})
		.catch((error) => {
			res.status(500).json({ error: error.message });
		});
});

// Function to get assets value
async function getAssetsValue(address) {
	const requestOptions = {
		method: 'get',
		headers: {
			'accepts': 'application/json',
			"x-api-key": "demo",
			"Access-Control-Allow-Origin": '*',
			"Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS"
		},
	};

	const url = `https://api.chainbase.online/v1/account/tokens?chain_id=1&address=${address}`;
	return axios(url, requestOptions);
}

// Function to calculate total value
function calculateTotalValue(data) {
	let totalValue = 0;
	for (let i = 0; i < data.count; i++) {
		if (data.data[i] && data.data[i].current_usd_price) {
			const price = data.data[i].current_usd_price;
			totalValue += price;
		}
	}
	return totalValue;
}

// Function to get transaction history
async function getTxHistory(address) {
	const requestOptions = {
		method: 'get',
		headers: {
			'accepts': 'application/json',
			"x-api-key": "demo",
			'Access-Control-Allow-Origin': '*'
		},
	};

	const url = `https://api.chainbase.online/v1/account/txs?chain_id=1&address=${address}&from_block=0`;
	return axios(url, requestOptions);
}

// Function to check if transaction is 90 days old
function checkIf90DaysOld(data) {
	const dateString = data.data[data.count - 1].block_timestamp;
	const date = new Date(dateString);
	const currentDate = new Date();
	const daysDiff = Math.round(Math.abs((currentDate - date) / (24 * 60 * 60 * 1000)));
	return daysDiff > 90;
}

app.listen(process.env.PORT || 8080, () => {
	console.log('listening on port 8080');
});
