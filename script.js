window.addEventListener('load', async e => {
    const URL = 'https://kodaktor.ru/cart_data.json';
    const x = await fetch(URL).then(x => x.json());
    //prices  -  x.hdd x.sdd x.usbdrive
    document.querySelector('#hddPrice').innerHTML = x.hdd;
    document.querySelector('#ssdPrice').innerHTML = x.sdd;
    document.querySelector('#usbPrice').innerHTML = x.usbdrive;
    isLimit = confirm('Если у Вас есть денежный лимит, нажмите "Ок", если лимита нет, нажмите "Отмена"', '');
    if (isLimit === true) {
        // if maxLimit -on;
        // onclick
        document.querySelector('#accept').addEventListener('click', function() {
            let maxVal = document.querySelector('#maxVal').value;
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
            //ondrag with limit
            const el1 = document.querySelector('#item1'),
                el2 = document.querySelector('#item2'),
                el3 = document.querySelector('#item3'),
                d = document.querySelector('#droppable');
            el1.addEventListener('dragstart', ev => ev.dataTransfer.setData('text/plain', ev.target.id));
            el2.addEventListener('dragstart', ev => ev.dataTransfer.setData('text/plain', ev.target.id));
            el3.addEventListener('dragstart', ev => ev.dataTransfer.setData('text/plain', ev.target.id));
            d.addEventListener('dragover', ev => ev.preventDefault()); // позволить продолжить бросание  
            d.addEventListener('drop', function(e) {
                if (e.dataTransfer.getData('text/plain') == 'item1') {
                    totalCost += +x.hdd;
                    if (totalCost < maxVal) {
                        document.querySelector('#cart').innerHTML += '<p>HDD</p>';
                        document.querySelector('#totalCost').innerHTML = totalCost;
                        document.querySelector('#droppable').style.background = 'rgba(100,227,126,0.5)';
                        setTimeout(function() {
                            document.querySelector('#droppable').style.background = "URL('https://cdn2.iconfinder.com/data/icons/marmalade/128/128.png')";
                        }, 200);
                    } else {
                        alert('Вы привысили запланированный максимум');
                        totalCost -= +x.hdd;
                    };
                } else if (e.dataTransfer.getData('text/plain') == 'item2') {
                    totalCost += +x.sdd;
                    if (totalCost < maxVal) {
                        document.querySelector('#cart').innerHTML += '<p>SSD</p>';
                        document.querySelector('#totalCost').innerHTML = totalCost;
                        document.querySelector('#droppable').style.background = 'rgba(100,227,126,0.5)';
                        setTimeout(function() {
                            document.querySelector('#droppable').style.background = "URL('https://cdn2.iconfinder.com/data/icons/marmalade/128/128.png')";
                        }, 200);
                    } else {
                        alert('Вы привысили запланированный максимум');
                        totalCost -= +x.sdd;
                    };
                } else if (e.dataTransfer.getData('text/plain') == 'item3') {
                    totalCost += +x.usbdrive;
                    if (totalCost < maxVal) {
                        document.querySelector('#cart').innerHTML += '<p>USB Drive</p>';
                        document.querySelector('#totalCost').innerHTML = totalCost;
                        document.querySelector('#droppable').style.background = 'rgba(100,227,126,0.5)';
                        setTimeout(function() {
                            document.querySelector('#droppable').style.background = "URL('https://cdn2.iconfinder.com/data/icons/marmalade/128/128.png')";
                        }, 200);
                    } else {
                        alert('Вы привысили запланированный максимум');
                        totalCost -= +x.usbdrive;
                    };
                };

            });
        });


        // if maxLimit-off
    } else {
        document.querySelector('#limit').style.display = 'none';
        let totalCost = 0;
        // HDD
        document.querySelector('#item1').addEventListener('click', function() {
            totalCost += +x.hdd;
            document.querySelector('#cart').innerHTML += '<p>HDD</p>';
            document.querySelector('#totalCost').innerHTML = totalCost;
        });
        //SSD
        document.querySelector('#item2').addEventListener('click', function() {
            totalCost += +x.sdd;
            document.querySelector('#cart').innerHTML += '<p>SSD</p>';
            document.querySelector('#totalCost').innerHTML = totalCost;
        });
        //USB
        document.querySelector('#item3').addEventListener('click', function() {
            totalCost += +x.usbdrive;
            document.querySelector('#cart').innerHTML += '<p>USB Drive</p>';
            document.querySelector('#totalCost').innerHTML = totalCost;
        });
        //ondrag with limit off
        const el1 = document.querySelector('#item1'),
            el2 = document.querySelector('#item2'),
            el3 = document.querySelector('#item3'),
            d = document.querySelector('#droppable');
        el1.addEventListener('dragstart', ev => ev.dataTransfer.setData('text/plain', ev.target.id));
        el2.addEventListener('dragstart', ev => ev.dataTransfer.setData('text/plain', ev.target.id));
        el3.addEventListener('dragstart', ev => ev.dataTransfer.setData('text/plain', ev.target.id));
        d.addEventListener('dragover', ev => ev.preventDefault()); // позволить продолжить бросание  
        d.addEventListener('drop', function(e) {
            if (e.dataTransfer.getData('text/plain') == 'item1') {
                totalCost += +x.hdd;
                document.querySelector('#cart').innerHTML += '<p>HDD</p>';
                document.querySelector('#totalCost').innerHTML = totalCost;
                document.querySelector('#droppable').style.background = 'rgba(100,227,126,0.5)';
                setTimeout(function() {
                    document.querySelector('#droppable').style.background = "URL('https://cdn2.iconfinder.com/data/icons/marmalade/128/128.png')";
                }, 200);
            } else if (e.dataTransfer.getData('text/plain') == 'item2') {
                totalCost += +x.sdd;
                document.querySelector('#cart').innerHTML += '<p>SSD</p>';
                document.querySelector('#totalCost').innerHTML = totalCost;
                document.querySelector('#droppable').style.background = 'rgba(100,227,126,0.5)';
                setTimeout(function() {
                    document.querySelector('#droppable').style.background = "URL('https://cdn2.iconfinder.com/data/icons/marmalade/128/128.png')";
                }, 200);
            } else if (e.dataTransfer.getData('text/plain') == 'item3') {
                totalCost += +x.usbdrive;
                document.querySelector('#cart').innerHTML += '<p>USB Drive</p>';
                document.querySelector('#totalCost').innerHTML = totalCost;
                document.querySelector('#droppable').style.background = 'rgba(100,227,126,0.5)';
                setTimeout(function() {
                    document.querySelector('#droppable').style.background = "URL('https://cdn2.iconfinder.com/data/icons/marmalade/128/128.png')";
                }, 200);
            };
        });
    };
});
