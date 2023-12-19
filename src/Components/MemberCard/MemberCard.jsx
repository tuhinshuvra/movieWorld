import DummyImg from '../../assets/member/dummyImages.png';
import "./MemberCard.css";

const MemberCard = ({ member }) => {
    return (
        <div className=" cardBodyText">
            <div className=" d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                    <img
                        src={member?.photoPath}
                        className="batchMemberImg"
                        alt="profile-image"
                        onError={(e) => {
                            e.target.src = DummyImg;
                        }}
                    />
                </div>
            </div>
            <div className=" card-body cardBodyArea">
                <p className=" text-center memberNameCard fw-bold">
                    {member?.fname ? <span>{member?.fname}</span> : <></>}
                    <span className=' mx-1'>{member?.name}</span>
                    {member?.nickName ? <>({member?.nickName})</> : <></>}
                </p>
                <div className="col-md-11">
                    <p className="text-muted my-0"> <b>Posting</b>  <span> : </span><span>{member?.postingPlace}</span></p>
                    <p className="text-muted my-0"> <b>BCS Batch & Cadre </b>  <span> : </span><span>{member?.bcsBatch}th, </span><span>{member?.bcsCadre} </span></p>
                    <p className="text-muted my-0 d-none d-md-block"> <b>JU Batch & Department </b><span> : </span><span>{member?.juBatch}th, {member?.department} </span></p>
                    <p className="text-muted my-0 d-none d-md-block"> <b>JU Hall</b> <span>: </span><span>{member?.hall}</span></p>
                    <p className="text-muted my-0"> <b>Blood Group</b> <span>: </span><small>{member?.bloodGroup} </small></p>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;