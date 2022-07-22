import Image from "next/image";
// import { useState } from "react";
import BtnAction from "./BtnAction";
import classes from "./Card.module.css";
// import Failed from "./popup/Failed";
// import Popup from "./popup/Layout";
// import Success from "./popup/Succes";

function Card(props) {
  const {
    popupSuccess,
    setPopupSuccess,
    popupFailed,
    setPopupFailed,
    detailActive,
    setDetailActive,
    data,
    leadId,
    setLeadId,
  } = props;
  // const [popupSuccess, setPopupSuccess] = useState(false);
  // const [popupFailed, setPopupFailed] = useState(false);

  const handleDetail = (lead_id) => {
    setLeadId(lead_id);
    setDetailActive(true);
    // console.log(lead_id);
  };

  return (
    <div className={classes.card} data-aos="fade-right">
      {/* {popupSuccess && (
        <Popup>
          <Success setPopup={setPopupSuccess} />
        </Popup>
      )}
      {popupFailed && (
        <Popup>
          <Failed setPopup={setPopupFailed} />
        </Popup>
      )} */}

      <div className={classes.card_container}>
        <div className={classes.image_user}>
          <div className={classes.initial_user}>SC</div>
        </div>
        <div className={classes.content}>
          <div className={classes.basic_info}>
            <div>
              <h2>{data?.full_name}</h2>
              <p>
                Email <b>{data?.email}</b> <span>-</span>
                <br /> Mobile Phone <b>+62 {data?.mobile}</b>
              </p>
            </div>
            <div className={classes.date}>
              <p>6 Jul 2022 03:29 PM</p>
            </div>
          </div>
          <div className={classes.address}>
            <div className={classes.address_detail}>
              <p>
                Live at {data?.address}, {data?.zip_code}, {data?.kelurahan},{" "}
                {data?.kecamatan}, {data?.dt2} {data?.kabupaten},{" "}
                {data?.provinsi}. Interested in studying abroad in{" "}
                {data?.program_interested} - {data?.major_interested} in{" "}
                {data?.destination_of_study}, plain in {data?.planning_year}.
                Previous/ Current School at {data?.precur_school}
              </p>
              <div className={classes.inv}>
                <span>{data?.register_id}</span>
              </div>
            </div>
            <div className={classes.action}>
              <div onClick={() => handleDetail(data?.leads_id)}>
                <BtnAction bg={"#F3B44A"}>
                  <Image
                    src={"/images/icon/bxs_user.png"}
                    width={28}
                    height={28}
                    layout={"fixed"}
                    alt={'user'}
                  />
                  <span>Detail</span>
                </BtnAction>
              </div>

              <div onClick={() => setPopupFailed(!popupFailed)}>
                <BtnAction bg={"#16BD98"}>
                  <Image
                    src={"/images/icon/check.png"}
                    width={28}
                    height={28}
                    layout={"fixed"}
                    style={{ marginTop: "3px" }}
                    alt="check"
                  />
                  <span>Attended</span>
                </BtnAction>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.action_mobile}>
        <BtnAction bg={"#F3B44A"} onClick={() => setDetailActive(true)}>
          <Image
            src={"/images/icon/bxs_user.png"}
            width={28}
            height={28}
            layout={"fixed"}
            alt="user"
          />
          <span>Detail</span>
        </BtnAction>

        <BtnAction bg={"#16BD98"}>
          <Image
            src={"/images/icon/check.png"}
            width={28}
            height={28}
            layout={"fixed"}
            style={{ marginTop: "3px" }}
            alt="check"
          />
          <span>Attended</span>
        </BtnAction>
      </div>
    </div>
  );
}

export default Card;
