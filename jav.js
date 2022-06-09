const fetchData = async () => {
    const response = await fetch("./posts.json");
    const data = await response.json();
    return data.posts;

}


// code execution start only after Dom Load
window.addEventListener('load', async () => {

    const container = document.querySelector('.desc');
    const data = await fetchData();
    console.log(data);

    data.forEach((post) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('desc');
        wrapper.innerHTML = `
        
        <div class="inner-box">
        <h4>Title -</h4>
        <p>${post.title}<p>
        </div>
        <div class="inner-box">
        <h4>Description -</h4>
        <p>${post.desc}<p>
        </div>
        <div class="inner-box">
        <h4>Category -</h4>
        <p>${post.category}<p>
        </div>
        <div class="inner-box">
        <h4>Author -</h4>
        <p>${post.author}<p>
        </div>
        `
        container.appendChild(wrapper);
        

    })


})
window.addEventListener('load', async () => {

    const container = document.querySelector('.desc1');
    const data = await fetchData();
    console.log(data);

    data.forEach((post) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('desc1');
        wrapper.innerHTML = `
        
        <div class="inner-box">
        <h4>Title -</h4>
        <p>${post.title}<p>
        </div>
        <div class="inner-box">
        <h4>Description -</h4>
        <p>${post.desc}<p>
        </div>
        <div class="inner-box">
        <h4>Category -</h4>
        <p>${post.category}<p>
        </div>
        <div class="inner-box">
        <h4>Author -</h4>
        <p>${post.author}<p>
        </div>
        `
        container.appendChild(wrapper);
        

    })
})


window.addEventListener('load', async () => {

    const container = document.querySelector('.desc3');
    const data = await fetchData();
    console.log(data);

    data.forEach((post) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('desc3');
        wrapper.innerHTML = `
        
        <div class="inner-box">
        <h4>Title -</h4>
        <p>${post.title}<p>
        </div>
        <div class="inner-box">
        <h4>Description -</h4>
        <p>${post.desc}<p>
        </div>
        <div class="inner-box">
        <h4>Category -</h4>
        <p>${post.category}<p>
        </div>
        <div class="inner-box">
        <h4>Author -</h4>
        <p>${post.author}<p>
        </div>
        `
        container.appendChild(wrapper);
        

    })
})
window.addEventListener('load', async () => {

    const container = document.querySelector('.desc4');
    const data = await fetchData();
    console.log(data);

    data.forEach((post) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('desc4');
        wrapper.innerHTML = `
        
        <div class="inner-box">
        <h4>Title -</h4>
        <p>${post.title}<p>
        </div>
        <div class="inner-box">
        <h4>Description -</h4>
        <p>${post.desc}<p>
        </div>
        <div class="inner-box">
        <h4>Category -</h4>
        <p>${post.category}<p>
        </div>
        <div class="inner-box">
        <h4>Author -</h4>
        <p>${post.author}<p>
        </div>
        `
        container.appendChild(wrapper);
        

    })
})