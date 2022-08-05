import classes from "./Layout.module.css";
import Image from "next/image";

function Failed(props) {
  const { setPopup, errorMessage } = props;
  return (
    <div className={classes.failed}>
      <div className={classes.close}>
        <Image
          src={"/images/icon/times.png"}
          width={15}
          height={15}
          layout={"fixed"}
          onClick={() => setPopup(false)}
          alt="times"
        />
      </div>
      <div className={classes.content}>
        <div className={classes.image}>
          <Image
            src={"/images/failed.png"}
            objectFit="contain"
            width={277}
            height={280}
            alt="failed"
          />
        </div>
        {errorMessage ? <h1>Already Attended</h1> : <h1>Something Wrong</h1>}

        {errorMessage ? <p>{errorMessage}</p> : <p>Let&apos;s try again</p>}
      </div>
    </div>
  );
}

export default Failed;
