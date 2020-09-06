const indexCss = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: 0px solid #000;
    outline: none;
}

body {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    font-size: 14px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
    color: #ccc;
    background: #000;
    user-select: none;
    pointer-events: none;
}

#root {
    width: 100%;
    height: 100%;
}
`;

module.exports = indexCss;
