class TopBoard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        var styles = `
        /* Font face with fallback fonts */
        @font-face {
            font-family: 'akashi';
            src: url("https://tigamestudios.github.io/akashi.ttf");
        }
        
        /* Root variables */
        :root {
            --default-font-family: 'akashi';
        }
        
        /* Body styles */
        body {
            font-family: var(--default-font-family);
            margin: 0;
            padding: 0;
        }
        
        /* Top board styles */
        .top-board {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
            padding: 8px;
            height: 60px;
        }
        
        .logo {
            width: 140px;
            height: auto;
            margin-right: 20px;
        }
        
        /* Burger menu styles */
        .burger-menu {
            width: 45px;
            height: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
            transition: transform 0.4s ease, height 0.4s ease; /* Add height transition */
        }
        
        .burger-line {
            width: 100%;
            height: 6px;
            background-color: white;
            border-radius: 1px;
            transition: height 0.4s ease; /* Add height transition */
        }
        
        .burger-menu:hover {
            transform: scale(1.1);
        }
        
        .burger-menu:active {
            transform: scale(1.05);
        }
        
        /* Menu styles */
        .menu {
            width: 40px;
            height: auto;
            cursor: pointer;
            transition: transform 0.4s ease;
        }
        
        .menu:hover {
            transform: scale(1.15);
        }
        
        .menu:active {
            transform: scale(1.11);
        }
        
        /* Menu iframe styles */
        .menu-iframe {
            transition: transform 0.4s ease;
            transform: translateY(-100%);
            background-color: rgba(128, 128, 128, 0.568);
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            margin-right: 10px;
            z-index: 1000;
            border: none;
            width: 250px;
            height: 500px;
            border: 5px solid gray;
            border-radius: 10px;
        
            /* Fallback for browsers that don't support backdrop-filter */
            background-color: rgba(128, 128, 128, 0.8);
        }
        
        .menu-visible {
            transform: translateY(17%);
        }
        
        .menu-iframe h1 {
            color: blanchedalmond;
        }
        
        .menu-iframe * {
            font-family: var(--default-font-family);
        }
        
        .menu-iframe button {
            padding: 2px;
            margin: 20px;
            width: 100px;
            height: 25px;
            border-radius: 15px;
            border: 0px;
            transition: all 0.3s ease;
        }
        
        .menu-iframe button:hover {
            transform: scale(1.1);
        }        
        `
        
        this.shadowRoot.innerHTML = `
            <style>
                ${styles}
            </style>
            <div class="top-board">
                <a href="https://tigamestudios.github.io" target="_parent"><img class="logo" src="https://tigamestudios.github.io/cdn.tigamestudios.github.io/713233227553282161/favicon.png" alt="Logo" draggable="false" style="margin-left:10px;margin-top:21px;cursor:pointer;"><a>
                <div class="burger-menu" id="burger">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </div>
            </div>
            <div class="menu-iframe">
                <center>
                    <h1>MENU</h1><hr>
                    <a href="https://tigamestudios.github.io" target="_parent"><button>Home</button></a><br>
                    <a href="https://tigamestudios.github.io/games" target="_parent"><button>Games</button></a><br>
                    <a href="https://tigamestudios.github.io/about" target="_parent"><button>About</button></a><br>
                    <a href="https://tigamestudios.github.io" target="_parent"><button>Setting</button></a><br>
                    <a href="https://tigamestudios.github.io" target="_parent"><button>Support</button></a><br>
                    <a href="https://tigamestudios.github.io" target="_parent"><button>Log Out</button></a><br>
                </center>
            </div>
        `;

        this.menuButton = this.shadowRoot.getElementById('burger');
        this.menuIframe = this.shadowRoot.querySelector('.menu-iframe');

        this.menuButton.addEventListener('click', () => {
            this.menuIframe.classList.toggle('menu-visible');
        });
    }
}

customElements.define('top-board', TopBoard);
