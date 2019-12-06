﻿
  window.addEventListener('load',  async e => {
    const URL = 'https://kodaktor.ru/cart_data.json';
    const x = await fetch(URL).then(x => x.json());
	//prices  -  x.hdd x.sdd x.usbdrive
  	document.querySelector('#hddPrice').innerHTML = x.hdd;
    document.querySelector('#ssdPrice').innerHTML = x.sdd;
    document.querySelector('#usbPrice').innerHTML = x.usbdrive;
  	document.querySelector('#accept').addEventListener('click', function() {
        let maxVal = document.querySelector('#maxVal').value;

        //cart start
        let totalCost = 0;
        // HDD
        document.querySelector('#item1').addEventListener('click', function() {
          totalCost += +x.hdd;
          if (totalCost < maxVal) {
            document.querySelector('#cart').innerHTML += '<p>HDD</p>';
            document.querySelector('#totalCost').innerHTML = totalCost;
          } else {
            alert('Вы привысили запланированный максимум');
            totalCost -= +x.hdd;
          };
        });
        //SSD
        document.querySelector('#item2').addEventListener('click', function() {
          totalCost += +x.sdd;
          if (totalCost < maxVal) {
            document.querySelector('#cart').innerHTML += '<p>SSD</p>';
            document.querySelector('#totalCost').innerHTML = totalCost;
          } else {
            alert('Вы привысили запланированный максимум');
            totalCost -= +x.sdd;
          };
        });
        //USB
        document.querySelector('#item3').addEventListener('click', function() {
          totalCost += +x.usbdrive; 
          if (totalCost < maxVal) {
            document.querySelector('#cart').innerHTML += '<p>USB Drive</p>';
            document.querySelector('#totalCost').innerHTML = totalCost;
          } else {
            alert('Вы привысили запланированный максимум');
            totalCost -= +x.usbdrive; 
          };
        });
	});
  //cart end
  //reload option
    document.querySelector('#reload').addEventListener('click', function() {
      window.location.reload(false);
    });
  });
  
 