const item = document.querySelectorAll(".card")

document.querySelector('#breakfastBtn').addEventListener('click',function(){
    item.forEach(item => {
        if (item.id != 'breakfast'){
            item.style.display = 'none';
        }
        else {
            item.style.display = 'flex';
        }
        
    })
})
document.querySelector('#lunchBtn').addEventListener('click',function(){
    item.forEach(item => {
        if (item.id != 'lunch'){
            item.style.display = 'none';
        }
        else {
            item.style.display = 'flex';
        }
        
    })
})
document.querySelector('#snacksBtn').addEventListener('click',function(){
    item.forEach(item => {
        if (item.id != 'snacks'){
            item.style.display = 'none';
        }
        else {
            item.style.display = 'flex';
        }
        
    })
})
document.querySelector('#dinnerBtn').addEventListener('click',function(){
    item.forEach(item => {
        if (item.id != 'dinner'){
            item.style.display = 'none';
        }
        else {
            item.style.display = 'flex';
        }
        
    })
})


document.querySelector('#allBtn').addEventListener('click', function() {
    item.forEach(element => {
        element.style.display = 'flex'; 
    });
})