import classes from "./Layout.module.css";
import Image from "next/image";
import Link from "next/link";

function Success(props) {
  const { setPopup, event_id, leadName } = props;
  return (
    <div className={classes.success}>
      <div className={classes.close}>
        <Image
          src={"/images/icon/times.png"}
          width={15}
          height={15}
          layout={"fixed"}
          alt="times"
          onClick={() => setPopup(false)}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.image}>
          <Image
            src={"/images/success.png"}
            objectFit="contain"
            width={151}
            height={300}
            alt="success"
          />
        </div>

        <h1>Attended Success</h1>
        <p>Congratulations {leadName}, you made it</p>
        {/* <a href={`/${event_id}`}>Back</a> */}
      </div>
    </div>
  );
}

export default Success;
