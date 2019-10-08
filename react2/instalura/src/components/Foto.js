import React, { Component } from 'react';

import usuario from '../imgs/usuario.jpg';
import foto from '../imgs/foto.jpg';

export default class Foto extends Component {
    render() {
        return (
            <div className="foto">
                
                <FotoHeader foto={this.props.foto}/>

                <img alt="foto" className="foto-src" src={this.props.foto.urlFoto} />

                <FotoInfo foto={this.props.foto}/>

                <FotoAtualizacoes foto={this.props.foto}/>

            </div>
        );
    }
}

class FotoHeader extends Component {
    render() {
        return (
            <header className="foto-header">
                <figure className="foto-usuario">

                    <img src={this.props.foto.urlPerfil} alt="foto do usuario" />

                    <figcaption className="foto-usuario">
                        <a href="#"> {this.props.foto.loginUsuario} </a>
                    </figcaption>

                </figure>
                <time className="foto-data">{this.props.foto.horario}</time>
            </header>
        );
    }
}

class FotoInfo extends Component {
    render() {
        return (
            <div className="foto-info">

                <div className="foto-info-likes">
                    {
                        this.props.foto.likers.map(liker => {
                            return (<a href="#">liker.login,</a>)
                        })
                    }
                    <span>curtiram</span>
                </div>

                <p className="foto-info-legenda">
                    <a className="foto-info-autor">{this.props.foto.loginUsuario} </a>
                    <span>{this.props.foto.comentario}</span>
                </p>

                <ul className="foto-info-comentarios">
                    {
                        this.props.foto.comentarios.map(comentario => {
                        return   (<li className="comentario">
                                    <a className="foto-info-autor">{comentario.login}</a>
                                    <span>{comentario.texto}</span>
                                </li>)

                        })
                    }
                </ul>
            </div>
        );
    }
}

class FotoAtualizacoes extends Component {
    render() {
        return (
            <section className="fotoAtualizacoes">
                <a href="#" className="fotoAtualizacoes-like">Likar</a>
                <form className="fotoAtualizacoes-form">
                    <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
                    <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
                </form>
            </section>
        );
    }
}