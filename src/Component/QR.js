import React, { Component } from "react";
// import QRScan from "qrscan";
import QrReader from "react-qr-reader";

// class QR extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "", watching: false };
//     this.onFind = this.onFind.bind(this);
//   }

//   onFind(value) {
//     this.setState({ value, watching: false });
//   }

//   render() {
//     return (
//       <>
//         <h1>QRScan Demo</h1>
//         {this.state.watching ? (
//           <QRScan onFind={this.onFind} />
//         ) : (
//           <>
//             <button onClick={() => this.setState({ watching: true })}>
//               Scan
//             </button>
//             <h4>value: {this.state.value}</h4>
//           </>
//         )}
//       </>
//     );
//   }
// }

class QR extends Component {
  state = {
    result: "No result",
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "300px", margin: "auto" }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QR;
