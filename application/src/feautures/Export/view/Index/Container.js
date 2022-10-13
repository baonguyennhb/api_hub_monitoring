import React, { Component } from 'react'
import President from './President'
import { pushMessageSuccess } from '../../../../layouts/Notification'
import axios from 'axios'
import {pushMessageError} from '../../../../layouts/Notification'
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
  importConfig = () => {
    pushMessageError("Tính năng đang được cập nhật, vui lòng chờ thêm 1 khoảng thời gian!!!!!!")
  }
  render() {
    return (
      <President {...this.props}
        downloadConfig={this.downloadConfig}
        importConfig = {this.importConfig}
      />
    )
  }
}


export default Container


