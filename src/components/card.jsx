function MyCard(myvar) {
    return (
        <div class="card">
            <div class="top">
                <img class="mylogo"
                    src={myvar.logo}
                    />
            </div>

            <div class="buttonControl">

                <button>Start</button><br/>
                    <button>Stop</button>
            </div>

            <div class="currentstatus">
                <p>{myvar.status}</p>
            </div>

            <div class="bottom">
                <div class="liveterminal">
                    <p class="terminal-name">{myvar.terminal}</p>
                </div>
            </div>
        </div>

    )
}

export {MyCard}