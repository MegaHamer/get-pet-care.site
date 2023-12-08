const Spiner = () => {
    return (
        <div id="spiner" style={{"position":"absolute","bottom":"50%","left":"50%","transform":"translate(-50%, 50%)"}}>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
        </div>

    );
}

export default Spiner;