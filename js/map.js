
function initMap(){
    const loc={lat:43.3661, lng: -71.057083};
    const map=new google.maps.Map(document.querySelector('.map'),{
        zoom:7,
        center:loc
    });
    const marker=new google.maps.Marker({position:loc,map:map});
}

// for transpernt navbar
window.addEventListener('scroll',function(){
    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity=0.8;
    }else{
        document.querySelector('#navbar').style.opacity=1;
    }
});

// for smooth scrolling
$('#navbar a, .btn').on('click',function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash=this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top-100
        },800);
    }
});