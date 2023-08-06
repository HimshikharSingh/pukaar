// components/CauseItem.js
import Link from "next/link";

const CauseItem = ({
  imageUrl,
  goal,
  raised,
  toGo,
  causeDetailsLink,
  causeTitle,
  adminImgUrl,
  adminName,
  donationLink,
}) => {
  return (
    <div className="causes-item mb-30">
      <div className="thumb">
        <img src={imageUrl} alt="Givest-HasTech" />
      </div>
      <div className="content">
        <ul className="donate-info">
          <li className="info-item">
            <span className="info-title">Goal:</span>
            <span className="amount">{goal}</span>
          </li>
          <li className="info-item">
            <span className="info-title">Raised:</span>
            <span className="amount">{raised}</span>
          </li>
          <li className="info-item">
            <span className="info-title">To Go:</span>
            <span className="amount">{toGo}</span>
          </li>
        </ul>
        <h4 className="title">
          <Link href={causeDetailsLink}>{causeTitle}</Link>
        </h4>
        <p>
          Lorem Ipsum is simply dummy text of the industry's since the unknown.
        </p>
      </div>
      <div className="causes-footer">
        <div className="admin">
          <h5>
            <Link href="/">
              <span className="icon-img">
                <img src={adminImgUrl} alt="Icon" />
              </span>{" "}
              {adminName}
            </Link>
          </h5>
        </div>
        <Link
          href={donationLink}
          
          className="btn-theme btn-border-gradient gray-border btn-size-md"
        >
          <span>
            Donate Now{" "}
            <img
              className="icon icon-img"
              src="/img/icons/arrow-line-right-gradient.png"
              alt="Icon"
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CauseItem;
