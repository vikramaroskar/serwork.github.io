const counters= document.querySelectorAll('counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        console.log('console');
        const target = +counter.getAttribute('data-target');

        const count = +counter.innerText;

        const inc = target/speed;

        console.log(count);
        console.log(target);
        console.log(inc);

        if (count < target) {
            count.innerText = Math.ceil(count+inc);
            setTimeout(updateCount, 1000);
        } else {
            count.innerText = target;
        }

    };

    updateCount();
    
});
