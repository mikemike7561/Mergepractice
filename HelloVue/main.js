let pageData = {
    productName: "訂張票到月球",
    productDescription: "奢華太空之旅",
    imageSrc: [
        "HelloVue/images/first.jpg",
        "HelloVue/images/second.jpg",
        "HelloVue/images/space.jpg",
        "HelloVue/images/spaceship.jpg"
    ],
    h2ClassController:{
        centered:true,
        colorFont:false
    },
    pStyleController:{
        centered:true,
        'margin-left': '50px',
        color: 'blue',
        'font-size' : '20px',
        'dont-style':'italic'
    },
    imageStyleController:{
        margin: 'auto',
        display:'block',
        width:'50%'
    },
    imageAlt: "Photo from space"
};
const App = Vue.createApp({
    data(){
        return pageData;
    }
});
App.mount("#app");