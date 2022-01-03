import Button from "./components/Button"

const Main = () => {

    const backgroundColor = () => {
        let red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);

        const main = document.querySelector("main");
        if (main) {
            main.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
    }

    return (
        <main>
            <div className="buttonDiv">
                <Button text="Random" color="white" bg="blue" onClick={backgroundColor}/>
            </div>
        </main>
    )
}

export default Main
