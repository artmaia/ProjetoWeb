import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <section className='container'>
        <div className='bordao'>
            <h1>Experimente Grátis!</h1>
        </div>
        <div>
            <div className='login'>
                <div className='textos'>
                    <h2>Vamos começar?</h2>
                    <p>Para fazer o login é simples</p>
                    <p>Insira seu email e senha.</p>
                </div>
                <div>
                    <form action="">
                        <div  className='form'>
                            <div className='labelInput'>
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Digite seu Email'/>
                            </div>
                            <div className='labelInput'>
                                <label htmlFor="">Senha</label>
                                <input type="password" placeholder='Digite sua senha'/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <hr />
        </div>
        <div>
            <div className='cadastro'>
                <div className='textos'>
                    <h2>Não é usuário?</h2>
                    <p>Não se preocupe, para um</p>
                    <p>cadastro inicial informe uma</p>
                    <p>senha e um email válido.</p>
                </div>
                <div>
                    <form action="">
                        <div  className='form'>
                            <div className='labelInput'>
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Email para o cadastro'/>
                            </div>
                            <div className='labelInput'>
                                <label htmlFor="">Senha</label>
                                <input type="password" placeholder='Senha para o cadastro'/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <hr />
        </div>
        <div>
            <div className='loginAdmin'>
                <div className='textosAdmin'>
                    <h2>É um funcionário?</h2>
                    <p>Nos informe a senha fornecida</p>
                    <p>a vc pelo seu superior.</p>
                </div>
                <div>
                    <form action="">
                        <div  className='formAdmin'>
                            <div className='labelInput2'>
                                <label htmlFor="">Senha</label>
                                <input type="password" placeholder='Digite sua senha'/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

      </section>
      <Footer/>
    </>
  )
}

export default App
