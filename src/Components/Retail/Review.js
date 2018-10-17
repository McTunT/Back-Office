import React from "react";
import ReactToPrint from "react-to-print";

class Review extends React.Component {
  render() {
    return (
      <div>
        <p>
          ขายทองกับออสสิริส ราคามาตราฐาน ถ้าคุณมีทองคำแท่งอยู่แล้ว
          เริ่มต้นขายทองให้เราได้เลย ไม่จำเป็นต้องซื้อทองคำจากเราก่อน
        </p>
      </div>
    );
  }
}

class Print extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#Retail">Print this out!</a>}
          content={() => this.componentRef}
          onBeforePrint={() => {
            console.log("before print!");
          }}
          onAfterPrint={() => {
            console.log("after print!");
          }}
        />
        <Review ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Print;
