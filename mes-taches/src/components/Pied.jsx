const annee = new Date().getFullYear()

function Pied(){
    return(
        <footer className="pied">
            TP React - {annee}
        </footer>
    )
}

export default Pied