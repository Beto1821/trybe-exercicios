import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
    } = this.props.pokemon;
    return (
      <section className='pokemon'>
        <div>
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>Peso: 
            {value}
            {measurementUnit}
          </p>
        </div>
          <img src={image} alt='imagem de um pokemon' />
      </section>
    );
  }
}

export default Pokemon;
