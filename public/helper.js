const renderResponse = (res) => {
  // Handles if res is falsey
  if(!res){
    console.log(res.status);
  }
  const answer = JSON.parse(JSON.stringify(res));
  const lat = answer.inputs.lat;
  const long = answer.inputs.lon;
  const source = answer.metadata.sources;
  
  if(answer.outputs.avg_ghi === "no data"){
	responseField.innerHTML = `<p align="justify">
  							 Global Horizontal Irradiance at: ${lat}°, ${long}°
  							 <br>
  							 Source: ${source}
  							 <br>
  							 No data available for this location!
  							 <br>
  							 Please, try again with other location.
  							 </p>`;
	
  }else {
	
  
	  const annual = answer.outputs.avg_ghi.annual;
	  const monthly = answer.outputs.avg_ghi.monthly;
	  const jan = answer.outputs.avg_ghi.monthly.jan;
	  const feb = answer.outputs.avg_ghi.monthly.feb;
	  const mar = answer.outputs.avg_ghi.monthly.mar;
	  const apr = answer.outputs.avg_ghi.monthly.apr;
	  const may = answer.outputs.avg_ghi.monthly.may;
	  const jun = answer.outputs.avg_ghi.monthly.jun;
	  const jul = answer.outputs.avg_ghi.monthly.jul;
	  const aug = answer.outputs.avg_ghi.monthly.aug;
	  const sep = answer.outputs.avg_ghi.monthly.sep;
	  const oct = answer.outputs.avg_ghi.monthly.oct;
	  const nov = answer.outputs.avg_ghi.monthly.nov;
	  const dec = answer.outputs.avg_ghi.monthly.dec;
	  
	  responseField.innerHTML = `<p align="justify">
	  							 Global Horizontal Irradiance at: ${lat}°, ${long}°
	  							 <br>
	  							 Source: ${source}
	  							 <br>
	  							 Average Annual:		${annual} kWh/m².day
	  							 <br>
	  							 <br>
	  							 </p>
	  							 Avarege Monthly
	  							 <br>
	  							 <pre align="justify">Jan:		${jan} kWh/m².day</pre>
	  							 <pre align="justify">Feb:		${feb} kWh/m².day</pre>
	  							 <pre align="justify">Mar:		${mar} kWh/m².day</pre>
	  							 <pre align="justify">Apr:		${apr} kWh/m².day</pre>
	  							 <pre align="justify">May:		${may} kWh/m².day</pre>
	  							 <pre align="justify">Jun:		${jun} kWh/m².day</pre>
	  							 <pre align="justify">Jul:		${jul} kWh/m².day</pre>
	  							 <pre align="justify">Aug:		${aug} kWh/m².day</pre>
	  							 <pre align="justify">Sep:		${sep} kWh/m².day</pre>
	  							 <pre align="justify">Oct:		${oct} kWh/m².day</pre>
	  							 <pre align="justify">Nov:		${nov} kWh/m².day</pre>
	  							 <pre align="justify">Dec:		${dec} kWh/m².day</pre>`;
	  		   
	 const td = 0.8;
	 const energyField = document.getElementById("energy"); // kWh
	 const energy = energyField.value;
	 //console.log(`Energy desired is: ${energy}`);
	 //energy = energy*1000; // kWh -> Wh
	 let powerPV = ((energy/td)/(annual*30));
	 powerPV = Math.round(powerPV * 100) / 100;
	 //powerPV = powerPV/1000; // Wp -> kWp
	 let ejan = powerPV*td*jan*31;
	 ejan = Math.round(ejan * 100) / 100;
	 let efeb = powerPV*td*feb*28;
	 efeb = Math.round(efeb * 100) / 100;
	 let emar = powerPV*td*mar*31;
	 emar = Math.round(emar * 100) / 100;
	 let eapr = powerPV*td*apr*30;
	 eapr = Math.round(eapr * 100) / 100;
	 let emay = powerPV*td*may*31;
	 emay = Math.round(emay * 100) / 100;
	 let ejun = powerPV*td*jun*30;
	 ejun = Math.round(ejun * 100) / 100;
	 let ejul = powerPV*td*jul*31;
	 ejul = Math.round(ejul * 100) / 100;
	 let eaug = powerPV*td*aug*31;
	 eaug = Math.round(eaug * 100) / 100;
	 let esep = powerPV*td*sep*30;
	 esep = Math.round(esep * 100) / 100;
	 let eoct = powerPV*td*oct*31;
	 eoct = Math.round(eoct * 100) / 100;
	 let enov = powerPV*td*nov*30;
	 enov = Math.round(enov * 100) / 100;
	 let edec = powerPV*td*dec*31;
	 edec = Math.round(edec * 100) / 100;
	 
	 
	 calcResultField.innerHTML = `<p align="justify">
	  							 For the Monthly Energy Average of: ${energy} kWh/month
	  							 <br>
	  							 Suggested System Power:	${powerPV} kWp
	  							 <br>
	  							 <br>
	  							 </p>
	  							 Expected Energy Generation Calculated
	  							 <br>
	  							 <pre align="justify">Jan:		${ejan} kWh</pre>
	  							 <pre align="justify">Feb:		${efeb} kWh</pre>
	  							 <pre align="justify">Mar:		${emar} kWh</pre>
	  							 <pre align="justify">Apr:		${eapr} kWh</pre>
	  							 <pre align="justify">May:		${emay} kWh</pre>
	  							 <pre align="justify">Jun:		${ejun} kWh</pre>
	  							 <pre align="justify">Jul:		${ejul} kWh</pre>
	  							 <pre align="justify">Aug:		${eaug} kWh</pre>
	  							 <pre align="justify">Sep:		${esep} kWh</pre>
	  							 <pre align="justify">Oct:		${eoct} kWh</pre>
	  							 <pre align="justify">Nov:		${enov} kWh</pre>
	  							 <pre align="justify">Dec:		${edec} kWh</pre>`;
	 
	 new Chart("myChart", {
	  type: "bar",
	  data: {
	    labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "out", "nov", "dec"],
	    datasets: [{
	      backgroundColor: "blue",
	      data: [ejan, efeb, emar, eapr, emay, ejun, ejul, eaug, esep, eoct, enov, edec]
	    }]
	  },
	  options: {
	    legend: {display: false}
	  }
	});
	 
	 return;
  }
}