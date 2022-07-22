import axios from "axios";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import Btn from "../button/button";
import LoadingPage from "../loading/loading-page";
import classes from "./MainPage.module.css";

function MainPage(props) {
  const { event_id } = props;
  

  const [eventData, setEventData] = useState(null);
  const [eventName, setEventName] = useState("");

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const getEvent = async () => {
      try {
        const res = await axios.get(
          `https://sunniescrmrebornv2.suneducationgroup.com/api/public/event-registration/${event_id}/detail`,
          config
        );
        console.log(res);
        setEventData(res.data);
        setEventName(res.data.data.event_name);
      } catch (error) {
        console.error(error);
      }
    };

    event_id && getEvent();
  }, [event_id]);

  return !eventData ? (
    <LoadingPage />
  ) : (
    <section className={classes.mainpage}>
      <div className={classes.attandanceImg} data-aos="fade-right">
        <Image
          src="/images/Expo 1.png"
          alt="mainpage img"
          width={420}
          height={420}
          priority
          //   className={classes.attandaceIcon}
          //   layout={"responsive"}
          //   objectFit={"contain"}
        />
      </div>
      <div className={classes.mainContent} data-aos="zoom-in">
        <h1>Welcome To Sunnies Event</h1>
        <h3>
          {eventName &&
            eventName.split("-").map((name, idx) => {
              return (
                <Fragment key={idx}>
                  {name} <br />
                </Fragment>
              );
            })}
        </h3>
        <h3>Please select attendance method</h3>
        <div className={classes.action}>
          <Btn bg={"#16BD98"} link={`/${event_id}/admin/email`}>
            Email
          </Btn>

          <Btn bg={"#5BBED9"} link={`/${event_id}/admin/qr`}>
            QR Code
          </Btn>

          <Btn bg={"#6C5DDE"} link={`/${event_id}/admin/register_id`}>
            Registration ID
          </Btn>

          <Btn bg={"#F3B44A"} link={`/${event_id}/admin/mobile`}>
            Phone
          </Btn>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
