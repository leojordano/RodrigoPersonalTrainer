const header = new Vue({
    el: '#body',
    data: {
        isOpen: 'open',
    },
    created: () => {
        const btns = [...document.querySelector('.deeps-btn').children]
        const contents = [...document.querySelector('.deeps').children]
        
        function hideAllTabs() {
            contents.map(item => {
                if(item.dataset.default) {   
                    let btn = btns.filter(el => el.id === item.dataset.id)
                    btn[0].classList.add('seted')

                } else {
                    return item.classList.add('none')
                }
            })
        }
        hideAllTabs()


        scroll()
        function scroll() {
            let menu = document.querySelector('.menu')
                
            if(window.scrollY < 300) {
                return menu.classList.add('fixo')
            } else {
                return menu.classList.remove('fixo')
            }
        }

        window.addEventListener('scroll', () => {
            scroll()
        })
    },
    methods: {
        openSideMenu: () => {
            const sideMenu = document.querySelector('.side-menu')
            sideMenu.classList.add('open')
        },

        closeSideMenu: () => {
            const sideMenu = document.querySelector('.side-menu')
            sideMenu.classList.remove('open')
        },

        setTab: value => {
            const btns = [...document.querySelector('.deeps-btn').children]
            const contents = [...document.querySelector('.deeps').children]
            
            contents.map(item => {
                if(item.dataset.id == value) {
                    return item.classList.remove('none')
                } else {
                    return item.classList.add('none')
                }
            })

            btns.map(item => {
                if(item.id == value) {
                    return item.classList.add('seted')
                } else {
                    return item.classList.remove('seted')
                }
            })
        }
    }
})