const header = new Vue({
    el: '#header',
    data: {
        isOpen: 'open',
    },
    methods: {
        openSideMenu: () => {
            const sideMenu = document.querySelector('.side-menu')
            sideMenu.classList.add('open')
        },

        closeSideMenu: () => {
            console.log('lwo')
            const sideMenu = document.querySelector('.side-menu')
            sideMenu.classList.remove('open')
        }  
    }
})