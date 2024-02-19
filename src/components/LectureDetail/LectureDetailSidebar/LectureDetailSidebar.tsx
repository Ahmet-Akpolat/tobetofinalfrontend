import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import lectureService from "../../../services/lectureService";
import { selectContent } from "../../../store/slices/contentSlice";
import "./LectureDetailSidebar.css";

function LectureDetailSidebar({ setShowDetail, lectureId }: any) {
  const [liked, setLiked] = useState(false);
  const [contentLikeCount, setContentCountLike] = useState<number>(0);
  const content = useSelector(selectContent);
  const [allViewersCount, setViewersCount] = useState<number>(0);
  const [reloadFlag, setReloadFlag] = useState<boolean>(true);

  const getContentLikeCount = async () => {
    const contentLikeCount = (
      await lectureService.getContentLikeCount(content.id)
    ).data;
    setContentCountLike(contentLikeCount.count);
  };

  const likeContent = async () => {
    await lectureService.setContentLiked(content.id).then(() => {
      getContentLikeCount();
      contentIsLiked();
    });
  };

  const contentIsLiked = async () => {
    const likedLecture = (await lectureService.getContentLiked(content.id))
      .data;
    if (likedLecture) setLiked(likedLecture.isLiked);
  };

  const getContentViewers = async () => {
    const lectureViewersCount = (
      await lectureService.getLectureViewCount(lectureId, content.id)
    ).data;
    setViewersCount(lectureViewersCount.count);
  };

  useEffect(() => {
    contentIsLiked();
    getContentLikeCount();
    getContentViewers();
  }, [reloadFlag]);

  return (
    <div className="lecture-detail-sidebar">
      <div className="container">
        <div className="row mt-4">
          <div className="d-flex justify-content-between gap-5">
            <div className="content-img">
              <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
            </div>
            <div className="col-sm-10 col-xs-12">
              <div className="d-flex justify-content-between">
                <div className="lecture-info">
                  <h3>{content.name}</h3>
                  <div className="d-flex align-items-center gap-3">
                    <div className="content-type">
                      <span>VIDEO</span>
                    </div>
                    <div className="content-time d-flex align-items-center">
                      <img
                        className="time-img"
                        src="icons/timer_FILL0_wght100.svg"
                      ></img>
                      <strong>{`${content.duration} dk`}</strong>
                    </div>
                    <div className="content-views">
                      <img
                        className="views-img"
                        src="icons/visibility_FILL0.svg"
                      ></img>
                      <strong>{allViewersCount}</strong>
                    </div>
                  </div>
                  <div className="mt-1">
                    <img
                      className="content-like"
                      src={
                        liked === false
                          ? "icons/favorite_FILL0_wght100.svg"
                          : "icons/favorite_FILL1.svg"
                      }
                      onClick={() => {
                        likeContent();
                      }}
                    />
                    {contentLikeCount}
                  </div>
                </div>
                <div className="row gap-4">
                  <div className="d-flex gap-2 align-items-center">
                    <div>
                      <button className="content-detail-button">
                        <strong>EGITIME GIT</strong>
                      </button>
                    </div>
                    <div className="more-button">
                      <img src="icons/more_horiz_FILL1.svg"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-info mt-5"></div>
          <div className="content-info-section">
            <div className="d-flex gap-5">
              <div>
                <img src="icons/sell_FILL0.svg"></img>
                <strong> Kategori</strong>
              </div>
              <strong>{content.contentCategoryName}</strong>
            </div>
          </div>
          <div className="content-info-section">
            <div className="d-flex gap-5">
              <div>
                <img src="icons/public_FILL0.svg"></img>
                <strong> Dili</strong>
              </div>
              <strong>{content.languageName}</strong>
            </div>
          </div>
          <div className="content-info-section">
            <div className="d-flex gap-5">
              <div>
                <img src="icons/crossword_FILL0.svg"></img>
                <strong> Alt Tip</strong>
              </div>
              <strong>{content.subTypeName}</strong>
            </div>
          </div>
          <div className="content-info-section">
            <div className="d-flex gap-5">
              <div>
                <img src="icons/work_FILL0_wght100.svg"></img>
                <strong>Üretici Firma</strong>
              </div>
              <strong>{content.manufacturerName}</strong>
            </div>
          </div>
          <div>
            <div>
              <strong>İçerik</strong>
            </div>
            <text>{content.description}</text>
          </div>
        </div>
      </div>
      <button className="close-button" onClick={() => setShowDetail(false)}>
        X
      </button>
    </div>
  );
}

export default LectureDetailSidebar;
