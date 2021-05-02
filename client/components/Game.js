import textNodes from './GameText';
import React from 'react';
import MessagesList from './MessagesList';
import { updateTextNodeThunk } from '../store';
import { connect } from 'react-redux';

class Game extends React.Component {
  constructor() {
    super();
    this.startGame = this.startGame.bind(this);
    this.showTextNode = this.showTextNode.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  startGame() {
    // this.setState(initState);
    this.showTextNode(0);
  }

  showTextNode(nextNode) {
    //I think this is what i need to add to store...
    console.log('nextNode', nextNode);
    const textNode = textNodes.find((textNode) => textNode.id === nextNode);
    console.log('textNode', textNode);
    this.props.updateNode(textNode);
    // this.setState({ textNode, textNodeIndex: textNode.id });
  }
  componentDidMount() {
    this.showTextNode(0);
  }
  componentDidUpdate(prevProps) {
    prevProps.textNode !== this.props.textNode;
  }
  selectOption(option) {
    const nextNode = option.nextText;
    if (nextNode <= 0) {
      return this.startGame();
    }
    this.showTextNode(nextNode);
  }

  render() {
    if (!this.props.textNode.text || !this.props.textNode.options) {
      return <h2>Loading!</h2>;
    } else {
      return (
        <div className="flex game">
          <div className="flexbaby gametext">
            <p>{this.props.textNode.text}</p>
            <div>
              {this.props.textNode.options.map((option, index) => {
                return (
                  <button
                    className="btn btn-primary btn-block choicebuttons"
                    key={index}
                    onClick={() => this.selectOption(option)}>
                    {option.text}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flexbaby">
            <MessagesList />
          </div>
        </div>
      );
    }
  }
}

const mapState = (state) => ({
  textNode: state.textNode,
});

const mapDispatch = (dispatch) => ({
  updateNode: (newNode) => dispatch(updateTextNodeThunk(newNode)),
});

export default connect(mapState, mapDispatch)(Game);
