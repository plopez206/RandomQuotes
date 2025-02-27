import React from 'react';

const quotes = [
    { 
        phrase: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
        autor: "John Lennon",
        bgColor: "#FFD700" // Dorado, representa el paso del tiempo y la importancia del presente
    },
    { 
        phrase: "No cuentes los días, haz que los días cuenten.",
        autor: "Muhammad Ali",
        bgColor: "#FF4500" // Naranja fuerte, simboliza energía y acción
    },
    { 
        phrase: "El mayor riesgo es no correr ningún riesgo.",
        autor: "Mark Zuckerberg",
        bgColor: "#DC143C" // Rojo, representa riesgo y valentía
    },
    { 
        phrase: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        autor: "Nelson Mandela",
        bgColor: "#1E90FF" // Azul brillante, simboliza conocimiento y confianza
    },
    { 
        phrase: "Haz lo que puedas, con lo que tengas, donde estés.",
        autor: "Theodore Roosevelt",
        bgColor: "#228B22" // Verde fuerte, representa resiliencia y naturaleza
    },
    { 
        phrase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        autor: "Robert Collier",
        bgColor: "#8B4513" // Marrón, simboliza esfuerzo y constancia
    },
    { 
        phrase: "La única manera de hacer un gran trabajo es amar lo que haces.",
        autor: "Steve Jobs",
        bgColor: "#FF1493" // Rosa fuerte, representa pasión y amor por el trabajo
    },
    { 
        phrase: "No he fracasado. Solo he encontrado 10,000 maneras que no funcionan.",
        autor: "Thomas Edison",
        bgColor: "#800080" // Morado, relacionado con la creatividad y la innovación
    },
    { 
        phrase: "La felicidad no es algo listo. Viene de tus propias acciones.",
        autor: "Dalai Lama",
        bgColor: "#FFA500" // Naranja suave, representa calidez y alegría
    },
    { 
        phrase: "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.",
        autor: "Proverbio chino",
        bgColor: "#2E8B57" // Verde oscuro, simboliza crecimiento y oportunidad
    }
  ];
  

class QuoteMachine extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          message: '',
          by: '',
          color: ''
      };
      this.setRandomQuotes = this.setRandomQuotes.bind(this);
  }     

  getRandomQuotes = () => {
      return Math.floor(Math.random() * quotes.length);
  }

  setRandomQuotes = () => {
      const TheQuote = quotes[this.getRandomQuotes()];
      this.setState({
          message: TheQuote.phrase,
          by: TheQuote.autor,
          color: TheQuote.bgColor
      });
  }

  componentDidMount() {
      this.setRandomQuotes();
  }

  
  render() {
    const { message, by, color } = this.state;

    return (
      <div id="app-container" style={{ backgroundColor: color, transition: "background-color 0.5s ease" }}>
        <div id="quote-box">
          <blockquote id="text" style={{ color }}>
            “{message}”
          </blockquote>
          <p id="author" style={{ color }}>- {by}</p>
          <div id="buttons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              id="tweet-quote"
              href={`https://x.com/intent/tweet?text=${encodeURIComponent(message + " - " + by)}`}
            >
              <button className="social-button" style={{ backgroundColor: color }}>
                <img src="/RandomQuotes/x_logo.png" alt="X" />
              </button>
            </a>
            <button id="new-quote" onClick={this.setRandomQuotes} style={{ backgroundColor: color }}>
              New quote
            </button>
          </div>
          <footer>by Pablo</footer>
        </div>
      </div>
    );
  }
}



function App() {
  return (
    <div>
      <QuoteMachine />
    </div>
  );
}

export default App;
