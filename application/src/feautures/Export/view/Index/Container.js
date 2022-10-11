import React, { Component } from 'react'
import President from './President'
import { pushMessageSuccess } from '../../../../layouts/Notification'
import axios from 'axios'
import FileSaver from 'file-saver'

class Container extends Component {
  downloadConfig = () => {
    axios.get(process.env.REACT_APP_BASE_URL + '/api/v1/upload/file', { responseType: 'arraybuffer'})
      .then(response => {
        const dirtyFileName = response.headers['content-disposition'];
        console.log(dirtyFileName.dirtyFileName)
        const regex = /filename[^;=\n]*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/;
        var fileName = dirtyFileName.match(regex)[2].replace(".%2FExports%2F","");
        var blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        FileSaver.saveAs(blob, fileName);
        pushMessageSuccess("Download Config successfully!")
      })
  }
  render() {
    return (
      <President {...this.props}
        downloadConfig={this.downloadConfig}
      />
    )
  }
}


export default Container


