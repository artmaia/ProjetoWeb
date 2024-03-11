import style from './footer.module.css'

function Footer() {
    return(
        <footer className={style.footer}>
            <div className={style.margemE}>
                <p>Projeto final da disciplima de</p>
                <p>Programação Web</p>
            </div>

            <div className={style.margemD}>
                <p>Engenharia de Software</p>
                <p>Devs: Arthur Maia, Matheu Sena, João Victor e Felipe Macklouf</p>
            </div>

        </footer>
    )
    
}

export default Footer;