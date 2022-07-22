import classes from "./Layout.module.css";
import Image from "next/image";

function Failed(props) {
  const { setPopup } = props;
  return (
    <div className={classes.success}>
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

        <h1>Attended Success</h1>
        <p>Congratulations you made it</p>
      </div>
    </div>
  );
}

export default Failed;