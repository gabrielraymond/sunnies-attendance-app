import classes from "./qr-scanner.module.css";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Popup from "../attendance-page/popup/Layout";
import Success from "../attendance-page/popup/Succes";
import Failed from "../attendance-page/popup/Failed";
import LoadingPopup from "../attendance-page/popup/LoadingPopup";
import axios from "axios";
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

function QrScanner(props) {
  const { event_id } = props;
  const [popupSuccess, setPopupSuccess] = useState(false);
  const [popupFailed, setPopupFailed] = useState(false);
  const [popupLoading, setPopupLoading] = useState(false);
  const [data, setData] = useState("No result");
  const router = useRouter();
  const handleScan = async (data) => {
    if (data) {
      setPopupLoading(true);
      setData(data);
      console.log(data);
      try {
        const res = await axios.post(
          `https://sunniescrmrebornv2.suneducationgroup.com/api/public/event-registration/${event_id}/leads/scan/qr-code`,
          {
            register_id: data,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log(res);
        setPopupSuccess(true);
        setPopupLoading(false);
        setTimeout(function () {
          router.replace(`/${event_id}`);
        }, 5000);
      } catch (error) {
        console.error(error);
        setPopupFailed(true);
        setPopupLoading(false);
      }
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className={classes.qr_scanner}>
      {popupSuccess && (
        <Popup>
          <Success setPopup={setPopupSuccess} event_id={event_id} />
        </Popup>
      )}
      {popupFailed && (
        <Popup>
          <Failed setPopup={setPopupFailed} />
        </Popup>
      )}
      {popupLoading && (
        <Popup>
          <LoadingPopup setPopup={setPopupFailed} />
        </Popup>
      )}
      <h1>Scan QR</h1>
      <div className={classes.scanner}>
        <div className={classes.camera}>
          <QrReader
            delay={500}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
        </div>
        <p>Place the QR Code in the box</p>
      </div>
    </div>
  );
}

export default QrScanner;
