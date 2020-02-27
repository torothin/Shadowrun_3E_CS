import React from 'react';
import './file-dialogue.styles.scss';
import ReactFileReader from 'react-file-reader';

class FileDialogue extends React.Component {
  constructor(props)
    {
        super(props);
        this.state = {
          data: null,
        }
    }

    handleFiles = (files) => {
      const data = JSON.parse(atob(files.base64.split(",")[1]));
      this.props.loadCharacter(data);
    }

    // saveFile = (e) => {
    //   this.props.saveCharacter();
    // }

    // resetData = (e) => {
    //   this.props.resetData();
    // }

    render(){
      return (
        <div>
          <ReactFileReader 
            fileTypes={[".json"]} 
            elementId={`1`} 
            base64={true} 
            multipleFiles={false} 
            handleFiles={this.handleFiles}
          >
            <button className='check-container'>
              <div className="dialog">Load Character</div>
            </button>
          </ReactFileReader>   
          <button 
            className='check-container'
            onClick={this.props.saveCharacter}>
              <div className="dialog">Save Character</div>
          </button>
          <button 
            className='check-container'
            onClick={this.props.resetData}>
              <div className="dialog">Reset</div>
          </button>
        </div>
        
        )

    }
  }
  
  export default FileDialogue;